import { max } from "d3-array";
import { union } from "lodash-es";
import { CartesianAxis } from "../axis/cartesian-axis";
import {
  AxisOptions,
  AxisScaleType,
  CartesianOptions,
  DataPoint,
  OrdinalDataPoint,
  SeriesOptions,
  VisualizationType,
} from "../cartesian";
import {
  CartesianAxisData,
  CartesianChartSelection,
} from "../cartesian-object";
import { ChartLayoutClass } from "../layout/cartesian-layout";
import { CartesianTooltip } from "../tooltip/cartesian-tooltip";
import { AreaSeriesRenderer } from "./renderer/area-series-renderer";
import { ColumnSeriesRenderer } from "./renderer/column-series-renderer";
import { LineSeriesRenderer } from "./renderer/line-series-renderer";
import { PointsSeriesRenderer } from "./renderer/points-series-renderer";
import { SeriesRenderer } from "./renderer/series-renderer";

export class CartesianSeries {
  public constructor(
    private readonly cartesianAxis: CartesianAxis,
    private readonly cartesianTooltip: CartesianTooltip
  ) {}

  public drawSeries(
    chartSelection: CartesianChartSelection,
    options: CartesianOptions
  ): void {
    const plotSelection = chartSelection.select<SVGGElement>(
      `.${ChartLayoutClass.Plot}`
    );
    const seriesSection = plotSelection.select<SVGGElement>(
      `.${ChartLayoutClass.Series}`
    );

    this.updateScale(plotSelection, options);

    options.series.forEach((seriesOption, seriesIndex) => {
      const xAxisData = this.getAxisData(
        plotSelection,
        options.xAxis[seriesOption.xIndex],
        true,
        seriesOption.xIndex
      );
      const yAxisData = this.getAxisData(
        plotSelection,
        options.yAxis[seriesOption.yIndex],
        false,
        seriesOption.yIndex
      );
      const seriesRenderer = this.getSeriesRenderer(seriesOption);

      seriesRenderer.drawSeries({
        seriesSection: seriesSection,
        seriesOption: seriesOption,
        seriesIndex: seriesIndex,
        xAxisData: xAxisData,
        yAxisData: yAxisData,
      });
    });
  }

  public getAxisData(
    plotSelection: CartesianChartSelection,
    axisOption: AxisOptions,
    isXAxis: boolean,
    axisPosition: number
  ): CartesianAxisData {
    const axisData = this.cartesianAxis.getAxisData(
      plotSelection,
      axisOption,
      isXAxis,
      axisPosition
    );
    if (axisData) {
      return axisData;
    } else {
      throw new Error("Axis Scale is not set.");
    }
  }

  private updateScale(
    plotSelection: CartesianChartSelection,
    options: CartesianOptions
  ): void {
    if (options.series.length === 0) {
      return;
    }

    this.updateXScale(plotSelection, options);
    this.updateYScale(plotSelection, options);
  }

  private updateXScale(
    plotSelection: CartesianChartSelection,
    options: CartesianOptions
  ): void {
    options.xAxis.forEach((axisOption, axisPosition) => {
      const combinedDomain = this.getXDomainForAllSeries(
        options.series,
        axisPosition,
        axisOption.scale
      );
      this.cartesianAxis.updateAxis(
        plotSelection,
        axisOption,
        true,
        axisPosition,
        combinedDomain
      );
    });
  }

  private updateYScale(
    plotSelection: CartesianChartSelection,
    options: CartesianOptions
  ): void {
    options.yAxis.forEach((axisOption, axisPosition) => {
      const combinedDomain = this.getYDomainForAllSeries(
        options.series,
        axisPosition,
        axisOption.scale
      );
      this.cartesianAxis.updateAxis(
        plotSelection,
        axisOption,
        false,
        axisPosition,
        combinedDomain
      );
    });
  }

  private getXDomainForAllSeries(
    seriesOptions: SeriesOptions[],
    axisPosition: number,
    scaleType: AxisScaleType
  ): number[] | string[] {
    const domains = seriesOptions
      .filter((series) => series.xIndex === axisPosition)
      .map((series) => this.getXDomain(series.data, scaleType));

    if (domains.length === 0) {
      return [];
    }

    return domains.reduce((previousDomain, currentDomain) =>
      this.getCombinedDomain(scaleType, previousDomain, currentDomain)
    );
  }

  private getYDomainForAllSeries(
    seriesOptions: SeriesOptions[],
    axisPosition: number,
    scaleType: AxisScaleType
  ): number[] | string[] {
    const domains = seriesOptions
      .filter((series) => series.yIndex === axisPosition)
      .map((series) => this.getYDomain(series.data, scaleType));

    if (domains.length === 0) {
      return [];
    }

    return domains.reduce((previousDomain, currentDomain) =>
      this.getCombinedDomain(scaleType, previousDomain, currentDomain)
    );
  }

  private getCombinedDomain(
    scaleType: AxisScaleType,
    domain1: number[] | string[],
    domain2: number[] | string[]
  ): number[] | string[] {
    if (scaleType !== AxisScaleType.Category) {
      return [
        Math.min((domain1 as number[])[0], (domain2 as number[])[0]),
        Math.max((domain1 as number[])[1], (domain2 as number[])[1]),
      ];
    } else {
      return union(domain1 as string[], domain2 as string[]);
    }
  }

  private getXDomain(
    dataPoints: DataPoint[],
    scaleType: AxisScaleType
  ): number[] | string[] {
    if (scaleType !== AxisScaleType.Category) {
      const x = dataPoints.map((point) => point.x as number);

      return [Math.min(...x), Math.max(...x)];
    } else {
      return (dataPoints as OrdinalDataPoint[]).map((dataPoint) => dataPoint.x);
    }
  }

  private getYDomain(
    dataPoints: DataPoint[] | OrdinalDataPoint[],
    scaleType: AxisScaleType
  ): number[] | string[] {
    if (scaleType !== AxisScaleType.Category) {
      return [
        0,
        max<DataPoint, number>(
          dataPoints as DataPoint[],
          (dataPoint) => dataPoint.y
        ),
      ] as number[];
    } else {
      return (dataPoints as OrdinalDataPoint[]).map((dataPoint) => dataPoint.y);
    }
  }

  public getSeriesRenderer(seriesOptions: SeriesOptions): SeriesRenderer {
    switch (seriesOptions.visualization.toLowerCase()) {
      case VisualizationType.Area:
        return new AreaSeriesRenderer(this.cartesianTooltip);

      case VisualizationType.Column:
        return new ColumnSeriesRenderer(this.cartesianTooltip);

      case VisualizationType.Points:
        return new PointsSeriesRenderer(this.cartesianTooltip);

      case VisualizationType.Line:
      default:
        return new LineSeriesRenderer(this.cartesianTooltip);
    }
  }
}

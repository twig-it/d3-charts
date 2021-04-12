import { defaultsDeep } from "lodash-es";
import { CartesianAxis } from "./axis/cartesian-axis";
import {
  AxisScaleType,
  CartesianOptions,
  DataPoint,
  getDefaultOptions,
  OrdinalDataPoint,
  RecursivePartial,
  SeriesOptions,
} from "./cartesian";
import { CartesianLayout } from "./layout/cartesian-layout";
import { CartesianLegend } from "./legend/cartesian-legend";
import { CartesianSeries } from "./series/cartesian-series";
import { CartesianTooltip } from "./tooltip/cartesian-tooltip";
import { Axis } from "d3-axis";
import { ScaleBand, ScaleContinuousNumeric, ScaleTime } from "d3-scale";
import { select, Selection } from "d3-selection";
import { fromResize } from "@twig-it/from-resize";
export class CartesianChart {
  private readonly layout: CartesianLayout = new CartesianLayout();
  private readonly axis: CartesianAxis = new CartesianAxis();
  private readonly legend: CartesianLegend = new CartesianLegend();
  private readonly tooltip: CartesianTooltip = new CartesianTooltip();
  private readonly series: CartesianSeries = new CartesianSeries(
    this.axis,
    this.tooltip
  );

  protected readonly options: CartesianOptions;
  private chartSelection: CartesianChartSelection;
  private destroyed: boolean = false;

  public constructor(
    protected readonly container: HTMLElement,
    partialOptions: RecursivePartial<CartesianOptions>
  ) {
    this.options = defaultsDeep({}, partialOptions, getDefaultOptions());
    this.chartSelection = this.buildChartSelection(container, this.options);

    this.setResponsive(this.options.responsive);
    this.draw();
  }

  public setResponsive(enabled: boolean): void {
    if (enabled) {
      fromResize(this.container, { emitOnStart: false }).subscribe(() =>
        this.redraw()
      );
    }
  }

  public draw(): void {
    this.drawLayout();
    this.drawAxes();
    this.drawSeries();
    this.drawLegends();
  }

  public redraw(): void {
    this.clear();
    this.chartSelection = this.buildChartSelection(
      this.container,
      this.options
    );
    this.draw();
  }

  public reflow(): void {
    throw new Error("Method not implemented.");
  }

  public addSeries(seriesOption: SeriesOptions, redraw: boolean): void {
    this.options.series.push(seriesOption);
    if (redraw) {
      this.series.drawSeries(this.chartSelection, this.options);
    }
  }

  public removeSeries(seriesName: string): void {
    this.options.series = this.options.series.filter(
      (seriesOption) => seriesOption.name !== seriesName
    );
    this.series.drawSeries(this.chartSelection, this.options);
  }

  public setData(
    seriesName: string,
    data: DataPoint[],
    render: boolean = true
  ): void {
    const currentSeriesOption = this.options.series.find(
      (seriesOption) => seriesOption.name === seriesName
    );

    if (!currentSeriesOption) {
      throw new Error(`Series: ${seriesName} does not exist`);
    }

    currentSeriesOption.data = data;

    if (render) {
      this.series.drawSeries(this.chartSelection, this.options);
    }
  }

  public addPoints(
    seriesName: string,
    data: DataPoint[],
    redraw: boolean
  ): void {
    const seriesOption = this.options.series.find(
      (series) => series.name === seriesName
    );
    if (seriesOption === undefined) {
      throw Error("Unknown series");
    }
    seriesOption.data.push(...data);

    if (redraw) {
      this.series.drawSeries(this.chartSelection, this.options);
    }
  }

  public addPoint(seriesName: string, datum: DataPoint, redraw: boolean): void {
    const seriesOption = this.options.series.find(
      (series) => series.name === seriesName
    );
    if (seriesOption === undefined) {
      throw Error("Unknown series");
    }
    seriesOption.data.push(datum);

    if (redraw) {
      this.series.drawSeries(this.chartSelection, this.options);
    }
  }

  public clear(): void {
    select(this.container).selectAll("svg").remove();
  }

  public destroy(): void {
    this.clear();
    this.destroyed = true;
  }

  private buildChartSelection(
    chartContainer: HTMLElement,
    options: CartesianOptions
  ): CartesianChartSelection {
    const width = chartContainer.offsetWidth;
    const height = chartContainer.offsetHeight;

    return select<HTMLElement, CartesianChart>(chartContainer)
      .append<SVGElement>("svg")
      .attr("height", height)
      .attr("width", width)
      .append<SVGGElement>("svg:g")
      .classed("chart", true)
      .attr("height", height - options.margin.top - options.margin.bottom)
      .attr("width", width - options.margin.left - options.margin.right)
      .attr(
        "transform",
        `translate(${options.margin.left}, ${options.margin.top})`
      );
  }

  private drawLayout(): void {
    this.layout.drawLayout(this.chartSelection, this.options);
  }

  private drawAxes(): void {
    this.axis.drawAxes(this.chartSelection, this.options);
  }

  private drawLegends(): void {
    this.legend.drawLegends(this.chartSelection, this.options);
  }

  private drawSeries(): void {
    this.series.drawSeries(this.chartSelection, this.options);
  }

  protected throwIfDestroyed(): void {
    if (this.destroyed) {
      throw new Error("This CartesianChart has been destroyed");
    }
  }
}

/*
 * @ignore for documentation
 */
export type CartesianContainerSelection = Selection<
  HTMLElement,
  CartesianChart,
  null,
  undefined
>;

/*
 * @ignore for documentation
 */
export type CartesianChartSelection = Selection<
  SVGGElement,
  CartesianChart,
  null,
  undefined
>;

/*
 * @ignore for documentation
 */
export type HTMLSelection = Selection<HTMLElement, {}, null, undefined>;

/*
 * @ignore for documentation
 */
export type SVGSelection = Selection<
  SVGElement,
  CartesianChart,
  null,
  undefined
>;

/*
 * @ignore for documentation
 */
export type SVGGAxisSelection = Selection<
  SVGGElement,
  CartesianAxisData,
  SVGElement,
  CartesianChart
>;

/*
 * @ignore for documentation
 */
export type SVGGAxisTitleSelection = Selection<
  SVGTextElement,
  string,
  SVGGElement,
  CartesianAxisData
>;

/*
 * @ignore for documentation
 */
export type SVGChildSelection = Selection<SVGElement, {}, SVGElement, {}>;

/*
 * @ignore for documentation
 */
export type AxisSelection = Selection<
  SVGElement,
  CartesianAxisData,
  SVGElement,
  {}
>;

/*
 * @ignore for documentation
 */
export type DataPointSelection = Selection<
  SVGElement,
  DataPoint | OrdinalDataPoint,
  null,
  undefined
>;

/*
 * @ignore for documentation
 */
export type ToolTipSelection = Selection<HTMLElement, {}, HTMLElement, unknown>;

/*
 * @ignore for documentation
 */
export type ScaleType =
  | ScaleContinuousNumeric<number, number>
  | ScaleTime<number, number>
  | ScaleBand<string>;

/*
 * @ignore for documentation
 */
export interface CartesianAxisData {
  axis: Axis<string | number | Date>;
  scaleType: AxisScaleType;
}

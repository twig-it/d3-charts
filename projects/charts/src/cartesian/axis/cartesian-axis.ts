import { AxisRenderer } from "./renderer/axis-renderer";

import { AxisOptions, CartesianOptions } from "../cartesian";
import {
  CartesianAxisData,
  CartesianChartSelection,
  ScaleType,
} from "../cartesian-chart";
import { ChartLayoutClass } from "../layout/cartesian-layout";
import { CartesianAxisScale } from "./cartesian-axis-scale";
import { XAxisBottomRenderer } from "./renderer/x-axis-bottom-renderer";
import { XAxisTopRenderer } from "./renderer/x-axis-top-renderer";
import { YAxisLeftRenderer } from "./renderer/y-axis-left-renderer";
import { YAxisRightRenderer } from "./renderer/y-axis-right-renderer";

export class CartesianAxis {
  private readonly cartesianAxisScale: CartesianAxisScale = new CartesianAxisScale();

  public drawAxes(
    chartSelection: CartesianChartSelection,
    options: CartesianOptions
  ): void {
    const plotSelection = chartSelection.select<SVGGElement>(
      `.${ChartLayoutClass.Plot}`
    );
    this.drawXAxes(plotSelection, options.xAxis);
    this.drawYAxes(plotSelection, options.yAxis);
  }

  public drawXAxes(
    plotSelection: CartesianChartSelection,
    axisOptions: AxisOptions[]
  ): void {
    this.drawAxis(plotSelection, axisOptions, true);
  }

  public updateAxis(
    plotSelection: CartesianChartSelection,
    axisOption: AxisOptions,
    isXAxis: boolean,
    axisPosition: number,
    domain: number[] | string[]
  ): void {
    const axisData = this.getAxisData(
      plotSelection,
      axisOption,
      isXAxis,
      axisPosition
    );
    if (!axisData) {
      return;
    }
    const seriesSectionSelection = plotSelection.select<SVGElement>(
      `.${ChartLayoutClass.Series}`
    );
    const seriesWidth = Number(seriesSectionSelection.attr("width"));
    const seriesHeight = Number(seriesSectionSelection.attr("height"));
    const scale = this.setDomain(axisData, domain);

    const axisSectionSelection = plotSelection.select<SVGElement>(
      this.getAxisSectionClass(isXAxis, axisOption.opposite)
    );
    const axisSelection = axisSectionSelection.selectAll<
      SVGGElement,
      CartesianAxisData
    >(`.axis-${axisPosition}`);

    const renderer = this.getRenderer(isXAxis, axisOption.opposite);
    renderer.drawAxis({
      axisSelection: axisSelection,
      axisOption: axisOption,
      seriesWidth: seriesWidth,
      seriesHeight: seriesHeight,
      scale: scale,
    });
  }

  public getAxisData(
    plotSelection: CartesianChartSelection,
    axisOption: AxisOptions,
    isXAxis: boolean,
    axisPosition: number
  ): CartesianAxisData | undefined {
    const axisSectionSelection = plotSelection.select<SVGElement>(
      this.getAxisSectionClass(isXAxis, axisOption.opposite)
    );
    const axisSelection = axisSectionSelection.selectAll<
      SVGElement,
      CartesianAxisData | undefined
    >(`.axis-${axisPosition}`);

    return axisSelection.datum();
  }

  public setDomain(
    axisData: CartesianAxisData,
    domain: number[] | string[]
  ): ScaleType {
    return this.cartesianAxisScale.setDomain(
      axisData.scaleType,
      axisData.axis,
      domain
    );
  }

  private drawYAxes(
    plotSelection: CartesianChartSelection,
    axisOptions: AxisOptions[]
  ): void {
    this.drawAxis(plotSelection, axisOptions, false);
  }

  private drawAxis(
    plotSelection: CartesianChartSelection,
    axisOptions: AxisOptions[],
    isXAxis: boolean
  ): void {
    const seriesSectionSelection = plotSelection.select<SVGElement>(
      `.${ChartLayoutClass.Series}`
    );
    const seriesWidth = Number(seriesSectionSelection.attr("width"));
    const seriesHeight = Number(seriesSectionSelection.attr("height"));

    axisOptions.forEach((axisOption, axisPosition) => {
      const axisSectionSelection = plotSelection.selectAll<
        SVGGElement,
        CartesianAxisData
      >(this.getAxisSectionClass(isXAxis, axisOption.opposite));
      const axisSelection = axisSectionSelection.select<SVGGElement>(
        `.axis-${axisPosition}`
      );

      const renderer = this.getRenderer(isXAxis, axisOption.opposite);
      renderer.drawAxis({
        axisSelection: axisSelection,
        axisOption: axisOption,
        seriesWidth: seriesWidth,
        seriesHeight: seriesHeight,
      });
    });
  }

  public getRenderer(isXAxis: boolean, isOpposite: boolean): AxisRenderer {
    if (isXAxis) {
      return !isOpposite
        ? new XAxisBottomRenderer(this.cartesianAxisScale)
        : new XAxisTopRenderer(this.cartesianAxisScale);
    } else {
      return !isOpposite
        ? new YAxisLeftRenderer(this.cartesianAxisScale)
        : new YAxisRightRenderer(this.cartesianAxisScale);
    }
  }

  private getAxisSectionClass(isXAxis: boolean, isOpposite: boolean): string {
    return AxisRenderer.getAxisSectionClass(isXAxis, isOpposite);
  }
}

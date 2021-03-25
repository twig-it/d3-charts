import { select } from "d3-selection";
import { defaultsDeep } from "lodash-es";
import { CartesianAxis } from "./axis/cartesian-axis";
import {
  CartesianOptions,
  DataPoint,
  getDefaultOptions,
  RecursivePartial,
  SeriesOptions
} from "./cartesian";
import { CartesianChartSelection, CartesianObject } from "./cartesian-object";
import { CartesianLayout } from "./layout/cartesian-layout";
import { CartesianLegend } from "./legend/cartesian-legend";
import { CartesianSeries } from "./series/cartesian-series";
import { CartesianTooltip } from "./tooltip/cartesian-tooltip";

export class CartesianChart extends CartesianObject {
  private readonly layout: CartesianLayout = new CartesianLayout();
  private readonly axis: CartesianAxis = new CartesianAxis();
  private readonly legend: CartesianLegend = new CartesianLegend();
  private readonly tooltip: CartesianTooltip = new CartesianTooltip();
  private readonly series: CartesianSeries = new CartesianSeries(
    this.axis,
    this.tooltip
  );

  private readonly chartSelection: CartesianChartSelection;

  public constructor(
    chartContainer: HTMLElement,
    partialOptions: RecursivePartial<CartesianOptions>
  ) {
    super(
      chartContainer,
      defaultsDeep({}, partialOptions, getDefaultOptions())
    );
    this.chartSelection = this.buildChartSelection(
      chartContainer,
      this.options
    );
  }

  public draw(): void {
    this.drawLayout();
    this.drawAxes();
    this.drawSeries();
    this.drawLegends();
  }

  public redraw(): void {
    this.clear();
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
      seriesOption => seriesOption.name !== seriesName
    );
    this.series.drawSeries(this.chartSelection, this.options);
  }

  public setData(
    seriesName: string,
    data: DataPoint[],
    render: boolean = true
  ): void {
    const currentSeriesOption = this.options.series.find(
      seriesOption => seriesOption.name === seriesName
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
      series => series.name === seriesName
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
      series => series.name === seriesName
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
    this.chartSelection.selectAll("*").remove();
  }

  private buildChartSelection(
    chartContainer: HTMLElement,
    options: CartesianOptions
  ): CartesianChartSelection {
    const containerSelection = select<HTMLElement, CartesianObject>(
      chartContainer
    );
    const width = (containerSelection.node() as HTMLElement).offsetWidth;
    const height = (containerSelection.node() as HTMLElement).offsetHeight;

    return containerSelection
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
}

import { Axis } from 'd3-axis';
import { ScaleBand, ScaleContinuousNumeric, ScaleTime } from 'd3-scale';
import { select, Selection } from "d3-selection";
import { AxisScaleType, CartesianOptions, DataPoint, OrdinalDataPoint, SeriesOptions } from "./cartesian";

export abstract class CartesianObject {
  private destroyed: boolean = false;

  public constructor(
    protected readonly chartContainer: HTMLElement,
    protected readonly options: CartesianOptions
  ) {
    const containerSelection = select<HTMLElement, CartesianObject | undefined>(this.chartContainer);
    containerSelection.datum()?.destroy();
    containerSelection.datum(this);
  }

  public abstract draw(): void;
  public abstract redraw(): void;
  public abstract addSeries(seriesOption: SeriesOptions, redraw: boolean): void;
  public abstract removeSeries(seriesName: string): void
  public abstract setData(seriesName: string, data: DataPoint[], render: boolean): void;
  public abstract addPoints(seriesName: string, data: DataPoint[] | OrdinalDataPoint[], redraw: boolean): void;
  public abstract addPoint(seriesName: string, datum: DataPoint | OrdinalDataPoint, redraw: boolean): void;

  protected throwIfDestroyed(): void {
    if (this.destroyed) {
      throw new Error('This CartesianObject has been destroyed');
    }
  }

  public destroy(): void {
    // This should also be called when the object is detached from the HTMLElement.
    select(this.chartContainer).selectAll('svg').remove();
    this.destroyed = true;
  }
}

/*
 * @ignore for documentation
 */
export type CartesianContainerSelection = Selection<HTMLElement, CartesianObject, null, undefined>;

/*
 * @ignore for documentation
 */
export type CartesianChartSelection = Selection<SVGGElement, CartesianObject, null, undefined>;

/*
 * @ignore for documentation
 */
export type HTMLSelection = Selection<HTMLElement, {}, null, undefined>;

/*
 * @ignore for documentation
 */
export type SVGSelection = Selection<SVGElement, CartesianObject, null, undefined>;

/*
 * @ignore for documentation
 */
export type SVGGAxisSelection = Selection<SVGGElement, CartesianAxisData, SVGElement, CartesianObject>;

/*
 * @ignore for documentation
 */
export type SVGGAxisTitleSelection = Selection<SVGTextElement, CartesianAxisData, SVGElement, CartesianObject>;

/*
 * @ignore for documentation
 */
export type SVGChildSelection = Selection<SVGElement, {}, SVGElement, {}>;

/*
 * @ignore for documentation
 */
export type AxisSelection = Selection<SVGElement, CartesianAxisData, SVGElement, {}>;

/*
 * @ignore for documentation
 */
export type DataPointSelection = Selection<SVGElement, DataPoint | OrdinalDataPoint, null, undefined>;

/*
 * @ignore for documentation
 */
export type ToolTipSelection = Selection<HTMLElement, {}, HTMLElement, unknown>;

/*
 * @ignore for documentation
 */
export type ScaleType = ScaleContinuousNumeric<number, number> | ScaleTime<number, number> | ScaleBand<string>;

/*
 * @ignore for documentation
 */
export interface CartesianAxisData {
  axis: Axis<string | number | Date>;
  scaleType: AxisScaleType;
}

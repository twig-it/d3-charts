import { SeriesOptions } from "../../cartesian";
import {
  CartesianAxisData,
  CartesianChartSelection,
  DataPointSelection
} from "../../cartesian-object";
import { CartesianTooltip } from "../../tooltip/cartesian-tooltip";

export interface SeriesRendererConfig {
  seriesSection: CartesianChartSelection;
  seriesOption: SeriesOptions;
  seriesIndex: number;
  xAxisData: CartesianAxisData;
  yAxisData: CartesianAxisData;
}

export abstract class SeriesRenderer {
  protected constructor(
    protected readonly cartesianTooltip: CartesianTooltip
  ) {}

  public abstract drawSeries(config: SeriesRendererConfig): void;

  protected getSeriesSelection(
    seriesSection: CartesianChartSelection,
    seriesOption: SeriesOptions,
    seriesIndex: number
  ): CartesianChartSelection {
    const seriesClassName = `${seriesOption.name.replace(
      /\s/g,
      ""
    )}-${seriesIndex}`;
    let seriesSelection = seriesSection.select<SVGGElement>(
      `.${seriesClassName}`
    );

    if (seriesSelection.empty()) {
      seriesSelection = seriesSection
        .append<SVGGElement>("svg:g")
        .classed(seriesClassName, true);
    }

    return seriesSelection;
  }

  protected setToolTipGenerator(
    seriesOption: SeriesOptions,
    seriesSelection: CartesianChartSelection,
    dataPointSelection: DataPointSelection
  ): void {
    this.cartesianTooltip.setToolTipGenerator(
      seriesOption,
      seriesSelection,
      dataPointSelection
    );
  }
}

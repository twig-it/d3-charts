import { extent, min } from "d3-array";
import { select } from "d3-selection";
import { AxisScaleType, DataPoint, OrdinalDataPoint } from "../../cartesian";
import { CartesianTooltip } from "../../tooltip/cartesian-tooltip";
import { SeriesRenderer, SeriesRendererConfig } from "./series-renderer";

export class ColumnSeriesRenderer extends SeriesRenderer {
  public constructor(cartesianTooltip: CartesianTooltip) {
    super(cartesianTooltip);
  }

  public drawSeries(config: SeriesRendererConfig): void {
    if (config.xAxisData.scaleType === AxisScaleType.Category) {
      this.drawSeriesForCategoryScale(config);
    } else {
      this.drawSeriesForNumericScale(config);
    }
  }

  private drawSeriesForCategoryScale(config: SeriesRendererConfig): void {
    // Category Scale
    const data = config.seriesOption.data as OrdinalDataPoint[];
    const xScale = config.xAxisData.axis.scale();
    const yScale = config.yAxisData.axis.scale();
    const height = Number(config.seriesSection.attr("height"));

    const seriesSelection = this.getSeriesSelection(
      config.seriesSection,
      config.seriesOption,
      config.seriesIndex
    );

    const colSelection = seriesSelection
      .selectAll<SVGRectElement, DataPoint>("rect")
      .data(data);

    colSelection.exit().remove();

    colSelection
      .enter()
      .append("rect")
      .merge(colSelection)
      .style("fill", config.seriesOption.color)
      .attr("x", dataPoint => xScale(dataPoint.x)!)
      .attr("y", dataPoint => yScale(dataPoint.y)!)
      .attr("width", () => xScale.bandwidth!())
      .attr("height", dataPoint => height - yScale(dataPoint.y)!)
      .each((_dataPoint, index, nodes) => {
        const thisSelection = select<SVGElement, DataPoint | OrdinalDataPoint>(
          nodes[index] as SVGElement
        );
        this.setToolTipGenerator(
          config.seriesOption,
          seriesSelection,
          thisSelection
        );
      });
  }

  private drawSeriesForNumericScale(config: SeriesRendererConfig): void {
    const data = config.seriesOption.data;
    const xScale = config.xAxisData.axis.scale();
    const yScale = config.yAxisData.axis.scale();
    const height = Number(config.seriesSection.attr("height"));

    const minColumnWidth = this.getMinColumnWidth(data);
    const seriesSelection = this.getSeriesSelection(
      config.seriesSection,
      config.seriesOption,
      config.seriesIndex
    );

    const colSelection = seriesSelection
      .selectAll<SVGRectElement, DataPoint>("rect")
      .data(data);

    colSelection.exit().remove();

    colSelection
      .enter()
      .append("rect")
      .merge(colSelection)
      .style("fill", config.seriesOption.color)
      .attr(
        "x",
        dataPoint =>
          xScale(new Date((dataPoint.x as number) - minColumnWidth / 2))!
      )
      .attr("y", dataPoint => yScale(dataPoint.y)!)
      .attr(
        "width",
        dataPoint =>
          xScale(new Date((dataPoint.x as number) + minColumnWidth / 2))! -
          xScale(new Date((dataPoint.x as number) - minColumnWidth / 2))! -
          2
      )
      .attr("height", dataPoint => height - yScale(dataPoint.y)!)
      .each((_dataPoint, index, nodes) => {
        const thisSelection = select<SVGElement, DataPoint | OrdinalDataPoint>(
          nodes[index] as SVGElement
        );
        this.setToolTipGenerator(
          config.seriesOption,
          seriesSelection,
          thisSelection
        );
      });
  }

  private getMinColumnWidth(dataPoints: DataPoint[]): number {
    const colMargin = 20;
    const dataSpan = extent<DataPoint, number>(
      dataPoints,
      dataPoint => dataPoint.x as number
    );
    const minData = dataSpan[0];
    const maxData = dataSpan[1];
    if (typeof minData !== "undefined" && typeof maxData !== "undefined") {
      const maxColumnWidth =
        (maxData - minData) / dataPoints.length - colMargin;
      const shiftedDataPoints = dataPoints.slice(1);
      const minXGranularity = min(
        shiftedDataPoints.map(
          (dataPoint, index) =>
            (dataPoint.x as number) - (dataPoints[index].x as number)
        )
      );

      if (typeof minXGranularity !== "undefined") {
        return Math.max(0, Math.min(minXGranularity, maxColumnWidth));
      }
    }
    throw new Error("Invalid Data");
  }
}

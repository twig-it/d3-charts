import { select } from "d3-selection";
import { DataPoint, OrdinalDataPoint } from "../../cartesian";
import { CartesianTooltip } from "../../tooltip/cartesian-tooltip";
import { SeriesRenderer, SeriesRendererConfig } from "./series-renderer";

export class PointsSeriesRenderer extends SeriesRenderer {
  public constructor(cartesianTooltip: CartesianTooltip) {
    super(cartesianTooltip);
  }

  public drawSeries(config: SeriesRendererConfig): void {
    const data = config.seriesOption.data;
    const xScale = config.xAxisData.axis.scale();
    const yScale = config.yAxisData.axis.scale();

    const seriesSelection = this.getSeriesSelection(
      config.seriesSection,
      config.seriesOption,
      config.seriesIndex
    );
    // JOIN new data with old elements.
    const pointSelection = seriesSelection
      .selectAll<SVGElement, DataPoint>("circle.points")
      .data(data);

    // EXIT old elements not present in new data.
    pointSelection.exit().attr("class", "exit").remove();

    // UPDATE old elements present in new data.
    pointSelection
      .attr("class", "update")
      // .transition()
      .attr("cy", (dataPoint) => yScale(dataPoint.y)!)
      .attr("cx", (dataPoint) => xScale(dataPoint.x)!)
      .attr("stroke", config.seriesOption.color)
      .attr("fill", config.seriesOption.color);

    // ENTER new elements present in new data.
    pointSelection
      .enter()
      .append("circle")
      .attr("class", "enter")
      .attr("r", 3.5)
      .attr("cy", (dataPoint) => yScale(dataPoint.y)!)
      .attr("cx", (dataPoint) => xScale(dataPoint.x)!)
      .attr("stroke", config.seriesOption.color)
      .attr("fill", config.seriesOption.color)
      .classed("points-data", true)
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

    // Const pointsSelection = seriesSelection
    //   .selectAll<SVGElement, DataPoint[]>('g.points')
    //   .data([data])
    //   .enter()
    //   .append<SVGElement>('g')
    //   .classed('points', true);

    // // Add the scatterplot
    // Const pointsPath = pointsSelection.selectAll<SVGCircleElement, DataPoint>('circle').data(data);

    // PointsPath.exit().remove();

    // PointsPath
    //   .enter()
    //   .append('circle')
    //   .merge(pointsPath)
    //   .attr('r', 3.5)
    //   .attr('cy', dataPoint => yScale(dataPoint.y)!)
    //   .attr('cx', dataPoint => xScale(dataPoint.x)!)
    //   .attr('stroke', config.seriesOption.color)
    //   .attr('fill', config.seriesOption.color)
    //   .classed('points-data', true)
    //   .each((_dataPoint, index, nodes) => {
    //     Const thisSelection = select<SVGElement, DataPoint | OrdinalDataPoint>(nodes[index] as SVGElement);
    //     This.setToolTipGenerator(config.seriesOption, seriesSelection, thisSelection);
    //   });
  }
}

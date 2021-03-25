import { AxisScale } from "d3-axis";
import { select } from "d3-selection";
import { curveMonotoneX, line } from "d3-shape";
import { DataPoint, OrdinalDataPoint, SeriesOptions } from "../../cartesian";
import { CartesianChartSelection } from "../../cartesian-object";
import { CartesianTooltip } from "../../tooltip/cartesian-tooltip";
import { SeriesRenderer, SeriesRendererConfig } from "./series-renderer";

interface RenderConfig {
  seriesSelection: CartesianChartSelection;
  seriesOption: SeriesOptions;
  xScale: AxisScale<string | number | Date>;
  yScale: AxisScale<string | number | Date>;
}

export class LineSeriesRenderer extends SeriesRenderer {
  public constructor(cartesianTooltip: CartesianTooltip) {
    super(cartesianTooltip);
  }

  public drawSeries(config: SeriesRendererConfig): void {
    const xScale = config.xAxisData.axis.scale();
    const yScale = config.yAxisData.axis.scale();

    const seriesSelection = this.getSeriesSelection(
      config.seriesSection,
      config.seriesOption,
      config.seriesIndex
    );

    const renderConfig = {
      seriesSelection: seriesSelection,
      seriesOption: config.seriesOption,
      xScale: xScale,
      yScale: yScale
    };

    this.drawLine(renderConfig);
    this.drawPoints(renderConfig);
  }

  private drawLine(renderConfig: RenderConfig): void {
    const data = renderConfig.seriesOption.data;

    const lineSelection = renderConfig.seriesSelection
      .selectAll<SVGElement, DataPoint[]>("g.line")
      .data([data])
      .enter()
      .append<SVGElement>("g")
      .classed("line", true);

    const lineGenerator = line<DataPoint>()
      .x(dataPoint => renderConfig.xScale(new Date(dataPoint.x))!)
      .y(dataPoint => renderConfig.yScale(dataPoint.y)!)
      .curve(curveMonotoneX);

    const linePath = lineSelection
      .selectAll<SVGElement, DataPoint[]>("path")
      .data([data]);

    linePath.exit().remove();

    linePath
      .enter()
      .append<SVGElement>("svg:path")
      .merge(linePath)
      .attr("d", lineGenerator)
      .attr("fill", "none")
      .attr("stroke", renderConfig.seriesOption.color);
  }

  private drawPoints(renderConfig: RenderConfig): void {
    const data = renderConfig.seriesOption.data;
    const pointsSelection = renderConfig.seriesSelection
      .selectAll<SVGElement, DataPoint[]>("g.points")
      .data([data])
      .enter()
      .append<SVGElement>("g")
      .classed("points", true);

    // Points representing actual data.
    const pointsPath = pointsSelection
      .selectAll<SVGCircleElement, DataPoint>("circle")
      .data<DataPoint>(data);

    pointsPath.exit().remove();

    pointsPath
      .enter()
      .append("circle")
      .merge(pointsPath)
      .attr("r", 3.5)
      .attr("cy", dataPoint => renderConfig.yScale(dataPoint.y)!)
      .attr("cx", dataPoint => renderConfig.xScale(dataPoint.x)!)
      .attr("stroke", renderConfig.seriesOption.color)
      .attr("fill", "#FFFFFF")
      .each((_dataPoint, index, nodes) => {
        const thisSelection = select<SVGElement, DataPoint | OrdinalDataPoint>(
          nodes[index] as SVGElement
        );
        this.setToolTipGenerator(
          renderConfig.seriesOption,
          renderConfig.seriesSelection,
          thisSelection
        );
      });
  }
}

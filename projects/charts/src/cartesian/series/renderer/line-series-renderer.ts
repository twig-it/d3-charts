import { AxisScale } from "d3-axis";
import { curveMonotoneX, line } from "d3-shape";
import { DataPoint, SeriesOptions } from "../../cartesian";
import { CartesianChartSelection } from "../../cartesian-chart";
import { CartesianTooltip } from "../../tooltip/cartesian-tooltip";
import { PointsSeriesRenderer } from "./points-series-renderer";
import { SeriesRenderer, SeriesRendererConfig } from "./series-renderer";

interface RenderConfig {
  seriesSelection: CartesianChartSelection;
  seriesOption: SeriesOptions;
  xScale: AxisScale<string | number | Date>;
  yScale: AxisScale<string | number | Date>;
}

export class LineSeriesRenderer extends SeriesRenderer {
  private readonly pointsRenderer: PointsSeriesRenderer;
  public constructor(cartesianTooltip: CartesianTooltip) {
    super(cartesianTooltip);
    this.pointsRenderer = new PointsSeriesRenderer(cartesianTooltip);
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
      yScale: yScale,
    };

    this.drawLine(renderConfig);
    this.pointsRenderer.drawSeries(config);
    renderConfig.seriesSelection
      .selectAll("circle")
      .style("fill-opacity", 0)
      .style("stroke-opacity", 0);
  }

  public drawLine(renderConfig: RenderConfig): void {
    const data = renderConfig.seriesOption.data;

    const lineGenerator = line<DataPoint>()
      .x((dataPoint) => renderConfig.xScale(new Date(dataPoint.x))!)
      .y((dataPoint) => renderConfig.yScale(dataPoint.y)!)
      .curve(curveMonotoneX);

    const linePath = renderConfig.seriesSelection
      .selectAll<SVGElement, DataPoint[]>("path.line")
      .data([data]);

    linePath.exit().remove();

    linePath
      .enter()
      .append<SVGElement>("svg:path")
      .classed("line", true)
      .merge(linePath)
      .attr("d", lineGenerator)
      .attr("fill", "none")
      .attr("stroke", renderConfig.seriesOption.color);
  }
}

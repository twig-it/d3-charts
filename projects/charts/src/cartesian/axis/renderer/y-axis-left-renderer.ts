import { axisLeft, AxisScale } from "d3-axis";
import { AxisOptions } from "../../cartesian";
import {
  SVGGAxisSelection,
  SVGGAxisTitleSelection,
} from "../../cartesian-chart";
import { CartesianAxisScale } from "../cartesian-axis-scale";
import { AxisRenderer, AxisRendererConfig } from "./axis-renderer";

export class YAxisLeftRenderer extends AxisRenderer {
  public constructor(cartesianAxisScale: CartesianAxisScale) {
    super(cartesianAxisScale);
  }

  protected buildAxis(rendererConfig: AxisRendererConfig): SVGGAxisSelection {
    if (!rendererConfig.scale) {
      rendererConfig.scale = this.cartesianAxisScale.getScale(
        rendererConfig.axisOption.scale,
        rendererConfig.seriesHeight,
        0
      );
    }

    const d3Axis = axisLeft(
      rendererConfig.scale as AxisScale<number | string | Date>
    );
    d3Axis.ticks(5);
    d3Axis.tickSize(-1 * rendererConfig.seriesWidth);
    d3Axis.tickSizeOuter(0);
    d3Axis.tickPadding(10);
    this.setScaleFormatting(rendererConfig, d3Axis);

    rendererConfig.axisSelection.datum(
      this.buildAxisData(d3Axis, rendererConfig.axisOption.scale)
    );

    return rendererConfig.axisSelection.call(d3Axis);
  }

  protected styleAxis(rendererConfig: AxisRendererConfig): void {
    this.hideAxisPath(rendererConfig.axisSelection);
    const ticksSelection = this.styleTicks(
      rendererConfig.axisSelection,
      rendererConfig.axisOption
    );

    ticksSelection
      .select<SVGElement>("line")
      .attr("transform", "translate(60,0)");

    // TicksSelection.each((_data, index, nodes) => {
    //   If (index === 0) {
    //     Select(nodes[index])
    //       .select('line')
    //       .style('stroke-width', 0);
    //   }
    // });

    ticksSelection
      .select<SVGElement>("text")
      .attr("transform", "translate(60,0)");

    this.drawAxisTitle(rendererConfig.axisSelection, rendererConfig.axisOption);
  }

  protected drawAxisTitle(
    axisSelection: SVGGAxisSelection,
    axisOption: AxisOptions
  ): SVGGAxisTitleSelection {
    const yAxisHeight = Number(axisSelection.attr("height"));

    return super
      .drawAxisTitle(axisSelection, axisOption)
      .attr("transform", `translate(0,${yAxisHeight / 2})rotate(-90)`);
  }
}

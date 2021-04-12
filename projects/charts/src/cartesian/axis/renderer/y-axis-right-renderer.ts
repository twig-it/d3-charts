import { axisRight, AxisScale } from "d3-axis";
import { AxisOptions } from "../../cartesian";
import {
  SVGGAxisSelection,
  SVGGAxisTitleSelection,
} from "../../cartesian-chart";
import { CartesianAxisScale } from "../cartesian-axis-scale";
import { AxisRenderer, AxisRendererConfig } from "./axis-renderer";

export class YAxisRightRenderer extends AxisRenderer {
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

    const d3Axis = axisRight(
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
    this.styleTicks(rendererConfig.axisSelection, rendererConfig.axisOption);
    this.drawAxisTitle(rendererConfig.axisSelection, rendererConfig.axisOption);
  }

  protected drawAxisTitle(
    axisSelection: SVGGAxisSelection,
    axisOption: AxisOptions
  ): SVGGAxisTitleSelection {
    const yAxisHeight = Number(axisSelection.attr("height"));

    return super
      .drawAxisTitle(axisSelection, axisOption)
      .attr("transform", `translate(50,${yAxisHeight / 2})rotate(-90)`);
  }
}

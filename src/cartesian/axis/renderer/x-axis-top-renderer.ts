import { AxisScale, axisTop } from 'd3-axis';
import { AxisOptions } from '../../cartesian';
import { SVGGAxisSelection, SVGGAxisTitleSelection } from '../../cartesian-object';
import { CartesianAxisScale } from '../cartesian-axis-scale';
import { AxisRenderer, AxisRendererConfig } from './axis-renderer';

export class XAxisTopRenderer extends AxisRenderer {
  public constructor(cartesianAxisScale: CartesianAxisScale) {
    super(cartesianAxisScale);
  }

  protected buildAxis(rendererConfig: AxisRendererConfig): SVGGAxisSelection {
    if (!rendererConfig.scale) {
      rendererConfig.scale = this.cartesianAxisScale.getScale(
        rendererConfig.axisOption.scale,
        0,
        rendererConfig.seriesWidth
      );
    }

    const d3Axis = axisTop(rendererConfig.scale as AxisScale<number | string | Date>);

    d3Axis.tickSize(-1 * rendererConfig.seriesHeight);
    d3Axis.tickSizeInner(10);
    d3Axis.tickSizeOuter(0);
    d3Axis.tickPadding(10);
    this.setScaleFormatting(rendererConfig, d3Axis);

    rendererConfig.axisSelection.datum(this.buildAxisData(d3Axis, rendererConfig.axisOption.scale));

    return rendererConfig.axisSelection.call(d3Axis);
  }

  protected styleAxis(rendererConfig: AxisRendererConfig): void {
    this.styleAxisPath(rendererConfig.axisSelection, rendererConfig.axisOption);
    this.styleTickLine(rendererConfig.axisSelection, rendererConfig.axisOption);
    this.styleTickText(rendererConfig.axisSelection, rendererConfig.axisOption);
    this.drawAxisTitle(rendererConfig.axisSelection, rendererConfig.axisOption);
  }

  protected drawAxisTitle(axisSelection: SVGGAxisSelection, axisOption: AxisOptions): SVGGAxisTitleSelection {
    const xAxisWidth = Number(axisSelection.attr('width'));

    return super.drawAxisTitle(axisSelection, axisOption).attr('transform', `translate(${xAxisWidth / 2}, -50)`);
  }
}

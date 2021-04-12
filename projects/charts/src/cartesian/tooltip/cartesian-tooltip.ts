import { color } from "d3-color";
import { event as currentEvent, select } from "d3-selection";
import {
  DataPoint,
  OrdinalDataPoint,
  SeriesOptions,
  ToolTipOption,
} from "../cartesian";
import {
  CartesianChartSelection,
  DataPointSelection,
  ToolTipSelection,
} from "../cartesian-chart";

export class CartesianTooltip {
  private static readonly DIMENSTION_X: number = 150;
  private static readonly DIMENSTION_Y: number = 54;

  private toolTip?: ToolTipSelection;

  public setToolTipGenerator(
    seriesOption: SeriesOptions,
    seriesSelection: CartesianChartSelection,
    dataPointSelection: DataPointSelection
  ): void {
    this.initTooltip(seriesOption.tooltip);

    dataPointSelection
      .on("mouseover.tooltip", (dataPoint) =>
        this.onTooltipMouseOver(seriesOption, dataPoint, seriesSelection)
      )
      .on("mouseout.tooltip", () => this.onTooltipMouseOut());

    this.toolTip &&
      this.toolTip.on("mouseout.tooltip", () => this.onTooltipMouseOut());
  }

  private initTooltip(tooltipOption: ToolTipOption): void {
    if (tooltipOption.visible) {
      const bodySelection = select<HTMLElement, {}>("body");
      const toolTipDivSelection = bodySelection.select<HTMLElement>(
        "div.tooltip"
      );
      if (!toolTipDivSelection.empty()) {
        this.toolTip = toolTipDivSelection;
      } else {
        this.toolTip = bodySelection
          .append<HTMLElement>("div")
          .attr("class", "tooltip")
          .style("width", "148px")
          .style("height", "48px")
          .style("line-height", "25px")
          .style("text-align", "center")
          .style("background", "#FFFFFF")
          .style("opacity", 0)
          .style("border", "1px solid")
          .style("position", "absolute");
      }

      if (!tooltipOption.formatter) {
        tooltipOption.formatter = (dataPoint: DataPoint | OrdinalDataPoint) =>
          `${dataPoint.x}: ${dataPoint.y}`;
      }
    }
  }

  private onTooltipMouseOver(
    seriesOption: SeriesOptions,
    dataPoint: DataPoint | OrdinalDataPoint,
    seriesSelection: CartesianChartSelection
  ): void {
    if (this.toolTip === undefined) {
      throw Error("tooltip div not defined");
    }

    if (seriesSelection.classed("hide")) {
      // Don't show tooltip if series is hidden
      return;
    }

    const mouseEventObject = currentEvent as MouseEvent;
    if (this.isMouseOverToolTipDiv(mouseEventObject)) {
      return;
    }

    const borderColorObj = color(seriesOption.color);
    if (!borderColorObj) {
      return;
    }

    this.toolTip
      .style("opacity", 0.9)
      .style("border", `1px solid ${borderColorObj.toString()}`);

    this.toolTip
      .html(seriesOption.tooltip.formatter!(dataPoint))
      .style("font-size", "14px")
      .style("color", seriesOption.color)
      .style(
        "left",
        `${mouseEventObject.pageX - CartesianTooltip.DIMENSTION_X / 2}px`
      )
      .style(
        "top",
        `${mouseEventObject.pageY - CartesianTooltip.DIMENSTION_Y}px`
      );
  }

  private onTooltipMouseOut(): void {
    if (this.toolTip === undefined) {
      return;
    }

    const mouseEventObject = currentEvent as MouseEvent;
    if (this.isMouseOverToolTipDiv(mouseEventObject)) {
      return;
    }

    this.toolTip.style("opacity", 0).style("left", "0px").style("top", "0px");
  }

  private isMouseOverToolTipDiv(mouseEventObject: MouseEvent): boolean {
    if (this.toolTip === undefined) {
      return false;
    }

    const positionLeftStyle = this.toolTip.style("left");
    const positionLeft = Number(positionLeftStyle.replace(/px/g, ""));

    const positionTopStyle = this.toolTip.style("top");
    const positionTop = Number(positionTopStyle.replace(/px/g, ""));

    const isMouseInsideXBoundary =
      mouseEventObject.pageX >= positionLeft &&
      mouseEventObject.pageX < positionLeft + CartesianTooltip.DIMENSTION_X;
    const isMouseInsideYBoundary =
      mouseEventObject.pageY >= positionTop &&
      mouseEventObject.pageY < positionTop + CartesianTooltip.DIMENSTION_Y;

    return isMouseInsideXBoundary && isMouseInsideYBoundary;
  }
}

import { Axis } from "d3-axis";
import {
  timeDay,
  timeHour,
  timeMinute,
  timeMonth,
  timeWeek,
  timeYear,
} from "d3-time";
import { timeFormat } from "d3-time-format";

import { AxisOptions, AxisScaleType } from "../../cartesian";
import {
  CartesianAxisData,
  ScaleType,
  SVGChildSelection,
  SVGGAxisSelection,
  SVGGAxisTitleSelection,
} from "../../cartesian-object";
import { ChartLayoutClass } from "../../layout/cartesian-layout";
import { CartesianAxisScale } from "../cartesian-axis-scale";

export interface AxisRendererConfig {
  axisSelection: SVGGAxisSelection;
  axisOption: AxisOptions;
  seriesWidth: number;
  seriesHeight: number;
  scale?: ScaleType;
}

export abstract class AxisRenderer {
  protected constructor(
    protected readonly cartesianAxisScale: CartesianAxisScale
  ) {}

  protected abstract buildAxis(
    rendererConfig: AxisRendererConfig
  ): SVGGAxisSelection;
  protected abstract styleAxis(rendererConfig: AxisRendererConfig): void;

  public drawAxis(rendererConfig: AxisRendererConfig): void {
    this.buildAxis(rendererConfig);
    this.styleAxis(rendererConfig);
  }

  protected drawAxisTitle(
    axisSelection: SVGGAxisSelection,
    axisOption: AxisOptions
  ): SVGGAxisTitleSelection {
    const axisTitleSelection = axisSelection
      .append<SVGTextElement>("svg:text")
      .style("fill", axisOption.color)
      .style("font-size", "14px")
      .attr("dy", "1em")
      .style("text-anchor", "middle")
      .classed("axis-title", true)
      .text(axisOption.title);

    return axisTitleSelection;
  }

  protected buildAxisData(
    axis: Axis<string | number | Date>,
    scaleType: AxisScaleType
  ): CartesianAxisData {
    return {
      axis: axis,
      scaleType: scaleType,
    };
  }

  protected hideAxisPath(axisSelection: SVGGAxisSelection): void {
    axisSelection.select("path").style("stroke-width", 0);
  }

  protected styleAxisPath(
    axisSelection: SVGGAxisSelection,
    axisOption: AxisOptions
  ): void {
    axisSelection
      .selectAll<SVGElement, {}>("path.domain")
      .attr("stroke", axisOption.color)
      .attr("stroke-width", "1");
  }

  protected styleTicks(
    axisSelection: SVGGAxisSelection,
    axisOption: AxisOptions
  ): SVGChildSelection {
    const tickSelection = axisSelection.selectAll<SVGElement, {}>(".tick");

    tickSelection
      .select<SVGElement>("text")
      .style("color", axisOption.color)
      .style("fill", axisOption.color)
      .style("font-size", "11px");

    if (axisOption.grid.visible) {
      tickSelection
        .select<SVGElement>("line")
        .attr("stroke", axisOption.grid.color)
        .attr("stroke-width", "1");
    } else {
      tickSelection.select<SVGElement>("line").style("stroke-width", 0);
    }

    return tickSelection;
  }

  protected styleTickText(
    axisSelection: SVGGAxisSelection,
    axisOption: AxisOptions
  ): SVGChildSelection {
    return axisSelection
      .selectAll<SVGElement, {}>(".tick text")
      .style("color", axisOption.color)
      .style("fill", axisOption.color)
      .style("font-size", "11px");
  }

  protected styleTickLine(
    axisSelection: SVGGAxisSelection,
    axisOption: AxisOptions
  ): void {
    axisSelection
      .selectAll<SVGElement, {}>(".tick line")
      .attr("stroke", axisOption.color)
      .attr("stroke-width", "1");
  }

  protected hideTickLine(axisSelection: SVGGAxisSelection): void {
    axisSelection
      .selectAll<SVGElement, {}>(".tick line")
      .style("stroke-width", 0);
  }

  protected hideTickText(axisSelection: SVGGAxisSelection): void {
    axisSelection
      .selectAll<SVGElement, {}>(".tick text")
      .style("stroke-width", 0);
  }

  protected setScaleFormatting(
    rendererConfig: AxisRendererConfig,
    axis: Axis<string | number | Date>
  ): void {
    if (rendererConfig.axisOption.scale === AxisScaleType.Time) {
      const formatSecond = timeFormat("%M:%S");
      const formatMinute = timeFormat("%I:%M");
      const formatHour = timeFormat("%I %p");
      const formatDay = timeFormat("%a %d");
      const formatWeek = timeFormat("%b %d");
      const formatMonth = timeFormat("%B");
      const formatYear = timeFormat("%Y");

      const timeTickFormat: (tickDate: Date) => string = (tickDate) => {
        if (timeMinute(tickDate) < tickDate) {
          return formatSecond(tickDate);
        }
        if (timeHour(tickDate) < tickDate) {
          return formatMinute(tickDate);
        }

        if (timeDay(tickDate) < tickDate) {
          return formatHour(tickDate);
        }

        if (timeMonth(tickDate) < tickDate) {
          if (timeWeek(tickDate) < tickDate) {
            return formatDay(tickDate);
          }

          return formatWeek(tickDate);
        }

        if (timeYear(tickDate) < tickDate) {
          return formatMonth(tickDate);
        } else {
          return formatYear(tickDate);
        }
      };

      axis.tickFormat(
        timeTickFormat as (tickLabel: string | number | Date) => string
      );
    }
  }

  public static getAxisSectionClass(
    isXAxis: boolean,
    isOpposite: boolean
  ): string {
    if (isXAxis) {
      return !isOpposite
        ? `.${ChartLayoutClass.AxisBottom}`
        : `.${ChartLayoutClass.AxisTop}`;
    } else {
      return !isOpposite
        ? `.${ChartLayoutClass.AxisLeft}`
        : `.${ChartLayoutClass.AxisRight}`;
    }
  }
}

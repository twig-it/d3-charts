import { select, Selection } from "d3-selection";
import { isNil } from "lodash-es";
import { CartesianOptions, LegendAlign, LegendOptions } from "../cartesian";
import { CartesianChartSelection, CartesianObject } from "../cartesian-object";
import { ChartLayoutClass } from "../layout/cartesian-layout";

export class CartesianLegend {
  private static readonly HEIGHT_MARGIN: number = 10;
  private static readonly WIDTH_MARGIN: number = 10;
  private static readonly LEGEND_ITEM_HEIGHT: number = 30;
  private static readonly LEGEND_ITEM_WIDTH: number = 180;

  public drawLegends(
    chartSelection: CartesianChartSelection,
    options: CartesianOptions
  ): void {
    const legendSection = chartSelection.select<SVGGElement>(
      `.${ChartLayoutClass.Legend}`
    );
    const legendData = options.series.map((seriesOption, index) => {
      const selection = chartSelection.select<SVGGElement>(
        `.${seriesOption.name.replace(/\s/g, "")}-${index}`
      );

      return {
        name: seriesOption.name,
        color: seriesOption.color,
        selection: selection,
      };
    });

    if (options.legend.align === LegendAlign.Bottom) {
      this.drawBottomAlignedLegends(legendSection, options.legend, legendData);
    } else {
      this.drawRightAlignedLegends(legendSection, options.legend, legendData);
    }
  }

  private drawRightAlignedLegends(
    legendSelection: CartesianChartSelection,
    legendOptions: LegendOptions,
    legendData: LegendItemData[]
  ): void {
    const legendGSelection = legendSelection
      .append<SVGGElement>("svg:g")
      .attr("transform", "translate(30, 100)");

    this.drawLegendTitle(legendGSelection, legendOptions);

    // Add Legend Items groups
    const legendItemGroupSelection = this.drawRightAlignedLegendItemGroups(
      legendGSelection,
      legendOptions.title,
      legendData
    );
    this.drawLegendItems(legendItemGroupSelection);
  }

  private drawBottomAlignedLegends(
    legendSelection: CartesianChartSelection,
    legendOptions: LegendOptions,
    legendData: LegendItemData[]
  ): void {
    const legendGSelection = legendSelection
      .append<SVGGElement>("svg:g")
      .attr("transform", "translate(70, 0)");

    this.drawLegendTitle(legendGSelection, legendOptions);

    const legendItemGroupSelection = this.drawBottomAlignedLegendItemGroups(
      legendGSelection,
      legendData
    );

    this.drawLegendItems(legendItemGroupSelection);
  }

  private drawLegendTitle(
    legendSelection: CartesianChartSelection,
    legendOptions: LegendOptions
  ): void {
    legendSelection
      .append<SVGElement>("svg:g")
      .classed("legend-title", true)
      .attr(
        "transform",
        `translate(${CartesianLegend.WIDTH_MARGIN}, ${CartesianLegend.HEIGHT_MARGIN})`
      )
      .attr("width", CartesianLegend.LEGEND_ITEM_WIDTH)
      .attr("height", CartesianLegend.LEGEND_ITEM_HEIGHT)
      .selectAll<SVGElement, {}>("text")
      .data([legendOptions.title])
      .enter()
      .append("text")
      .text(String)
      .style("font-size", "14px");
  }

  private drawRightAlignedLegendItemGroups(
    legendSelection: CartesianChartSelection,
    legendTitle: string,
    legendData: LegendItemData[]
  ): LegendItemGroupSelection {
    return this.drawLegendItemGroups(legendSelection, legendData)
      .attr("transform", (_data, index) => {
        const itemHeight = CartesianLegend.LEGEND_ITEM_HEIGHT;
        const y = isNil(legendTitle)
          ? (index + 1) * itemHeight
          : index * itemHeight;

        return `translate(0 ,${y})`;
      })
      .attr("width", CartesianLegend.LEGEND_ITEM_HEIGHT)
      .attr("height", CartesianLegend.LEGEND_ITEM_WIDTH);
  }

  private drawBottomAlignedLegendItemGroups(
    legendSelection: CartesianChartSelection,
    legendData: LegendItemData[]
  ): LegendItemGroupSelection {
    return this.drawLegendItemGroups(legendSelection, legendData)
      .attr(
        "transform",
        (_data, index) =>
          `translate(${index * CartesianLegend.LEGEND_ITEM_WIDTH}, 0)`
      )
      .attr("width", CartesianLegend.LEGEND_ITEM_HEIGHT);
  }

  private drawLegendItemGroups(
    legendSelection: CartesianChartSelection,
    legendData: LegendItemData[]
  ): LegendItemGroupSelection {
    return legendSelection
      .selectAll<SVGElement, LegendItemData>("g.legend")
      .data(legendData)
      .enter()
      .append("g")
      .attr("class", "legend")
      .style("fill", (legendItem) => legendItem.color)
      .on("click", (legendItem, index, nodes) => {
        const thisSelection = select(nodes[index]);
        if (thisSelection.classed("hide")) {
          // Show the series.
          thisSelection
            .classed("show", true)
            .classed("hide", false)
            .style("fill", legendItem.color);

          legendItem.selection
            .classed("show", true)
            .classed("hide", false)
            .style("fill-opacity", 1)
            .style("stroke-opacity", 1);
        } else {
          // Hide the series.
          thisSelection
            .classed("hide", true)
            .classed("show", false)
            .style("fill", "#C0C0C0");

          legendItem.selection
            .classed("hide", true)
            .classed("show", false)
            .style("fill-opacity", 0)
            .style("stroke-opacity", 0);
        }
      });
  }

  private drawLegendItems(
    legendItemGroupSelection: LegendItemGroupSelection
  ): void {
    legendItemGroupSelection
      .append("rect")
      .attr("x", 0)
      .attr("y", 0)
      .attr("width", 10)
      .attr("height", 10);

    legendItemGroupSelection
      .append("text")
      .attr("x", 15)
      .attr("y", 10)
      .attr("width", 100)
      .text((data) => data.name)
      .style("font-size", "11px")
      .classed("name", true);
  }
}

interface LegendItemData {
  name: string;
  color: string;
  selection: CartesianChartSelection;
}

type LegendItemGroupSelection = Selection<
  SVGGElement,
  LegendItemData,
  SVGElement,
  CartesianObject
>;

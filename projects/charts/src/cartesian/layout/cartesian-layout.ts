import { AxisOptions, CartesianOptions, LegendAlign } from '../cartesian';
import { CartesianChartSelection } from '../cartesian-object';

interface SectionDimension {
  position: Position;
  width: number;
  height: number;
}

interface Position {
  x: number;
  y: number;
}

export const enum ChartLayoutClass {
  Plot = 'plot-section',
  Legend = 'legend-section',
  Series = 'series-section',
  AxisTop = 'axis-top-section',
  AxisBottom = 'axis-bottom-section',
  AxisLeft = 'axis-left-section',
  AxisRight = 'axis-right-section'
}

export class CartesianLayout {
  private static readonly RIGHT_ALIGNED_WIDTH: number = 180;
  private static readonly BOTTOM_ALIGNED_HEIGHT: number = 100;

  private static readonly YAXIS_SECTION_WIDTH: number = 70;
  private static readonly XAXIS_SECTION_HEIGHT: number = 70;

  public drawLayout(chartSelection: CartesianChartSelection, options: CartesianOptions): void {
    const chartWidth = Number(chartSelection.attr('width'));
    const chartHeight = Number(chartSelection.attr('height'));
    const legendProperties = options.legend;

    if (!legendProperties.visible) {
      this.buildPlotOnlyLayout(chartSelection, chartWidth, chartHeight);

      return;
    }

    if (legendProperties.align === LegendAlign.Right) {
      this.buildHorizontalLayout(chartSelection, chartWidth, chartHeight);
    } else {
      this.buildVerticalLayout(chartSelection, chartWidth, chartHeight);
    }

    this.buildAxesSections(chartSelection, options);
    this.buildSeriesSection(chartSelection);
  }

  private buildPlotOnlyLayout(parent: CartesianChartSelection, width: number, height: number): void {
    this.addSection(parent, this.getPlotOnlyDimension(width, height), ChartLayoutClass.Plot);
  }

  private buildHorizontalLayout(parent: CartesianChartSelection, width: number, height: number): void {
    this.addSection(parent, this.getHorizontalPlotDimension(width, height), ChartLayoutClass.Plot);
    this.addSection(parent, this.getHorizontalLegendDimension(width, height), ChartLayoutClass.Legend);
  }

  private buildVerticalLayout(parent: CartesianChartSelection, width: number, height: number): void {
    this.addSection(parent, this.getVerticalPlotDimension(width, height), ChartLayoutClass.Plot);
    this.addSection(parent, this.getVerticalLegendDimension(width, height), ChartLayoutClass.Legend);
  }

  private buildAxesSections(chartSelection: CartesianChartSelection, options: CartesianOptions): void {
    const plotSelection = chartSelection.select<SVGGElement>(`.${ChartLayoutClass.Plot}`);

    this.buildXAxesSections(plotSelection, options);
    this.buildYAxesSections(plotSelection, options);
  }

  private buildXAxesSections(plotSelection: CartesianChartSelection, options: CartesianOptions): void {
    const plotWidth = Number(plotSelection.attr('width'));
    const availablePlotWidth = plotWidth - options.yAxis.length * CartesianLayout.YAXIS_SECTION_WIDTH;
    const offsetX =
      options.yAxis.filter(axisOption => !axisOption.opposite).length * CartesianLayout.YAXIS_SECTION_WIDTH;

    this.buildBottomXAxesSections(plotSelection, options.xAxis, availablePlotWidth, offsetX);
    this.buildTopXAxesSections(plotSelection, options.xAxis, availablePlotWidth, offsetX);
  }

  private buildBottomXAxesSections(
    plotSelection: CartesianChartSelection,
    axisOptions: AxisOptions[],
    availablePlotWidth: number,
    offsetX: number
  ): void {
    const plotheight = Number(plotSelection.attr('height'));
    const bottomAligned = axisOptions.filter(axisOption => !axisOption.opposite);
    const dimension = this.getXAxisSectionDimension(
      availablePlotWidth,
      plotheight,
      bottomAligned.length,
      offsetX,
      true
    );
    const xAxisBottomSelection = this.addSection(plotSelection, dimension, ChartLayoutClass.AxisBottom);
    let axisIndex = 0;
    axisOptions.forEach((axisOption, axisPosition) => {
      if (!axisOption.opposite) {
        const axisDimension = this.getXAxisDimension(availablePlotWidth, axisIndex++);
        this.addSection(xAxisBottomSelection, axisDimension, `axis-${axisPosition}`);
      }
    });
  }

  private buildTopXAxesSections(
    plotSelection: CartesianChartSelection,
    axisOptions: AxisOptions[],
    availablePlotWidth: number,
    offsetX: number
  ): void {
    const plotheight = Number(plotSelection.attr('height'));
    const topAligned = axisOptions.filter(axisOption => axisOption.opposite);
    const dimension = this.getXAxisSectionDimension(availablePlotWidth, plotheight, topAligned.length, offsetX, false);
    const xAxisTopSelection = this.addSection(plotSelection, dimension, ChartLayoutClass.AxisTop);

    let axisIndex = 0;
    axisOptions.forEach((axisOption, axisPosition) => {
      if (axisOption.opposite) {
        const axisDimension = this.getXAxisDimension(availablePlotWidth, axisIndex++);
        this.addSection(xAxisTopSelection, axisDimension, `axis-${axisPosition}`);
      }
    });
  }

  private buildYAxesSections(plotSelection: CartesianChartSelection, options: CartesianOptions): void {
    const plotheight = Number(plotSelection.attr('height'));
    const availablePlotHeight = plotheight - options.xAxis.length * CartesianLayout.XAXIS_SECTION_HEIGHT;
    const offsetY =
      options.xAxis.filter(axisOption => axisOption.opposite).length * CartesianLayout.XAXIS_SECTION_HEIGHT;

    this.buildLeftYAxesSections(plotSelection, options.yAxis, availablePlotHeight, offsetY);
    this.buildRightYAxesSections(plotSelection, options.yAxis, availablePlotHeight, offsetY);
  }

  private buildLeftYAxesSections(
    plotSelection: CartesianChartSelection,
    axisOptions: AxisOptions[],
    availablePlotHeight: number,
    offsetY: number
  ): void {
    const plotWidth = Number(plotSelection.attr('width'));
    const leftAligned = axisOptions.filter(axisOption => !axisOption.opposite);
    const dimension = this.getYAxisSectionDimension(plotWidth, availablePlotHeight, leftAligned.length, offsetY, true);
    const yAxisLeftSelection = this.addSection(plotSelection, dimension, ChartLayoutClass.AxisLeft);

    let axisIndex = 0;
    axisOptions.forEach((axisOption, axisPosition) => {
      if (!axisOption.opposite) {
        const axisDimension = this.getYAxisDimension(availablePlotHeight, axisIndex++);
        this.addSection(yAxisLeftSelection, axisDimension, `axis-${axisPosition}`);
      }
    });
  }

  private buildRightYAxesSections(
    plotSelection: CartesianChartSelection,
    axisOptions: AxisOptions[],
    availablePlotHeight: number,
    offsetY: number
  ): void {
    const plotWidth = Number(plotSelection.attr('width'));
    const rightAligned = axisOptions.filter(axisOption => axisOption.opposite);
    const dimension = this.getYAxisSectionDimension(
      plotWidth,
      availablePlotHeight,
      rightAligned.length,
      offsetY,
      false
    );
    const yAxisRightSelection = this.addSection(plotSelection, dimension, ChartLayoutClass.AxisRight);

    let axisIndex = 0;
    axisOptions.forEach((axisOption, axisPosition) => {
      if (axisOption.opposite) {
        const axisDimension = this.getYAxisDimension(availablePlotHeight, axisIndex++);
        this.addSection(yAxisRightSelection, axisDimension, `axis-${axisPosition}`);
      }
    });
  }

  private buildSeriesSection(chartSelection: CartesianChartSelection): void {
    const plotSelection = chartSelection.select<SVGGElement>(`.${ChartLayoutClass.Plot}`);
    const axisTopSelection = plotSelection.select<SVGGElement>(`.${ChartLayoutClass.AxisTop}`);
    const axisLeftSelection = plotSelection.select<SVGGElement>(`.${ChartLayoutClass.AxisLeft}`);

    const offsetX = Number(axisLeftSelection.attr('width'));
    const offsetY = Number(axisTopSelection.attr('height'));
    const width = Number(axisTopSelection.attr('width'));
    const height = Number(axisLeftSelection.attr('height'));

    const dimension = this.getSeriesSectionDimension(width, height, offsetX, offsetY);
    this.addSection(plotSelection, dimension, ChartLayoutClass.Series);
  }

  private addSection(
    parent: CartesianChartSelection,
    dimension: SectionDimension,
    className: string
  ): CartesianChartSelection {
    const childSection = parent
      .append<SVGGElement>('svg:g')
      .attr('width', dimension.width)
      .attr('height', dimension.height)
      .classed(className, true);

    childSection.attr('transform', `translate(${dimension.position.x}, ${dimension.position.y})`);

    return childSection;
  }

  private getPlotOnlyDimension(width: number, height: number): SectionDimension {
    return {
      width: width,
      height: height,
      position: {
        x: 0,
        y: 0
      }
    };
  }

  private getHorizontalPlotDimension(width: number, height: number): SectionDimension {
    const legendWidth = CartesianLayout.RIGHT_ALIGNED_WIDTH;

    return {
      width: width - legendWidth,
      height: height,
      position: {
        x: 0,
        y: 0
      }
    };
  }

  private getVerticalPlotDimension(width: number, height: number): SectionDimension {
    const legendHeight = CartesianLayout.BOTTOM_ALIGNED_HEIGHT;

    return {
      width: width,
      height: height - legendHeight,
      position: {
        x: 0,
        y: 0
      }
    };
  }

  private getHorizontalLegendDimension(width: number, height: number): SectionDimension {
    const legendWidth = CartesianLayout.RIGHT_ALIGNED_WIDTH;

    return {
      width: legendWidth,
      height: height,
      position: {
        x: width - legendWidth,
        y: 0
      }
    };
  }

  private getVerticalLegendDimension(width: number, height: number): SectionDimension {
    const legendHeight = CartesianLayout.BOTTOM_ALIGNED_HEIGHT;

    return {
      width: width,
      height: legendHeight,
      position: {
        x: 0,
        y: height - legendHeight
      }
    };
  }

  private getYAxisSectionDimension(
    width: number,
    height: number,
    axesCount: number,
    offsetY: number,
    isLeft: boolean = false
  ): SectionDimension {
    const sectionWidth = axesCount * CartesianLayout.YAXIS_SECTION_WIDTH;

    return {
      width: sectionWidth,
      height: height,
      position: {
        x: isLeft ? 0 : width - sectionWidth,
        y: offsetY
      }
    };
  }

  private getXAxisSectionDimension(
    width: number,
    height: number,
    axesCount: number,
    offsetX: number,
    isBottom: boolean = false
  ): SectionDimension {
    const sectionHeight = axesCount * CartesianLayout.XAXIS_SECTION_HEIGHT;

    return {
      width: width,
      height: sectionHeight,
      position: {
        x: offsetX,
        y: isBottom ? height - sectionHeight : sectionHeight
      }
    };
  }

  private getYAxisDimension(height: number, axisPosition: number): SectionDimension {
    const sectionWidth = CartesianLayout.YAXIS_SECTION_WIDTH;

    return {
      width: sectionWidth,
      height: height,
      position: {
        x: axisPosition * sectionWidth,
        y: 0
      }
    };
  }

  private getXAxisDimension(width: number, axisPosition: number): SectionDimension {
    const sectionHeight = CartesianLayout.XAXIS_SECTION_HEIGHT;

    return {
      width: width,
      height: sectionHeight,
      position: {
        x: 0,
        y: axisPosition * sectionHeight
      }
    };
  }

  private getSeriesSectionDimension(width: number, height: number, offsetX: number, offsetY: number): SectionDimension {
    return {
      width: width,
      height: height,
      position: {
        x: offsetX,
        y: offsetY
      }
    };
  }
}

/*
 * Options for configuring the chart
 */
export interface CartesianOptions {
  responsive: boolean;
  animation: boolean;
  style: StyleOptions;
  margin: MarginOptions;
  xAxis: AxisOptions[];
  yAxis: AxisOptions[];
  series: SeriesOptions[];
  legend: LegendOptions;
}

/*
 * This allows you to configure the chart's overall style
 */
export interface StyleOptions {
  backgroundColor: string;
  fontFamily: string;
  fontSize: string;
}

/*
 * This allows setting a different plot margin
 */
export interface MarginOptions {
  top: number;
  left: number;
  bottom: number;
  right: number;
}

/*
 * Options for configuring the axis
 */
export interface AxisOptions {
  title: string;
  scale: AxisScaleType;
  grid: AxisGridOptions;
  visible: boolean;
  opposite: boolean;
  color: string;
}

/*
 * Options for configuring the axis-grid lines
 */
export interface AxisGridOptions {
  visible: boolean;
  color: string;
}

/*
 * Specifies the scale type for the given axis
 */
export enum AxisScaleType {
  Linear = "linear",
  Logarithmic = "logarithmic",
  Time = "datetime",
  Category = "category",
}

/*
 * Options for configuring the legends
 */
export interface LegendOptions {
  title: string;
  align: LegendAlign;
  visible: boolean;
}

/*
 * Specifies the alignment for legend
 */
export enum LegendAlign {
  Right = "right",
  Bottom = "bottom",
}

/*
 * Options for configuring the series
 */
export interface SeriesOptions {
  visualization: VisualizationType;
  name: string;
  color: string;
  xIndex: number;
  yIndex: number;
  visible: boolean;
  tooltip: ToolTipOption;
  data: DataPoint[];
}

/*
 * Specifies the visualization type for the given series
 */
export enum VisualizationType {
  Column = "column",
  Area = "area",
  Line = "line",
  Points = "points",
}

/*
 * Options for configuring the tooltip
 */
export interface ToolTipOption {
  visible: boolean;
  formatter?(dataPoint: DataPoint | OrdinalDataPoint): string;
}

/*
 * Numeric datapoint interface
 */
export interface DataPoint {
  x: number | string;
  y: number;
}

/*
 * Categorical datapoint interface
 */
export interface OrdinalDataPoint {
  x: string;
  y: number;
}

export const getDefaultOptions = (): CartesianOptions => {
  return {
    animation: false,
    responsive: true,
    style: {
      backgroundColor: "#FFFFFF",
      fontFamily:
        '"Lucida Grande", "Lucida Sans Unicode", Verdana, Arial, Helvetica, sans-serif',
      fontSize: "12px",
    },
    margin: {
      top: 5,
      left: 5,
      bottom: 5,
      right: 5,
    },
    xAxis: [],
    yAxis: [],
    series: [],
    legend: {
      title: "",
      visible: true,
      align: LegendAlign.Right,
    },
  };
};

export type RecursivePartial<T> = { [P in keyof T]?: RecursivePartial<T[P]> };

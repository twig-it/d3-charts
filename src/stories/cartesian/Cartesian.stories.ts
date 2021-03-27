import {
  AxisScaleType,
  CartesianChart,
  VisualizationType
} from "@ikshanam/d3-charts";
import { createCartesian } from "./cartesian";

export default {
  title: "Example/Cartesian",
  argTypes: {
    seriesName: { control: "text" }
  }
};

// const container = createCartesian();
const options = {
  series: [
    {
      visualization: VisualizationType.Line,
      name: "First series",
      color: "#2D1C90",
      xIndex: 0,
      yIndex: 0,
      visible: true,
      tooltip: {
        visible: false,
        formatter: () => ""
      },
      data: [
        {
          x: 1551255052196,
          y: 150
        },
        {
          x: 1551255082196,
          y: 150000
        },
        {
          x: 1551255092196,
          y: 2800
        },
        {
          x: 1551255102196,
          y: 4600
        },
        {
          x: 1551255122196,
          y: 61200
        },
        {
          x: 1551255142196,
          y: 8200
        },
        {
          x: 1551255152196,
          y: 11400
        },
        {
          x: 1551255172196,
          y: 15500
        }
      ]
    },
    {
      visualization: VisualizationType.Area,
      name: "Second series",
      color: "#409FF0",
      xIndex: 0,
      yIndex: 0,
      visible: true,
      tooltip: {
        visible: false,
        formatter: () => ""
      },
      data: [
        {
          x: 1551255052196,
          y: 50
        },
        {
          x: 1551255082196,
          y: 50000
        },
        {
          x: 1551255092196,
          y: 800
        },
        {
          x: 1551255102196,
          y: 600
        },
        {
          x: 1551255122196,
          y: 1200
        },
        {
          x: 1551255142196,
          y: 200
        },
        {
          x: 1551255152196,
          y: 400
        },
        {
          x: 1551255172196,
          y: 500
        }
      ]
    }
  ],
  xAxis: [
    {
      title: "XAxis 1 label",
      scale: AxisScaleType.Time,
      grid: {
        visible: true,
        color: "#D3D3D3"
      },
      visible: true,
      opposite: false,
      color: "#4b0082"
    }
  ],
  yAxis: [
    {
      title: "YAxis 1 Label",
      scale: AxisScaleType.Linear,
      grid: {
        visible: true,
        color: "#D3D3D3"
      },
      visible: true,
      opposite: false,
      color: "#4b0082"
    }
  ]
};

const Template = () => {
  const container = createCartesian();
  setTimeout(() => {
    new CartesianChart(container, options);
  }, 10);
  return container;
};

export const Line = Template.bind({});

import { AxisScaleType, CartesianChart, VisualizationType } from "@ikshanam/d3-charts";
import { createCartesian } from "./cartesian";

export default {
  title: "Example/Cartesian",
  argTypes: {
    label: { control: "text" },
    primary: { control: "boolean" },
    backgroundColor: { control: "color" },
    size: {
      control: { type: "select", options: ["small", "medium", "large"] },
    },
    onClick: { action: "onClick" },
  },
};

// const container = createCartesian();
const options = {
  series: [
    {
      visualization: VisualizationType.Line,
      name: 'First series',
      color: '#2D1C90',
      xIndex: 0,
      yIndex: 0,
      visible: true,
      tooltip: {
        visible: false,
        formatter: () => ''
      },
      data: [
        {
          x: 1551255052196,
          y: 0
        },
        {
          x: 1551256082196,
          y: 10000
        },
        {
          x: 1551257092196,
          y: 200
        },
        {
          x: 1551258102196,
          y: 400
        },
        {
          x: 1551259122196,
          y: 500
        },
        {
          x: 1551260142196,
          y: 200
        },
        {
          x: 1551261152196,
          y: 400
        },
        {
          x: 1551362172196,
          y: 500
        }
      ]
    },
    {
      visualization: VisualizationType.Area,
      name: 'Second series',
      color: '#409FF0',
      xIndex: 1,
      yIndex: 1,
      visible: true,
      tooltip: {
        visible: false,
        formatter: () => ''
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
      title: 'XAxis 1 label',
      scale: AxisScaleType.Time,
      grid: {
        visible: true,
        color: '#D3D3D3'
      },
      visible: true,
      opposite: false,
      color: '#4b0082'
    },
    {
      title: 'XAxis 2 label',
      scale: AxisScaleType.Time,
      grid: {
        visible: true,
        color: '#409FF0'
      },
      visible: true,
      opposite: true,
      color: '#4b0082'
    }
  ],
  yAxis: [
    {
      title: 'YAxis 1 Label',
      scale: AxisScaleType.Linear,
      grid: {
        visible: true,
        color: '#D3D3D3'
      },
      visible: true,
      opposite: false,
      color: '#4b0082'
    },
    {
      title: 'YAxis 2 Label',
      scale: AxisScaleType.Linear,
      grid: {
        visible: true,
        color: '#409FF0'
      },
      visible: true,
      opposite: true,
      color: '#4b0082'
    }
  ]
};;

const Template = () => {
  // You can either use a function to create DOM elements or use a plain html string!
  // return `<div>${label}</div>`;
  const container = createCartesian();
  setTimeout(() => {
    new CartesianChart(container, options);
  }, 10);
  return container;
};

export const Line = Template.bind({});

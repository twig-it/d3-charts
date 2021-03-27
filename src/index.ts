import './styles.css';
import { AxisScaleType, CartesianChart, VisualizationType } from "@samskara-ui/d3-charts";

// Write TypeScript code!
const appDiv: HTMLElement = document.createElement("div")!;
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

const cartesianObject = new CartesianChart(appDiv, options);
cartesianObject.addSeries(
  {
    visualization: VisualizationType.Area,
    visible: true,
    color: "#3333FF",
    name: "Response Time",
    xIndex: 0,
    yIndex: 0,
    data: [
      { x: 1516316270325, y: 2 },
      { x: 1516316370325, y: 4 },
      { x: 1516316470325, y: 8 },
      { x: 1516316570325, y: 16 },
      { x: 1516317570325, y: 32 },
      { x: 1516318570325, y: 64 },
      { x: 1516319670325, y: 128 },
      { x: 1516320670325, y: 256 },
      { x: 1516321670325, y: 512 },
      { x: 1516322670325, y: 1024 },
      { x: 1516323670325, y: 2048 },
      { x: 1516324670325, y: 4096 }
    ],
    tooltip: {
      visible: true,
      formatter: () => "Tooltip Test"
    }
  },
  true
);

console.log('Index ts loaded');
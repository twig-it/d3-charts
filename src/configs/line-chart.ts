import {
  AxisScaleType,
  CartesianChart,
  VisualizationType,
} from "@twig-it/d3-charts";

const options = {
  series: [
    {
      visualization: VisualizationType.Line,
      name: "Line series",
      color: "#2D1C90",
      xIndex: 0,
      yIndex: 0,
      visible: true,
      tooltip: {
        visible: false,
        formatter: () => "",
      },
      data: [],
    },
  ],
  xAxis: [
    {
      title: "XAxis label",
      scale: AxisScaleType.Time,
      grid: {
        visible: true,
        color: "#D3D3D3",
      },
      visible: true,
      opposite: false,
      color: "#4b0082",
    },
  ],
  yAxis: [
    {
      title: "YAxis Label",
      scale: AxisScaleType.Linear,
      grid: {
        visible: true,
        color: "#D3D3D3",
      },
      visible: true,
      opposite: false,
      color: "#4b0082",
    },
  ],
};

export const buildLineChart = (container: HTMLElement) => {
  const chart = new CartesianChart(container, options);

  let count = 0;

  setInterval(() => {
    chart.addPoint(
      "Line series",
      {
        x: Date.now(),
        y: Math.random() * 1000 * count++,
      },
      true
    );
  }, 2000);
};

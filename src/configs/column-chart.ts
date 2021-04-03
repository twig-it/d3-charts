import {
  AxisScaleType,
  CartesianChart,
  VisualizationType,
} from "@twig-it/d3-charts";

const options = {
  series: [
    {
      visualization: VisualizationType.Column,
      name: "Column series",
      color: "green",
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
      scale: AxisScaleType.Category,
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

export const buildColumnChart = (container: HTMLElement) => {
  const chart = new CartesianChart(container, options);

  let count = 0;

  setInterval(() => {
    count < 10 &&
      chart.addPoint(
        "Column series",
        {
          x: `cat${count}`,
          y: Math.random() * 1000 * count++,
        },
        true
      );
  }, 2000);
};

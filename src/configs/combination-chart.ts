import {
  AxisScaleType,
  CartesianChart,
  VisualizationType,
} from "@twig-it/d3-charts";

const options = {
  series: [
    {
      visualization: VisualizationType.Line,
      name: "Line series 1",
      color: "#27c675",
      xIndex: 0,
      yIndex: 1,
      visible: true,
      tooltip: {
        visible: false,
        formatter: () => "",
      },
      data: [],
    },
    {
      visualization: VisualizationType.Line,
      name: "Line series 2",
      color: "#9e4c41",
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
      color: "#27c675",
    },
  ],
  yAxis: [
    {
      title: "YAxis Label 1",
      scale: AxisScaleType.Linear,
      grid: {
        visible: true,
        color: "#D3D3D3",
      },
      visible: true,
      opposite: false,
      color: "#9e4c41",
    },
    {
      title: "YAxis Label 2",
      scale: AxisScaleType.Linear,
      grid: {
        visible: false,
        color: "#D3D3D3",
      },
      visible: true,
      opposite: true,
      color: "#27c675",
    },
  ],
};

export const buildCombinationChart = (container: HTMLElement) => {
  const chart = new CartesianChart(container, options);

  let count = 0;

  setInterval(() => {
    const x = Date.now();
    count++;
    chart.addPoint(
      "Line series 1",
      {
        x: x,
        y: Math.random() * 1000 * count * 2,
      },
      false
    );

    chart.addPoint(
      "Line series 2",
      {
        x: x,
        y: Math.random() * 1000 * count,
      },
      true
    );
  }, 2000);
};

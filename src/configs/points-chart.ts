import {
  AxisScaleType,
  CartesianChart,
  VisualizationType,
} from "@samskara-ui/d3-charts";

const options = {
  series: [
    {
      visualization: VisualizationType.Points,
      name: "Points series",
      color: "red",
      xIndex: 0,
      yIndex: 0,
      visible: true,
      tooltip: {
        visible: false,
        formatter: () => "",
      },
      data: [],
      //   data: [
      //     {
      //       x: 1551255052196,
      //       y: 150,
      //     },
      //     {
      //       x: 1551255082196,
      //       y: 150000,
      //     },
      //     {
      //       x: 1551255092196,
      //       y: 2800,
      //     },
      //     {
      //       x: 1551255102196,
      //       y: 4600,
      //     },
      //     {
      //       x: 1551255122196,
      //       y: 61200,
      //     },
      //     {
      //       x: 1551255142196,
      //       y: 8200,
      //     },
      //     {
      //       x: 1551255152196,
      //       y: 11400,
      //     },
      //     {
      //       x: 1551255172196,
      //       y: 15500,
      //     },
      //   ],
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

export const buildPointsChart = (container: HTMLElement) => {
  const chart = new CartesianChart(container, options);

  let count = 0;

  setInterval(() => {
    chart.addPoint(
      "Points series",
      {
        x: Date.now(),
        y: Math.random() * 1000 * count++,
      },
      true
    );
  }, 2000);
};

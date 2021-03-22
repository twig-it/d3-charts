import { CartesianChart, LegendAlign } from "@ikshanam/d3-charts";

export const createCartesian = () => {
  const container = document.createElement("div");

  new CartesianChart(container, options);

  return container;
};

const options = {
  animation: false,
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

import "./styles.css";
import { buildPointsChart } from "./configs/points-chart";
import { buildLineChart } from "./configs/line-chart";
import { buildAreaChart } from "./configs/area-chart";
import { buildColumnChart } from "./configs/column-chart";

const appRootDiv = document.getElementById("app");

const buildChartContainer = (): HTMLElement => {
  const container: HTMLElement = document.createElement("div")!;
  appRootDiv!.appendChild(container);

  return container;
};

// Add Area Chart
buildAreaChart(buildChartContainer());

// Add Line Chart
buildLineChart(buildChartContainer());

// Add Points Chart
buildPointsChart(buildChartContainer());

// Add Column Chart
buildColumnChart(buildChartContainer());

// Add Points Chart
buildPointsChart(buildChartContainer());

// Add Points Chart
buildPointsChart(buildChartContainer());

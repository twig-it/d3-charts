import "./styles.css";
import { buildPointsChart } from "./configs/points-chart";

const appRootDiv = document.getElementById("app");

const buildChartContainer = (): HTMLElement => {
  const container: HTMLElement = document.createElement("div")!;
  appRootDiv!.appendChild(container);

  return container;
};

// Add Points Chart
buildPointsChart(buildChartContainer());

// Add Points Chart
buildPointsChart(buildChartContainer());

// Add Points Chart
buildPointsChart(buildChartContainer());

// Add Points Chart
buildPointsChart(buildChartContainer());

// Add Points Chart
buildPointsChart(buildChartContainer());

// Add Points Chart
buildPointsChart(buildChartContainer());

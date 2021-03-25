// Import stylesheets
import "./style.css";
import { CartesianChart, VisualizationType } from "@ikshanam/d3-charts";

// Write TypeScript code!
const appDiv: HTMLElement = document.getElementById("app")!;
const cartesianObject = new CartesianChart(appDiv, {});
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

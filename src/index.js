import { draw } from "./services/draw.js";
import { mergeSort } from "./services/mergeSort.js";

const root = document.querySelector("#root");
const header = document.createElement("h1");

header.textContent = "ВВП крупнейших экономик мира";

root.appendChild(header);

const data = await fetch("./data.json").then((res) => res.json());
const diagramm = draw(mergeSort(data, (a, b) => b.value - a.value));

diagramm.className = "diagramm";

root.appendChild(diagramm);

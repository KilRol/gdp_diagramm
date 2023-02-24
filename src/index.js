import { sum } from "./services/sum.js";

const root = document.querySelector("#root");

const header = document.createElement("h1");
header.textContent = "ВВП крупнейших экономик мира";
root.appendChild(header);

const sump = document.createElement("p");
sump.textContent = `1 + 2 = ${sum(1, 2)}`;
root.appendChild(sump);

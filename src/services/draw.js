/**
 * @constructor
 * @param {[]} data - данные ввп
 * @returns {HTMLDivElement} диаграмма в виде HTML-блоке
 */

import getUniqueColorGenerator from './getUniqueColorGenerator.js'

export function draw(data) {
  const max = data.reduce((acc, item) => {
    acc = acc < item.value ? item.value : acc;
    return acc;
  }, 0);

  const colorGenerator = getUniqueColorGenerator(data.length)

  const diagramm = data.reduce((acc, item, index) => {
    const container = document.createElement("div");
    const bar = document.createElement("div");
    const info = document.createElement("p");

    container.className = "diagramm_item";
    bar.className = "diagramm_item_bar";

    bar.style.backgroundColor = `#${colorGenerator()}`;
    bar.style.width = `${(1 / max) * item.value * 100}%`;

    info.textContent = `${index + 1}. $${item.value} - ${item.name}`;

    container.appendChild(bar);
    container.appendChild(info);

    acc.appendChild(container);

    return acc;
  }, document.createElement("div"));

  return diagramm;
}

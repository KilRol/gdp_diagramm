/**
 * @constructor
 * @param {[]} data - gpd data
 *
 */

export function draw(data) {
  const max = data.reduce((acc, item) => {
    acc = acc < item.value ? item.value : acc;
    return acc;
  }, 0);

  const diagramm = data.reduce((acc, item) => {
    const container = document.createElement("div");
    const bar = document.createElement("div");
    const info = document.createElement("p");

    //Current Pallete https://coolors.co/292f36-4ecdc4-ffffff-ff6b6b-ffffff
    container.className = "diagramm_item";
    bar.className = "diagramm_item_bar";
    bar.style.backgroundColor = "#292F36";
    bar.style.width = `${(1 / max) * item.value * 100}%`;

    info.textContent = `$${item.value} - ${item.name}`;

    container.appendChild(bar);
    container.appendChild(info);

    acc.appendChild(container);

    return acc;
  }, document.createElement("div"));

  return diagramm;
}

const d = document;

const container = d.querySelector("#container");
const size = d.querySelector("#size");
const reset = d.querySelector("#reset");

let squareSize;

const crearGrilla = () => {
  const div = d.createElement("div");
  div.classList.add("div-grilla");
  div.style.width = `${squareSize}px`;
  div.style.height = `${squareSize}px`;
  container.appendChild(div);

  div.addEventListener("mouseover", () => {
    div.style.backgroundColor = `hsl(${Math.random() * 360}, 100%, 75%)`;
  });
};

const limpiarGrilla = () => {
  container.innerHTML = "";
  container.style.display = "none";
};

reset.addEventListener("click", () => {
  limpiarGrilla();
});

size.addEventListener("click", () => {
  let gridSize = parseInt(prompt("¿Cuántos cuadritos querés? (Máx 100)")); // Ej: 2

  if (gridSize > 100) gridSize = 100;
  squareSize = 798 / gridSize;

  limpiarGrilla();

  for (let i = 1; i <= gridSize * gridSize; i++) {
    crearGrilla();
  }
  container.style.display = "flex";
});

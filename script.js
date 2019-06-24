const container = document.querySelector("#container");
console.log(container);

for (let i = 0; i < 16; i++) {
    container.appendChild(document.createElement("div"));
}

const squares = document.querySelectorAll("div");

squares.forEach(function(square) {
    square.setAttribute("class", "gridItem");
});
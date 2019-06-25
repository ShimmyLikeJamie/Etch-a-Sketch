


function createGrid(num) {
    const container = document.querySelector("#container");
    
    for (let i = 0; i < (num*num); i++) {
        container.appendChild(document.createElement("span"));
    }
    container.style.gridTemplateColumns = "1fr ".repeat(num);
    container.style.gridTemplateRows = "1fr ".repeat(num);
}


function addEvents() {
const squares = document.querySelectorAll("span");

squares.forEach(function(square) {
    square.setAttribute("class", "gridItem");
    square.addEventListener("mouseover", function () {
        square.setAttribute("class", "gridItem, on");
    });
    square.addEventListener("click", function() {
        square.setAttribute("class", "gridItem, off");
    })
});
}

const newGridButton = document.querySelector("button");

newGridButton.addEventListener("click", function() {
    const boxes = document.querySelectorAll("span");
    let squaresPerSide = parseInt(prompt("How many squares would you like per side?", 16));
    boxes.forEach(function(box) {
        container.removeChild(box);
    });
    createGrid(squaresPerSide);
    addEvents();
});

createGrid(16);
addEvents();
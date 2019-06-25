const container = document.querySelector("#container");
console.log(container);

for (let i = 0; i < (16*16); i++) {
    container.appendChild(document.createElement("span"));
}

const squares = document.querySelectorAll("span");

squares.forEach(function(square) {
    square.setAttribute("class", "gridItem");
    square.addEventListener("mouseover", function () {
        square.setAttribute("id", "on");
    });
    square.addEventListener("click", function() {
        square.setAttribute("id", "off");
    })
});
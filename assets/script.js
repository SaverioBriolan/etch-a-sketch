
const container = document.querySelector('.container');
function createCell (nbCell) {
    cellSize = 640 / nbCell;
    nbCell = nbCell * nbCell;
    for (i=0; i < nbCell; i++){
        const cell = document.createElement('div');
        container.appendChild(cell);
        cell.className = 'cell';
         cell.setAttribute('style', "width: "+cellSize+"px; height: "+cellSize+"px;");
    }
    const cells = document.querySelectorAll('.cell');
    cells.forEach((cell) => {
        cell.addEventListener("mouseenter", (event) => {
            event.target.style.backgroundColor = "#403d39";
        })
    });
}

function removeCell() {
    const cells = document.querySelectorAll('.cell');
cells.forEach((cell) => {
        container.removeChild(cell)
});
}

createCell(16);

function askNumber(){
    let nbCell= prompt('Hi ! How many squares for one line do you want ? (max: 100)');
    removeCell();
    createCell(nbCell);
}

function changeColor(){
    const cells = document.querySelectorAll('.cell');
    cells.forEach((cell) => {
        cell.addEventListener("mouseenter", (event) => {
            const randomBetween = (min, max) => min + Math.floor(Math.random() * (max - min + 1));
            const r = randomBetween(0, 255);
            const g = randomBetween(0, 255);
            const b = randomBetween(0, 255);
            const rgb = `rgb(${r},${g},${b})`; // Collect all to a css color string
            event.target.style.backgroundColor = rgb;
        })
    });
    //Switch text button
    const color = document.querySelector('.color');
    text = color.textContent;
    if (text == "Switch to color"){
    color.textContent = "Switch to black";
    } else {
        color.textContent = "Switch to color";
        const cells = document.querySelectorAll('.cell');
    cells.forEach((cell) => {
        cell.addEventListener("mouseenter", (event) => {
            event.target.style.backgroundColor = "#403d39";
        })
    });
    }
}





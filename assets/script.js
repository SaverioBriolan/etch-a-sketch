
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





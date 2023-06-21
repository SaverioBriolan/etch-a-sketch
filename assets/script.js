
const container = document.querySelector('.container');
function createCell (nb) {
   for (i=0; i < nb; i++){
        const cell = document.createElement('div');
        container.appendChild(cell);
        cell.className = 'cell';
    }
}
createCell(256);
const cells = document.querySelectorAll('.cell');
cells.forEach((cell) => {
    cell.addEventListener("mouseenter", (event) => {
        event.target.style.backgroundColor = "#403d39";
    })
});



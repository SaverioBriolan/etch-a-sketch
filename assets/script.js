
const container = document.querySelector('.container');
function createDiv (nb) {
   for (i=0; i < nb; i++){
        const newDiv = document.createElement('div');
        container.appendChild(newDiv);
        newDiv.setAttribute('style', 'width: 50px;height: 50px; background-color: gray; margin: 0px');
        newDiv.className = 'square';
    }
}
createDiv(256);
container.setAttribute('style', 'width: 800px; height: 800px; display: flex; flex-wrap: wrap;')
const squares = document.querySelectorAll('.square');
squares.forEach((square) => {
});



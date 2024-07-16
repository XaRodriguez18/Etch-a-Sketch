const container = document.querySelector('#container');
const createSquares = () => {
    for (let i = 0; i < 16; i++) {
        let square = document.createElement("div");
        square.classList.add('child');
        container.appendChild(square);
    }
}

createSquares();
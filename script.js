const container = document.querySelector('#container');

const createSquares = (rows) => {
    for (let i = 0; i < (rows * rows); i++) {
        let square = document.createElement("div");
        square.classList.add('child');
        squareWidth = 100 / rows;
        square.style.width = `${squareWidth}%`
        container.appendChild(square);
        square.addEventListener('mouseover', () => {
            square.style.backgroundColor = 'red';
        })
    }
}

createSquares(16);

const btn = document.querySelector('#btn');

btn.addEventListener('click', () => {
    rows = prompt('Enter a value between 0 and 100');
    container.innerHTML = '';
    if (rows > 0 && rows < 101) {
        createSquares(rows);
    } else {
        alert('Only input values between 0 and 100');
        createSquares(16);
    }
})
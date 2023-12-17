function createDrawTable(y, x) {
    const drawTable = document.createElement('div');
    drawTable.className = 'drawTable';
    document.body.appendChild(drawTable);
    for (let i = 0; i < y; i++) {
        const column = document.createElement('div');
        drawTable.appendChild(column);
        for (let i = 0; i < x; i++) {
            const box = document.createElement('div');
            box.className = 'boxClass';
            box.setAttribute('style', 'width: 7px; height: 7px; border: 1px solid black; background-color: rgb(255, 255, 188)');
            column.appendChild(box)
            box.addEventListener('mouseover', () => {
                box.style.background = `hsl(${Math.random() * 360}, 100%, 50%)`;
            });
        }
    }
};
createDrawTable(80, 80);

function clearTable() {
    const boxElements = document.querySelectorAll('.boxClass');
    const color = 'rgb(255, 255, 188)';
    boxElements.forEach((box) => {
        box.style.background = color;
    });
}
const clrButton = document.querySelector('.clear');
clrButton.addEventListener('click', clearTable);





const container = document.getElementById('container');
const colors = [
    '#f85e1e',
    '#f8c430',
    '#c8de52',
    '#4992ef',
    '#4c4db2',
    '#775648',
    '#9e9e9e',
    '#ee4b30',
    '#f89c1d',
    '#89c458',
    '#23958a',
    '#9e23ab',
    '#e32b5d',
    '#627c8b'
];
const SQUARES = 1400;

for(let i = 0; i < SQUARES; i++) {
    const square = document.createElement('div')
    square.classList.add('square')

    square.addEventListener('mouseover', () => setColor(square))

    square.addEventListener('mouseout', () => removeColor(square))

    container.appendChild(square)
}

function setColor(element) {
   const color = getRandomColor()
   element.style.background = color
   element.style.boxShadow = `0 0 2px ${color}, 0 0 10px ${color}`
}

function removeColor(element) {
   element.style.background = '#222'
   element.style.boxShadow = '0 0 2px #000'
}

function getRandomColor() {
    return colors[Math.floor(Math.random() * colors.length)]
}
function rotateFrontCard() {
    const card = document.querySelector('.container');
    card.classList.add('rotateFront');
}

function rotateBackCard() {
    const card = document.querySelector('.container');
    card.classList.add('rotateBack');
}

function shift() {
    const card = document.querySelector('.container');
    card.classList.remove('rotateFront');
}

function unshift() {
    const card = document.querySelector('.container');
    card.classList.remove('rotateBack');
}
// function getRandomHexColor() {
//   return `#${Math.floor(Math.random() * 16777215).toString(16)}`;
// }
const inputNumber = document.querySelector('input');
const btnCreate = document.querySelector('button[data-create]');
const btnDestroy = document.querySelector('button[data-destroy]');
const divBoxes = document.querySelector('#boxes');
const divControls= document.querySelector('#controls');
const startValuePx = 30;

function getRandomHexColor() {
   return `#${Math.floor(Math.random() * 16777215)
    .toString(16)
    .padStart(6, 0)}`;
}

function createBoxes(amount) {
    const divElAdd = [];
    for (let i = 0; i < amount; i++) {
        const divElCreate = document.createElement('div');
        divElCreate.style.width = `${startValuePx + 10 * i}px`
        divElCreate.style.height = `${startValuePx + 10 * i}px`
        divElCreate.style.background = getRandomHexColor();
        
        divElAdd.push(divElCreate);
    }
     return divElAdd;   
};

 function destroyBoxes() {
     divBoxes.innerHTML = '';
}

btnCreate.addEventListener('click', () => {
    let boxesToAdd = createBoxes(inputNumber.value)
    divBoxes.append(...boxesToAdd)

     console.log(divBoxes)
});

btnDestroy.addEventListener('click', () => {
    destroyBoxes.call()
});

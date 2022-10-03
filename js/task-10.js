// function getRandomHexColor() {
//   return `#${Math.floor(Math.random() * 16777215).toString(16)}`;
// }
const divControls = document.querySelector('#controls')
const inputEl = document.querySelector('input');
  const btnCreate = document.querySelector('button[data-create]');
const btnDestroy = document.querySelector('button[data-destroy]');
const divBoxes = document.querySelector('#boxes')

 
btnCreate.addEventListener('click', createBoxes); 

function createBoxes(amount) {
   const divEl = document.createElement('div');
  
  for (i = 0; i <= amount.length; i++);
  amount[i] = inputEl.value;
  return divEl;

}


  //divBoxes.appendChild(...сreateDivList)

 


// function calculateTotalPrice(order) {
//   let total = 0;
//   
// for (i = 0; i < order.length; i += 1)
//   total += order[i];
//  
//   return total;
// }

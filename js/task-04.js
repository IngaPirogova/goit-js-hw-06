const btnDec = document.querySelector('button[ data-action = "decrement"]');
const btnInc = document.querySelector('button[ data-action = "increment"]');
const spanValue = document.querySelector("#value");
let counterValue = 0;

btnDec.addEventListener('click', onBtnDecClick);
btnInc.addEventListener('click', onBtnIncClick);

function onBtnDecClick() {
    counterValue -= 1;
    spanValue.textContent = counterValue;  
  
}

function onBtnIncClick() {
    counterValue += 1;
    spanValue.textContent = counterValue;    
}

    
    
    
    
    
    
    
    
    
    
    
    
    
    
    
    
    
    

    
    
    
    
    
    
    
    
    
    
    
    
// function onBtnUpClick() {
//     newValue += 1;
//     counterValue.textContent = newValue;
// }

// function onBtnDownClick() {
//     newValue -= 1;
//     counterValue.textContent = newValue;
// }


// Счетчик состоит из спана и кнопок, которые, при клике, должны увеличивать и уменьшать его значение на единицу.

// <div id="counter">
//   <button type="button" data-action="decrement">-1</button>
//   <span id="value">0</span>
//   <button type="button" data-action="increment">+1</button>
// </div>

// Создай переменную counterValue в которой будет храниться текущее значение счетчика и инициализируй её значением 0.
// Добавь слушатели кликов на кнопки, внутри которых увеличивай или уменьшай значение счтетчика.
// Обновляй интерфейс новым значением переменной counterValue.

// const counterValue = document.querySelector("#value");
// let newValue = 0;


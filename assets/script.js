const value = document.getElementById('value');  //variaveis do html
const plusButton = document.getElementById('plus');  //variaveis do html
const minusButton = document.getElementById('minus'); //variaveis do html  
const resetButton = document.getElementById('reset');  //variaveis do html

const updateValue = () => {    // cria uma func do valor exibido na tela 
    value.innerHTML = count;
};

let count = 0;    // valor na tela
let intervalId = 0;    // valor na tela

plusButton.addEventListener('click', () => {      //cria func de + > adicionar um numero ao click
    count += 1;
    updateValue();
});

minusButton.addEventListener('click', () => {   //cria func de - > adicionar um numero ao click
    count -= 1; 
    updateValue();
});

resetButton.addEventListener('click', () => {   //cria func de resetar a contagem
    count = 0;
    updateValue();
});



// Outra opção, mas para press click e não apenas click.

/* const value = document.getElementById('value');  //variaveis do html
const plusButton = document.getElementById('plus');  //variaveis do html
const minusButton = document.getElementById('minus');  //variaveis do html
const resetButton = document.getElementById('reset');  //variaveis do html

const updateValue = () => {    // cria uma func do valor exibido na tela
    value.innerHTML = count;
};

let count = 0;             // valor na tela
let intervalId = 0;       // valor na tela

plusButton.addEventListener('mousedown', () => {
        intervalId = setInterval(() => {
            count += 1;
            updateValue();
        }, 100);
});

minusButton.addEventListener('mousedown', () => {
    intervalId = setInterval(() => {
        count -= 1;
        updateValue();
    }, 100);
});

plusButton.addEventListener('mouseup', () => {
    clearInterval(intervalId);
});

minusButton.addEventListener('mouseup', () => {
    clearInterval(intervalId);
});

resetButton.addEventListener('click', () => {
    count = 0;
    updateValue();  // Atualiza o valor exibido na tela
    clearInterval(intervalId); //Limpa o intervalo
});

*/
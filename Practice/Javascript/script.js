/* Here I'm adding another phrase for my p tag, also disabling my button to avoid to repeat the phrase.
*/
function teste(){
    document.getElementById('paragrafo').innerHTML += '<br>Além de tudo, precisamos testar mais coisas com essas atividades perpedinculares nas vidas atômicas.'
    document.getElementById('botao').disabled = true;
}

/*This is an example of forLoop, just putting some buttons with numbers on it.
Furthermore, avoiding that the user repeat the action.*/
function forLoop(){
    let div = document.querySelector('.caixinhas');
    let html = '';
    let botao = document.querySelector('[onclick = "forLoop()"');
    botao.disabled = true;
    botao.innerHTML = 'Already done';
    
    for(let cont = 1; cont <= 10;cont++){
        html += `<button>${cont}</button>`;
    } 
    div.innerHTML += html;
}

/*Begining with arrowfunctions and using default parameters*/

function calculate(numeros){
    let valores = document.getElementsByName(numeros);
    soma(parseInt(valores[0].value),parseInt(valores[1].value));
}

const soma = (n1 = 0,n2 = 0) => console.log(n1+n2);
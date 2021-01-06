/*  Here I'm removing an element from HTML page using his ID. Also adding another element, without deleting or overwriting the paragraph existent.*/
function teste(){
    document.getElementById('paragrafo').innerHTML += '<br>Além de tudo, precisamos testar mais coisas com essas atividades perpedinculares nas vidas atômicas.'
    document.getElementById('botao').remove();

    let container = document.getElementById('container');
    container.innerHTML += '<button type="button" id="botao" disabled>Already done</button';
}

/*This is an example of forLoop, just putting some buttons with numbers on it.
It's funny because I've tried to use ${} to concat the string, but it didn't work*/
function forLoop(){
    let div = document.querySelector('.caixinhas');
    let html = '';
    for(let cont = 1; cont <= 10;cont++){
        html += '<button>'+cont+'</button>';
    }
    div.innerHTML += html;
}
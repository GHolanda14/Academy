function teste(){
    document.getElementById('paragrafo').innerHTML += '<br>Além de tudo, precisamos testar mais coisas com essas atividades perpedinculares nas vidas atômicas.'
    document.getElementById('botao').remove();

    let container = document.getElementById('container');
    container.innerHTML += '<button type="button" id="botao" disabled>Already done</button';
}
/*  Here I'm removing an element from HTML page using his ID. Also adding another element, without deleting or overwriting the paragraph existent.*/
const divManipula = document.getElementById("manipula")

function mudarTamanhoFonte(){
    divManipula.style.style.fontSize = "30px";
}
function mudarCorFonte(){
    divManipula.style.style.color = "#ffffff";
}
function mudarCorFundo(){
    divManipula.style.backgroundColor = "#000000";
}
function fonteItalico(){
    divManipula.style.fontStyle = "italic";
}
function fonteNegrito(){
    divManipula.style.fontWeight = "bold";
}
function adicionaBorda(){
    divManipula.style.border = "3px solid #000000";
}
function tirarBorda(){
    divManipula.style.border = "0px";
}
function tirarDiv(){
    divManipula.style.display = "none";
}
function incluirDiv(){
    divManipula.style.display = "block";
}
function mudarSegundaChamada(){
    console.log(document.getElementsByClassName("chamada"));
    document.getElementsByClassName("chamada")[1].innerHTML = "OLÁ! TUDO BEM?";
}
function mudarFundoParagrafo(){
    document.getElementsByClassName("paragrafo")[0].style.backgroundColor = "red";
    
}
function mudarCorBotao(){
    const elementosbotoes = document.getElementsByTagName("button");
    let numerobotao = Math.round(Math.random()*elementosbotoes.length -1) +1;
    alert(numerobotao);
    elementosbotoes[numerobotao - 1].style.backgroundColor = "red";

//document.getElementsByTagName("button")[6].style.backgroundColor = "red";
}
function mudarCorTodosBotoes(){
    const divBotoes = document.getElementById("botoes");
    var botoes = divBotoes.getElementsByTagName("button");

    var i; //indice do FOR
    for (i=0; i<botoes.length; i++){
        botoes[i].style.backgroundColor = "lightgreen";
    }
}
function contarBotoes(){
    let qtndBotoes = document.getElementById("botoes").getElementsByTagName("button").length;
    divManipula.innerHTML = qtndBotoes;
}
function inserirTexto(texto){
    let textoInserido = texto;
    document.getElementsByClassName("paragrafo")[0].innerHTML = textoInserido;
}
function mudarFundoPagina(){

    document.querySelector("body").style.backgroundColor = "yellow";
} 
function mudarImagem(){
    document.querySelector("img").src = "alien.jpg";
}
function acionarTudo(){
    mudarFundoPagina();
    inserirTexto('TEXTO ADCIONADO PELO BOTÃO 19');
    mudarImagem();
    mudarTamanhoFonte();
    mudarCorFonte();
    mudarCorFundo();
    fonteItalico();
    fonteNegrito();
    adicionaBorda();
    contarBotoes();
}







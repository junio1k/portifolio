
let navBotao = document.querySelector(".nav-botao");
let botaoFechar = document.querySelector(".botao-fechar")
let navegacao = document.getElementById("navegacao");
navBotao.addEventListener("click", function(){
    navegacao.style.width = "78%";
    navegacao.style.opacity = "98%";

})
botaoFechar.addEventListener("click", function(){
    document.getElementById("navegacao").style.width = "0%"
})

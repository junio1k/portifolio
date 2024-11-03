
let navBotao = document.querySelector(".nav-botao");
let botaoFechar = document.querySelector(".botao-fechar")
let navegacao = document.getElementById("navegacao");
let downloadCurriculum = document.getElementById("download_curriculum");
navBotao.addEventListener("click", function(){
    navegacao.style.width = "78%";
    navegacao.style.opacity = "98%";

})
botaoFechar.addEventListener("click", function(){
    document.getElementById("navegacao").style.width = "0%"
})


// download curriculo

function download () {
    /*var pathWay = "./curriculo/currículo.pdf";
    
    // criar um link 
    let a = document.createElement("a");
    a.classList.add("download_curriculum");

    a.href = pathWay;
    a.download = pathWay.split("./curriculo/currículo.pdf").pop();

    document.body.appendChild(a);*/
    for(let i = 0; i <= 4; i++){
        console.log(i);
    }

}
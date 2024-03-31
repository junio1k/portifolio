
let buttonEncontrar = document.getElementById('ondeEncontrar');
let menu = document.getElementById('menu');

let buttonFormacao = document.getElementById('formacao');
let menu1 = document.getElementById('menu1')

buttonEncontrar.addEventListener('click', function (){
    if(menu.style.display === 'block'){
        menu.style.display = 'none';
    }else {
        menu.style.display = 'block';
    }
});

buttonFormacao.addEventListener('click', function(){
    if(menu1.style.display === 'block'){
        menu1.style.display = 'none';
    }else{
        menu1.style.display = 'block';
    }
})

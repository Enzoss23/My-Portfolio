function menuShow(){
    let menuMobile = document.querySelector('.mobile-menu')
    if (menuMobile.classList.contains('open')) {
        menuMobile.classList.remove('open');
    }
    else{
        menuMobile.classList.add('open')
    }
}


const js = document.getElementById('Js')
const html = document.getElementById('Html')
const css = document.getElementById('Css')
js.addEventListener('click', clicar)
html.addEventListener('click', toque)
css.addEventListener('click', touch)

function clicar () {
    const scroll = document.getElementById('Js')
    if(scroll.innerHTML != "Clique Aqui!"){
        scroll.innerHTML = "Clique Aqui!"
    }
    else{
         scroll.innerHTML = 'JavaScript é uma linguagem de programação de script em alto nível responsável pela dinâmica do site. Juntamente com HTML e CSS.'
    }
}

function toque (){
    const texto = document.getElementById('Html')
    if(texto.innerHTML != 'Clique Aqui!'){
        texto.innerHTML = 'Clique Aqui!'
    }
    else{
        texto.innerHTML= 'HTML é uma linguagem de marcação responsável pela estrutura do site dando toda a interatividade de conteúdo.'
    }
}
function touch (){
    const textoCss = document.getElementById('Css')
    if(textoCss.innerHTML != 'Clique Aqui!'){
        textoCss.innerHTML = 'Clique Aqui!'
    }
    else{
        textoCss.innerHTML = 'CSS é uma linguagem de estilização responsável por toda a parte de designer e coloração do site, ficando atrativo com os estilos e fontes.'
    }
}

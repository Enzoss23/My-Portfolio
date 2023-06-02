function menuShow(){
    let menuMobile = document.querySelector('.mobile-menu')
    if (menuMobile.classList.contains('open')) {
        menuMobile.classList.remove('open');
        document.querySelector('.icon').src = "img/menu_white_36dp.svg"
    }
    else{
        menuMobile.classList.add('open')
        document.querySelector('.icon').src = "img/close_white_36dp.svg"
    }
}


const js = document.getElementById('Js')
const html = document.getElementById('Html')
const css = document.getElementById('Css')
const git = document.getElementById('git')
js.addEventListener('click', clicar)
html.addEventListener('click', toque)
css.addEventListener('click', touch)
git.addEventListener('click', tocar)

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
function tocar(){
    const textogit = document.getElementById('git')
    if(textogit.innerHTML != 'Clique Aqui!'){
        textogit.innerHTML = 'Clique Aqui!'
    }
    else{
        textogit.innerHTML = 'Git é um sistema de controle de versões distribuído, usado principalmente para desenvolvimento de software, mas pode ser usado para registrar o histórico de edições de qualquer tipo de arquivo.'
    }
}
document.addEventListener("DOMContentLoaded", () => {
    new TypeIt('.animated',{
    speed: 200,
    loop: true,
    }).type("Enzo Santos Souza", {delay: 5000})
    .go()
})
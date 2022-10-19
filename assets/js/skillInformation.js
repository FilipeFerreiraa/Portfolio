let text = document.querySelector('.skills_instruction');

let container = document.querySelector('.skills_container');
container.addEventListener('mouseout', ()=> {
    text.innerText = '/*Passe o mouse por cima das tecnologias para mais informações*/';
})

let html = document.getElementById('html');
html.addEventListener('mouseover', ()=> { 
    if(html.onmousemove = true) {
        text.innerText = 'HTML é uma linguagem de marcação utilizada na construção de páginas na Web.';
    }
})

let css = document.getElementById('css');
css.addEventListener('mouseover', ()=> { 
    if(css.onmousemove = true) {
        text.innerText = 'Cascading Style Sheets é um mecanismo para adicionar estilo a um documento web.';
    }
})

let javascript = document.getElementById('javascript');
javascript.addEventListener('mouseover', ()=> { 
    if(html.onmousemove = true) {
        text.innerText = 'JavaScript é uma linguagem de programação interpretada estruturada, de script em alto nível com tipagem dinâmica fraca e multiparadigma.';
    }
})

let python = document.getElementById('python');
python.addEventListener('mouseover', ()=> { 
    if(html.onmousemove = true) {
        text.innerText = 'Python é uma linguagem de programação de alto nível, interpretada de script, imperativa, orientada a objetos, funcional, de tipagem dinâmica e forte.';
    }
})

// let mysql = document.getElementById('mysql');
// mysql.addEventListener('mouseover', ()=> { 
//     if(html.onmousemove = true) {
//         text.innerText = 'O MySQL é um sistema de gerenciamento de banco de dados, que utiliza a linguagem SQL como interface.';
//     }
// })

let reactjs = document.getElementById('reactjs');
reactjs.addEventListener('mouseover', ()=> { 
    if(html.onmousemove = true) {
        text.innerText = 'O React é uma biblioteca JavaScript de código aberto com foco em criar interfaces de usuário em páginas web.';
    }
})

// let vuejs = document.getElementById('vuejs');
// vuejs.addEventListener('mouseover', ()=> { 
//     if(html.onmousemove = true) {
//         text.innerText = 'Vue.js é um framework JavaScript de código-aberto, focado no desenvolvimento de interfaces de usuário e aplicativos de página única.';
//     }
// })

// let nextjs = document.getElementById('nextjs');
// nextjs.addEventListener('mouseover', ()=> { 
//     if(html.onmousemove = true) {
//         text.innerText = 'Next.js é uma estrutura da web de desenvolvimento front-end React de código aberto que permite funcionalidades como renderização do lado do servidor e geração de sites estáticos para aplicativos da web baseados em React.';
//     }
// })

// let angularjs = document.getElementById('angularjs');
// angularjs.addEventListener('mouseover', ()=> { 
//     if(html.onmousemove = true) {
//         text.innerText = 'AngularJS é um framework JavaScript código aberto, mantido pelo Google, que auxilia na execução de single-page applications.';
//     }
// })
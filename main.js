// Função para tocar o Play do seletor 
function tocaSom(seletorAudio) {
    const elemento = document.querySelector(seletorAudio);
    if (elemento && elemento.localName === 'audio') { // usando operador logico  ( And ) 
        elemento.play();
    } else { // usando a estrutura condicional simples if else
        console.log('Elemento não encontrado ou seletor inválido');
    }

}
// guardando em uma constante a class .tecla
const listaDeTeclas = document.querySelectorAll('.tecla');

// Laço de repetição (Para) 
for (var cont = 0; cont < listaDeTeclas.length; cont++) {
    const tecla = listaDeTeclas[cont];
    const instrumento = tecla.classList[1];
    const idAudio = `#som_${instrumento}`; // template string
    tecla.onclick = function () {
        tocaSom(idAudio)
    }
    tecla.onkeydown = function (evento) {
        if (evento.code === 'Space' || evento.code === 'Enter') { // estrutura condicionais simples com operadores logicos ( igual e Ou ). 
            tecla.classList.add('ativa');
        }

    }
    tecla.onkeyup = function () {
        tecla.classList.remove('ativa');
    }

}

/*
// Laço de repetição (Enquanto)
while (contador < listaDeTeclas.length) {

    const tecla = listaDeTeclas[contador];
    const instrumento = tecla.classList[1];    
    const idAudio = `#som_${instrumento}`; // template string

    tecla.onclick = function () {
        tocaSom(idAudio);
    };
    contador = contador + 1;

} 
*/

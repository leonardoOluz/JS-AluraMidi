function tocaSom(idElementoAudio) {

    document.querySelector(idElementoAudio).play();
}

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
        console.log(evento.code);
        if (evento.code === 'Space' || evento.code === 'Enter') {
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

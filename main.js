function tocaSom (selectorAudio){
  const elemento = document.querySelector(selectorAudio).play();

  if (elementos && elemento.localName === 'audio'){
      elemento.play();
   }
  else{ 
      //alert('Elemento não encontrado ou seletor inválido'):
      console.log(Elemento ou seletor não encontrado!)

  }
}

const listadeTeclas = document.querySelector('.tecla');


for (let contador = 0; contador < listadeTeclas.length; contador++ ){
  
    const tecla = listadeTeclas[contador];
    const instrumento = tecla.clasLista[1];
    const idAudio = '#som_${instrumento}';

    tecla.onclick = function(){
        tocaSom(idAudio);
    }
    
    tecla.onkeydown = function (evento) {
       
        if (evento.code === "Space" || evento.code === 'Enter') {
        tecla.clasList.add("ativa");
       }

    }

    tecla.onkeydown = function(){
        tecla.classList.remove("ativa");
    }
}

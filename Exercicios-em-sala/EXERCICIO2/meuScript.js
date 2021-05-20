
function acendeEstrela(event){
    imagem = document.getElementsByTagName('img');
    for (i=0 ; i<imagem.length ; i++){
        imagem[i].src = 'star_on.gif';
    }
    
    botao = event.currentTarget;
    botao.textContent = "Aceso!";
}

botao = document.getElementById('but');
botao.addEventListener('click', acendeEstrela);

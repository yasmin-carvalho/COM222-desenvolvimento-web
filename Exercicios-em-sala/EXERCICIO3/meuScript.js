function acendeEstrela(event){
    botao = event.currentTarget;
    if(botao.textContent == "Acender!"){
        imagem = document.getElementsByTagName('img');
        for (i=0 ; i<imagem.length ; i++){
            imagem[i].src = 'star_on.gif';
        }
        botao.textContent = "Apagar!";
    }
    else{
        imagem = document.getElementsByTagName('img');
        for (i=0 ; i<imagem.length ; i++){
            imagem[i].src = 'star_off.gif';
        }
        botao.textContent = "Acender!";
    }
}

botao = document.getElementById('but');
botao.addEventListener('click', acendeEstrela);

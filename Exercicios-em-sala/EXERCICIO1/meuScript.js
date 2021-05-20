function acendeEstrela(event){
    imagem = event.currentTarget;
    str1 = imagem.src;
    str2 = str1.substring(str1.length - 12, str1.length);
    if (str2 == 'star_off.gif'){
        imagem.src = 'star_on.gif';
        cont++;
        div = document.getElementById('divc');
        div.innerHTML = 'Contagem: ' + cont;
    }
}

var imagem = document.getElementsByTagName('img')
var cont = 0;

for (i = 0; i < imagem.length; i++){
    imagem[i].addEventListener('click', acendeEstrela)
}
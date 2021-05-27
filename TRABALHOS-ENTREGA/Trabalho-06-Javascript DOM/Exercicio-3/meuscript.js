function zoomIn(){
    const listaFoto = document.querySelectorAll('[imagem]')
    const imagem = document.querySelector('[imagem]')
    if (imagem.className == '')
        listaFoto.forEach(i => {
            i.classList.add('img150')
        })
    else if(imagem.className == 'img50')
        listaFoto.forEach(i => {
            i.classList.remove('img50')
        })
}

function zoomOut(){
    const listaFoto = document.querySelectorAll('[imagem]')
    const imagem = document.querySelector('[imagem]')
    if (imagem.className == '')
        listaFoto.forEach(i => {
            i.classList.add('img50')
        })
    else if(imagem.className == 'img150')
        listaFoto.forEach(i => {
            i.classList.remove('img150')
        })
}


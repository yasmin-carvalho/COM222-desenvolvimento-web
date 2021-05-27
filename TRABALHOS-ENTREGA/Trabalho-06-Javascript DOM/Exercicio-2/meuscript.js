function exibir() {
    const elementos = document.getElementsByTagName('input');
    const ol = document.createElement('ol');
    const li = []
    for (let i = 0; i<elementos.length; i++ ){
        li[i] = document.createElement('li')
        li[i].innerHTML = elementos[i].value
        elementos[i].value = ''
        ol.appendChild(li[i])
    }
    const div = document.getElementById('processo')
    div.appendChild(ol)

}
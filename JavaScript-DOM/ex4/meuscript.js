function aparecer() {
    var paragrafos = Array.prototype.slice.call(document.getElementsByClassName("oculto"));
    var i;
    for (i = 0; i < paragrafos.length; i++) {
        paragrafos[i].className = "";
    }
}

function definirCores() {
    var paragrafos = document.getElementsByTagName("p");
    var cores = ["blue", "red", "green", "yellow"];
    var i;
    for (i = 0; i < paragrafos.length; i++) {
        paragrafos[i].style.backgroundColor = cores[i];
    }
}

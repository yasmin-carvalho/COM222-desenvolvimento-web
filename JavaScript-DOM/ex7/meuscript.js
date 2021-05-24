function novoItem() {
    var campos = document.getElementsByTagName("input");
    var i;
    var novaLinha = document.createElement("tr");
    for (i = 0; i < campos.length; i++) {
        var novoDado = document.createElement("td");
        novoDado.innerHTML = campos[i].value;
        novaLinha.appendChild(novoDado);
    }
    var tabela = document.getElementById("tabela");
    tabela.appendChild(novaLinha);
}

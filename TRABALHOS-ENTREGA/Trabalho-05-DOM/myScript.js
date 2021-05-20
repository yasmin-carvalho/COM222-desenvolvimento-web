function validarIdade(textBox) {
    let boxValue = parseFloat(textBox.value);
    if (isNaN(boxValue) || (boxValue % 1 != 0)) {
        alert("Você deve digitar um número inteiro!");
        textBox.value = "";
        return false;
    }else if(boxValue < 10 || boxValue > 90) {
        alert("Você deve digitar um número inteiro entre 10 e 90!")
        textBox.value = "";
        return false;
    }
    return true;
}

function validarEmail(textBox) {
    let boxValue = textBox.value;
    if(boxValue.search("@") == -1) {
        alert("Você deve digitar um e-mail válido!")
        textBox.value = "";
        return false;
    }
    else 
        return true  
}

function validarCheckbox() {
    boxes = document.forms['boxForm'].linguagens.length
    var opcoes = 0
    for(let i = 0; i < boxes; i++)
    {
        if(document.forms["boxForm"].linguagens[i].checked)
            opcoes += 1
        if (opcoes > 3) {
            alert("Você deve selecionar no máximo 3 opções de linguagens!")
            document.forms['boxForm'].linguagens[i].checked = false
            return false
        }
    }
    return true
}


function frequenciaCheck() {
    const quant = document.getElementsByName("notify").length
    let notify = document.getElementsByName("notify")
    for (let i = 0; i < quant; i++){
        if(notify[i].checked){
            return notify[i].value
        }
    }
}

function entrar() {
    campoNome = document.getElementById("name")
    campoIdade = document.getElementById("ida")
    campoEmail = document.getElementById("email")

    if (campoNome.value != "" && campoIdade.value != "" && campoEmail.value != ""){
        alert("Formulário enviado com sucesso!")

        console.log("Nome: " + campoNome.value)
        console.log("Idade: " + campoIdade.value)
        console.log("Email: " + campoEmail.value)
        console.log("Frequência: " + frequenciaCheck())

        quantidade = document.getElementById("boxForm").length
        linguagem = document.forms["boxForm"].linguagens
        console.log("Linguagens Selecionadas: ")
        for (let i = 0; i < quantidade; i++){
            if(linguagem[i].checked){
                console.log(linguagem[i].value) 
            } 
        }
    }
    else 
        alert("Você deve preencher todos os campos!")
}
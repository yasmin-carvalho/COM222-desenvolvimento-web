/////////////////////////////////////////////////////////////////////
// Esta biblioteca contém funções para validar o conteúdo de uma
// caixa de texto 
/////////////////////////////////////////////////////////////////////      

function VerifyNum(textBox)
// Assumes: textBox is a text box in the page
// Results: alert if textBox does not contain a number
{
    var boxValue = parseFloat(textBox.value);
    if ( isNaN(boxValue) ) {
        alert("Você deve digitar um valor numérico!");
        textBox.value = "";
		return false;
    }
	return true;
}

function VerifyNumInRange(textBox, low, high)     
// Assumes: textBox is a text box in the page, low <= high     
// Results: warns if box contents is not a number in range low..high     
{         
    var boxValue = parseFloat(textBox.value);    
    if ( isNaN(boxValue) || (boxValue < low) || (boxValue > high)) { 
        alert("Você deve digitar um número no intervalo [" +  
              low + ".." + high + "]."); 
        textBox.value = "";
		return false;
    }     
	return true;
}      

function VerifyInt(textBox)
// Assumes: textBox is a text box in the page
// Results: alert if textBox does not contain an integer
{     
    var boxValue = parseFloat(textBox.value);     
    if ( isNaN(boxValue) || (boxValue % 1 != 0) ) {
        alert("Você deve digitar um número inteiro!");    
        textBox.value = "";
		return false;
    }     
	return true;
}      

function VerifyIntInRange(textBox, low, high)
// Assumes: textBox is a text box, low <= high
// Results: alert if textBox does not contain an integer in range
{         
    var boxValue = parseFloat(textBox.value);      
    if ( isNaN(boxValue) || (boxValue % 1 != 0) || 
         (boxValue < low) || (boxValue > high)) {        
        alert("Você deve digitar um número inteiro no intervalo [" + low + ".." + high + "].");
        textBox.value = "";
		return false;
    }     
	return true;
}      

function VerifyOneOf(textBox, options)
// Assumes: textBox is a text box, options is a list
// Results: alert if textBox does not contain one of options
{   
    for (var i = 0; i < options.length; i++) {        
        if (textBox.value == options[i]) { 
            return true;     
        }     
    }              
    alert("Você deve digitar uma das seguintes opções: " + options); 
    textBox.value = "";
	return false; 
} 
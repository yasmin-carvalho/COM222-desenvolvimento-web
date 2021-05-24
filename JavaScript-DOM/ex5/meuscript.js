function aparecer(){
    var paragrafos = document.getElementsByTagName("p");  
    var i;
    for (i=0; i<paragrafos.length; i++){  
       paragrafos[i].classList.add(paragrafos[i].id);  
       paragrafos[i].classList.remove("c");
    }
 }
 
function recuperarPs() {
   var paragrafos = document.getElementsByTagName("p");
   var i;
   for (i = 0; i < paragrafos.length; i++) {
      alert(paragrafos[i].innerHTML);
   }
}

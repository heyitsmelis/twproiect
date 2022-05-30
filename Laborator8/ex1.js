window.onload = function()
 {   var culori = [];
     for(var i=0; i<10; i++)
     {
         var buton = document.createElement("button");
         buton.innerHTML = i;
         buton.classList.add("copil","cifra"+i);
         document.body.appendChild(buton);
         culori.push(getComputedStyle(buton).backgroundColor);
     }
  var butoane = document.querySelectorAll("button")
  window.onkeydown = function(b)
  {
    butoane[parseInt(b.key)].style.backgroundColor = "black";
  }    
  window.onkeyup = function(b)
  {
      butoane[parseInt(b.key)].style.backgroundColor = culori[parseInt(b.key)];
  }
 }

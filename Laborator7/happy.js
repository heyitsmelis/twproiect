window.onkeydown = function()
  { window.onkeydown = null;
    for( i=0; i<20; i++)
      {
          var imagine = document.createElement("img");
            imagine.src = "sad.png";
          document.getElementById("container").appendChild(imagine);
      }
    var p = document.querySelector("#game>p");
    p.style.visibility = "visible";

  }
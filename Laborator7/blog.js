window.onload = function()
    {
      var buton = document.querySelector("button");
      buton.onclick = postare_noua;
    }

function postare_noua()
    {
       var input = document.getElementById("titlu");
       var continut = document.getElementById("post");
       var postari = document.getElementById("postari");
       var postare = document.createElement("article");
       postari.appendChild(postare);
       postare.className = "post";
       var titlu = document.createElement("h3");
       titlu.innerHTML = "Titlu:" + " " + input.value;
       postare.appendChild(titlu);
       var continut1 = document.createElement("p");
       continut1.innerHTML = "Postare:" +" " + continut.value;
       postare.appendChild(continut1);
       postare.ondblclick = function()
        {
           postari.removeChild(postare);
        }
    }
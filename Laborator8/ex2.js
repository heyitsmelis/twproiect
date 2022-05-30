window.addEventListener('click', event => {
    
    if(event.target.tagName=='DIV'){
        return;
    }
    let animat=document.createElement("div");
    animat.style.animationName=(getAnimationRandom());
    let body=document.querySelector("body");
    animat.classList.add("animat")
    body.appendChild(animat);
    let width=parseInt(getComputedStyle(animat).width);
    let height=parseInt(getComputedStyle(animat).height);
    //alert(event.x+" "+event.clientX+" "+event.pageX+" "+event.screenX);
    animat.style.position='absolute';
    animat.style.left=(event.x-width/2)+"px";
    animat.style.top=(event.y-height/2)+"px";
});

function getAnimationRandom(){
    let i=Math.floor(Math.random()*2);
    if(i==1)
        return "miscare2";
    else
        return "miscare1";
}
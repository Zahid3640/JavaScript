var id =setTimeout(anim,7000);
function anim(){
    var target=document.getElementById("set");
    target.style.width="500px"
}
function stopanimation(){
    clearTimeout(id)
}
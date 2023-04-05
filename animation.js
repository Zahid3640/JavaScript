// set interval
// use to set animation  
var a=0;
 var id=setInterval(anim,100)
function anim(){
    a=a+10;
    if(a==200)
    {
          clearInterval(id);     //clearinterval kahtam krta h animation ko
    }
    else{
        var target=document.getElementById("set");
        target.style.marginLeft=a + "px";
    }
    
}

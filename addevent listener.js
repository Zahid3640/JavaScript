//using click ,function and usecapture
document.querySelector("#inner").addEventListener('click',function(){
   alert('inner div')
},true);
/*document.querySelector("#outer").addEventListener('click',function(){
    alert('outer div')

},true);*/
document.getElementById("inner").addEventListener('click',xyz);
function xyz(){
  document.getElementById("innner").removeEventListener('click',function)
}
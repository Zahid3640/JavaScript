var target=document.getElementById("list").childNodes[1];
var copye=target.cloneNode(true) ;          // false only contain html  but  true contain  both html and text
document.getElementById("list1").appendChild(copye)
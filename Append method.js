//var newtag=document.createElement("p");
// console.log(newtag);

 //var createtextnode=document.createTextNode("this is new text");
// console.log(createtextnode);
 

// append at last
 //newtag.appendChild(createtextnode);
//document.getElementById("test").appendChild(newtag);
// console.log( newtag);


// // insert before
// var target=document.getElementById("test");
// target.insertBefore(newtag,target.childNodes[0]);

// insert adjacent

// var newtag=document.createElement("p");
//  var createtextnode=document.createTextNode("this is new heading");
//  newtag.appendChild(createtextnode);
//  var target=document.getElementById("test");
//  target.insertAdjacentElement("beforebegin",newtag);
//target.insertAdjacentElement("afterbegin",newtag);
//target.insertAdjacentElement("beforeend",newtag);
//target.insertAdjacentElement("afterend",newtag);

//adjecent html

// var target=document.getElementById("test");
// var newtag="<h2>this is heading</h2>";

// target.insertAdjacentHTML ("afterend",newtag);
//target.insertAdjacentHTML ("beforeend",newtag);


// text adajacent
var target=document.getElementById("test");
var newtag="this is heading"
target.insertAdjacentText("beforeend",newtag);;



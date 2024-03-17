// let ggl =document.getElementById("google")
// let fb =document.getElementById("facebook")
// let li =document.getElementById("linkedin")


// ggl.href = "https://www.wikipedia.org"
// fb.href = "https://www.youtube.com"
// li.href = "https://www.twitter.com"


// source changing

let all_images = document.getElementsByTagName("img");

// all_images[0].src = "https://source.unsplash.com/random/200x200";
// all_images[1].src = "https://source.unsplash.com/random/205x200";
// all_images[2].src = "https://source.unsplash.com/random/400x200";

// different attribute changes by targeting 

// all_images[0].alt= "aa changed";

// all_images[0].width=700;

// all_images[1].height=700;

//  setting up attribute in js
// all_images[0].setAttribute("id", "first_image");
// let first_image = document.getElementById("first_image");

// // changing src without targeting index 
// first_image.src = "https://s21.q4cdn.com/399680738/files/design/2022/01/Meta_lockup_positive-primary_RGB-(1).jpg";


// changing the color by simply clicking on buttion

// let bt1=document.getElementById("btn");

// bt1.addEventListener("click", function(){
//     document.body.style.backgroundColor= "green";

// })


// let bt1=document.getElementById("btn");

// bt1.addEventListener("mouseover", function(){
// document.body.style.backgroundColor = "green";

// })

// bt1.addEventListener("mouseover", function(){
//     document.write("Hello WAQAS!");    
//     document.body.style.backgroundColor = "green";

// })

// bt1.addEventListener("mouseout", function(){
//     document.body.style.backgroundColor = "green";

// })

// bt1.addEventListener("mousedown", function(){
//     document.body.style.backgroundColor = "green";

// })

// bt1.addEventListener("mouseup", function(){
//     document.body.style.backgroundColor = "green";

// })

// bt1.addEventListener("dblclick", function(){
    
//     document.body.style.backgroundColor = "green";

// })


// bt1.addEventListener("mouseover", function(){

//     bt1.style.backgroundColor= "blue";
//     bt1.style.color= "white";


// });


// bt1.addEventListener("mouseenter", function(){

//     bt1.style.backgroundColor= "blue";
//     bt1.style.color= "white";


// });

// bt1.addEventListener("mouseleave", function(){

//     bt1.style.backgroundColor= "skyblue";
//     bt1.style.color= "red";


// });

// Creating element into javascript ..

let new_div = document.createElement("div");
new_div.innerHTML = "<h1> This is a div of Mine </h1>";
new_div.style.background = "SkyBlue";
new_div.style.width = "250px";
new_div.style.height = "250px";
new_div.style.padding = "20px";

document.body.appendChild(new_div);

let new_para = document.createElement("p");
new_para.innerHTML = "This is a My paragraph";
new_para.style.color = "red";
let bt1= document.createElement("button");
bt1.innerHTML = "Buttton";
document.body.appendChild(bt1);


bt1.addEventListener("click" , function() {
    new_div.appendChild(new_para);
});
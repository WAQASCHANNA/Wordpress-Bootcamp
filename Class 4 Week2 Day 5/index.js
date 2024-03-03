// let a1= document.getElementById("myheading");
// a1.innerText = "This is Editted into JavaScript";

// a1.innerHTML= "<h3>This is Editted into HTML</h3>";

// a1.style.color="red";
// a1.style.backgroundColor="skyblue";
// a1.style.fontSize="30px";
// a1.style.border="15px solid"
// a1.style.padding="10px";
// a1.style.margin="20px";

// let testing = document.getElementsByClassName("Testing");
// class1[0].innerText="Text of first h2 has changed";
// class1[1].innerText="Text of second h2 has changed";


// let a1 = testing.length;

// for(let i=0; i<=a1; i++) {
//     testing[i].style.color= "red";
//     testing[i].style.backgroundColor="skyblue";
//     testing[i].style.fontSize= "30px";
//     testing[i].style.border= "2px solid";
//     testing[i].style.padding= "10px";
//     testing[i].style.margin= "20px";
// }

// let para= document.getElementsByTagName("p");
// para[0].innerHTML= "<h1>This headingn is changed</h1>";

// Array.from(para).forEach (function(p){
//     p.style.color= "red";
//     p.style.backgroundColor= "skyblue";
//     p.style.fontSize= "30px";
//     p.style.border= "2px solid";
//     p.style.padding= "10px";
//     p.style.margin= "20px";
// });

// let para1=document.querySelector(".class1");
// para1.style.color="Red"

let mydiv = document.querySelectorAll(".class1 h1, p , a" );

mydiv.forEach(function(div){
  if (div.tagName ==="H1"){
    div.style.color= "white";
    div.style.backgroundColor= "red";
  };
  
  if (div.tagName ==="P"){
        div.style.color= "white";
        div.style.backgroundColor= "green";
  };
  if (div.tagName ==="A"){
        div.style.color= "white";
        div.style.backgroundColor= "blue";
  };

});


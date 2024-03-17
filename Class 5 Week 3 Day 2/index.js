
// >>> One time execution function

// setTimeout(myfunction, 5000 );

// function myfunction(){
   
//     document.body.style.backgroundColor = "skyblue";

// }


// >>> COnttinuous output after 5 sec
// setInterval(secondfunction, 5000 )

// function secondfunction(){
   
//    alert("Hell Waqas");

// }


// let mainimage = document.getElementById("sliderimage");
// let otherimage = ['apple.jpg' , 'IBM.jpg' , 'microsoft.jpg'];
// let index = [0];


// function myImages(){
//     mainimage.src = otherimage[index];
//     index= (index + 1) % otherimage.length;  
// }

// setInterval(myImages, 3000);    


let name = window.prompt("Enter your name:");
let designation = window.prompt("Enter your designation");

if ( designation === "Engineer"){
    window.location.href = "http://www.google.com";
}


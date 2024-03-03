for(let i=0; i<=10; i++){
    console.log("Hello Wrld!")
}

let k=0;
while(k<10){
    console.log("Hello Wrld!")
    k++
}

j=0;

do{
    console.log("Hello Wrld!")
    j++
}while(j<10)

// Reverse order loop
for(let i=10; i>=0; i--){
    console.log(i)
}

// Fucntions

function sayHello(){
    console.log("Hello Wrld!")
}
sayHello();
sayHello();
sayHello();

function add_numbers(){
    let num1=10;
    let num2=100;
    return num1+num2;
}

add_numbers();

// to show result
alert(add_numbers());

//  to print on document
document.write(add_numbers());

// to add somthing in your previous function result 
let output= add_numbers();
let result= output+200;

// to show result
alert(result);
document.write(result);   

function personalinfo(name, age, cnic){
    
    // alert("Hello your name is:" + name + "Your age is :" + age + "your CNIC is" + cnic);
    
    // //Another method to define alert by using backstring button in keyboard "~ `".

    // alert(`Hello your name is ${name} Your age is ${age} your CNIC is ${cnic}`);
    alert(`Hello your name is ${name}`);
    alert(`Your age is ${age}`);
    alert( `your CNIC is ${cnic}`);
        

}

personalinfo("WAQAS", 31 , 3334122);
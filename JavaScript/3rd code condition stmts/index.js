console.log("Hello I am conditional tutorial")

let age=45;
let grace=2;

console.log(age+grace);
console.log(age-grace);
console.log(age*grace);
console.log(age/grace);
console.log(age**grace);  //this is exponential means give ang power grace
console.log(age%grace);   //gives reminder

if((age-grace)==18){
    console.log("You can try");
}

else{
    console.log("You cannot try");
}

// === it comapares value and data type if both are equal then only it tells that they are equal

//!== same as above  value not equal or not equal data type

// we have else if also same as cpp

a=6;
b=8;
let c=a>b ? (a-b):(b-a);
console.log(c);

//its ternary operator means its like if(a>b) c=a-b else c=b-a
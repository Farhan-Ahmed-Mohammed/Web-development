console.log("Hey is this is 55th video")

let a=5;
let b=6;
let c="harry"; //here no need to mention the type it will auto matically under stand that as we wrote this in double queotes that this is a string

console.log(a+b+8);
console.log(typeof a,typeof b,typeof c)

//let is local but var is gloabal better to use let then var

//const a1=6; // the value will not change it is constant
//a1=a1+1; //not allowed  bcoz a1 is const
{
    let a=66;
    console.log(a); //here a value is 66 but if we go out of this block its value will be the global a which we declared i.e 5 let is block scope but with var as its global the value changes to 66 even after this block
    // var a=66;
}

//premitive data types
let x="Farhan";
let y=22;
let z=3.55;
const p=true;
let q=undefined;
let r=null;

let o={
    "name": "Farhan",
    "job role": 5600,
    "is_handsome": true
}

console.log(o);
o.salary="100cr" // to add smthing to the object o
console.log(o);
o.salary="500cr"
console.log(o); //here salary is updates to 500

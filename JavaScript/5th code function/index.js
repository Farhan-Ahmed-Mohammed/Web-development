function nice(name){
    console.log("Hey " +name+ " you are nice")
    console.log("Hey " +name+ " you are good")
    console.log("Hey " +name+ " you are better")
    console.log("Hey " +name+ " you are best")

}

function sum(a,b,c=3){  // we want to take c as default value
   // console.log(a+b)
   return a+b+c
}

// console.log("Farhan is ncie");
// console.log("Farhan is good");
// console.log("Farhan is better");
// console.log("Farhan is best");

nice("Farhan")  // we have to do write repeated code we use fiunction for code reusability

nice("Furqan")  //function cal or function invocation

result=sum(3,5)
result1=sum(6,8,1) // if we pass c here functions takes that c value

console.log("The sum of these numbers is : ", result)
console.log("The sum of these numbers is : ", result1)

const func1=(x)=>{
    console.log("I am an arrow function",x)
}

func1(34);  //here func1 is variable and also function
func1(66);
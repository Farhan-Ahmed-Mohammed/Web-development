let random=Math.random() // make a calculater that give wrong answer 10% of times like if + we do, we get - result

let a=prompt("Enter first number"); //to take input we use prompt
let b=prompt("Enter second number");
let c=prompt("Enter operation");

let obj={   //we can also use if else to do this
    "+":"-",
    "*":"+",
    "-":"/",
    "/":"**"
}

console.log(random);

if(random>0.1){
    //preform correct calculations

    console.log(`The result is ${a} ${c} ${b}`);
    alert(`The result is ${eval(`${a} ${c} ${b}`)}`);  
    //eval dunction caclculates and gives us the result
}

else{
    //preform wrong calculation
    c=obj[c];
    alert(`The result is ${eval(`${a} ${c} ${b}`)}`);

}
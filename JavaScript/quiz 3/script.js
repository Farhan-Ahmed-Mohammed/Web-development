let a=6

function factorial(number){
    let arr=Array.from(Array(number+1).keys()) //gives number from 0 to number-1 or if we use number+1 if gives till number
    console.log(arr.slice(1,)) //slice means start form index 1 not 0 as we dont want to multiply with 0
    let c=arr.slice(1,).reduce((a,b)=>{
        return a*b;
    })
  console.log(c)
}

factorial(a)
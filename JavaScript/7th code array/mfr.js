let arr=[1,2,9,4,5]
// let newArr=[]
// for(let i=0;i<arr.length;i++)  this is long so we use map
// {
//     const element=arr[i];
//     newArr.push(element**2);
// }

//mfr is map,filter,reduce

let newArr=arr.map((e)=>{  //this is short cut instead of above process
    return e**2;
})

console.log(newArr);  // now we make a new array from exisitng array

const greaterThanSeven=(e)=>{
    if(e>7){
        return true;
    }
    return false;
}
console.log(arr.filter(greaterThanSeven))   //it prints element only grater than 7 this is use of filter

let arr2=[1,2,3,3,4,5];

const red=(a,b)=>{
    return a*b;
}

console.log(arr2.reduce(red)); // it multiple all the elements and return the result as array in reduced format bco only one lement will be ther in now in the arrray

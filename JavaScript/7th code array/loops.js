let a=[1,93,5,6,88];  //printintg array with different types of arrays

// for(let i=0;i<a.length;i++)
// {
//     const element=a[i];
//     console.log(element);
// }

// a.forEach((value,i,arr)=>{
//     console.log(value,i,arr) // it prints value and at what index it is and the array
// })

let obj={
    a:1,
    b:2,
    c:3
}

for(const key in obj){
    if(Object.hasOwnProperty.call(obj,key)){
        const element=obj[key];
        console.log(key,element); //it gievs key and its element
    }
}

for(const value of a){
    console.log(value);   //here and in for loop in place of value we can write i or iterator any thing
}
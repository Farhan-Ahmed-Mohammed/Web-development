async function sleep(){
    return new Promise((resolve, reject)=>{
        setTimeout(()=>{
            resolve(45)
        }, 1000);
    })
}

function sum(a,b,c){
    return a+b+c;
}

(async function main()
{
    console.log(a1);
    // let a=await sleep();
    // console.log(a);  //here we get error as we are using this 2 times so to avoid this we will is IIFE (Immediate invoke function Expression) i.e we make a async function named as main
    // let b=await sleep();
    // console.log(b);

     let [x,y]=[1,5]//let x,y=[1,5] //here we get x as undefine and y as [1,5] to avoid this we should write x and y also in array this conceot is called as destruction
    console.log(x,y);

    let [p,q,...rest]=[1,4,2,5,6,7,8]; //here we get p in 1 and q in 4 and remaninig in rest 
    console.log(p,q,rest);

    //we can also apply destructor to objects also
    let obj={
        a:1,
        b:2,
        c:3
    }

    let {a,b}=obj; //when we hav emany varaibles in object and we want only few of them then we will do like this 
    console.log(a,b);

    let arr=[1,4,6]
    console.log(sum(arr[0],arr[1],arr[2]))
    console.log(sum(...arr)) // ... is spread operator here we  here no need to write all the values of arr we can just use arr

    var a1=6; //if we use var a1 then we can use at at the top also we can use it this is called as hosting but if we use only var we dont get error 

})() //this is also syntax for this 


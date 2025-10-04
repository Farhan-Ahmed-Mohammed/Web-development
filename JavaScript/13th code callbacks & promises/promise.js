console.log("This is a promise");

let prom1=new Promise((resolve, reject)=>{
    let a=Math.random();
    if(a>0.5){
        reject("No random number was not supporting you")
    }

    else{
         setTimeout(()=>{
        console.log("Yes I am done")
        resolve("farhan")
        },3000);

    }
   
})

let prom2=new Promise((resolve, reject)=>{
    let a=Math.random();
    if(a>0.5){
        reject("No random number was not supporting you 2")
    }

    else{
         setTimeout(()=>{
        console.log("Yes I am done")
        resolve("farhan 2")
        },1000);

    }
   
})

prom1.then((a)=>{
    console.log(a);
}).catch((err)=>{       //to handle error we use catch
    console.log(err);
})

let p3=Promise.all([prom1, prom2]) //when both the promises are resolved we cna also use allSettle then we will get the status and value of both it dont care that if the promise is resolved or rejected and promise.race which we get first that result is printed
p3.then((a)=>{
    console.log(a);
}).catch(err=>{
    console.log(err);
})
// async function getData() {  // we are making it as async function means it works on background and the other output is printed but if we want to wait the output after the getdata function is executed we can use  await but await should be inside another async fucntion so we used async main function this is used some times we have to wait to get data form server
//     return new Promise((resolve, reject) => {
//         setTimeout(() => {
//             resolve(455)
//         }, 3500)
//     })
// }

//IMP POINTS:
//await means wait till promise has settled
//Settle means resolve or reject
//resolve means promise has settled successfully
//reject means promise has not settled successfully

async function getData() {  
   let x= await fetch('https://jsonplaceholder.typicode.com/todos/1')
   let data=await x.json()  //json means like javascript object we get our data
      console.log(x)
      return 455
}

async function main() {

    console.log("Loading modules");

    console.log("Do smthng else");

    console.log("Load data");

    let data = await getData();  // this keeps pending till 3 seconds but b4 that the below commands are printed

    console.log(data)

    console.log("process data")

    console.log("task 2")
}

main()

//Example post method implementation
// async fucntion postData(url="",data={}){
//     const response=await fetch(url,{
//         method: "POST",
//         headers: {
//             "Content-Type": "application/json",
//         },
//         body: JSON.stringify(data),
//     });
//     return response.json();
// }

// postData("https://example.com/answer", {answer: 42 }).then((data) => {
//     console.log(data);
// })

// data.then((v)=>{ // but we wan to print this after the data is printed after 3 seconds these below are printed there is another method also

//     console.log(data)

//     console.log("process data")

//     console.log("task 2")

// })


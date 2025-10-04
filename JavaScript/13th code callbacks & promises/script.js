console.log("Farhan is a hacker")
console.log("Harry is a hecker")

setTimeout(() =>{   // due to asynchronization nature of java script this is printed at last as it is a Timeout funciton
    console.log("I am inside setTimout")
},2000);

console.log("The End");

const fn=() => {
  console.log("Nothing");
}


const callback=(arg,fn) => {
    console.log(arg);
    fn();
}


const loadScript= (src, callback) => {
    let sc=document.createElement("script");
    sc.src=src;
    sc.onload=callback("Farhan",fn);
  
}

loadScript("https://cdnjs.cloudflare.com/ajax/libs/prism/9000.0.1/prism.min.js", callback)



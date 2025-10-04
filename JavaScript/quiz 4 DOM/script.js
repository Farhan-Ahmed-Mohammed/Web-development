console.log("Script js initializing"); //jus tot show that we are in java script file
let boxes=document.getElementsByClassName("box");  // we are accessing the elemet with class name box


function getRandomColor(){
    let val1=Math.ceil(0+Math.random()*255);  // as we have colors from 0 to 255 only so we generate colors only from 0 to 255 and math.ceil to get interger by rounding up to next integer as Math.random() generates from 0 to 1 so we multiply  it by 255 to get the numbers between 0 to 255
    let val2=Math.ceil(0+Math.random()*255);
    let val3=Math.ceil(0+Math.random()*255);
    return `rgb(${val1}, ${val2}, ${val3})`  //this is similar to f string in python inside $ is the val1 which is randomly generated and this is not queotes its the symbol below esc
}

Array.from(boxes).forEach(e=>{
    e.style.backgroundColor=getRandomColor()
    e.style.color=getRandomColor()
})
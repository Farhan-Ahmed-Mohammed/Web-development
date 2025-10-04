console.log("Farhan")
// let box=document.getElementsByClassName("box")
// console.log(box)
// box[2].style.backgroundColor="red"  // now the third box bg color bcms red but with this whiech box is at 3rd  palce it get s red but if we add any other box at 3rd then it becomes red so if we want to target a box to be red then we give that box a id and use hte beow method

// document.getElementById("redbox").style.backgroundColor="red"  // here which element has redbox as its id then it only becomes red

document.querySelector(".box").style.backgroundColor = "green"

document.querySelectorAll(".box").forEach(e =>{
    e.style.backgroundColor = "green";
})
// now all the boxes become green if we jsut use SelectorAll only then they dont become green we hav to use it like this we can also use normal for loop 

console.log(document.getElementsByTagName("div"))

e=document.getElementsByTagName("div")
e[4].matches("box") // it this matches to the word box we get true else false

e[4].closest("box") //first checks closest match next it goes it its parent if not then its parent 

document.querySelector(".body").contains(".container")  //if it is present in this then we get true or else we get false

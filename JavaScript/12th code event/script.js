let button =document.getElementById("btn")

button.addEventListener("click", ()=>{ //when we click this change happens and also there are some others like dblclick means in place of click we wrote dblclick and when we do double click this change happens
    document.querySelector(".box").innerHTML="<b>Yayy you were clicked </b> Enjoy your click!"
})

button.addEventListener("contextmenu", ()=>{   // if we do right click on the button we ge this one alert 
    alert("Dont hack us by right click please")
})

document.addEventListener("keydown", (e)=>{   //we sholud press any key and it is shown in console its keyboad event above are the mouse events 
    console.log(e.key); // here only if we write e it prints every thing of e like key,code and if we write e.key then it prints only the key which we pressed
})
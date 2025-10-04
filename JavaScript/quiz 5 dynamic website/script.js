function createCard(title,cName,views,monthsOld,duration,thumbnail){
    let viewStr

    if(views<1000){
          viewStr=views;
    }

    else if(views>1000000){
         viewStr=views/1000000 + "M";
    }

    else{
        viewStr=views/1000 + "K";
    }
        
   
    let html=`<div class="card">
            <div class="image">
            <img src=${thumbnail}>
            <div class="capsule">${duration}</div>
            </div>
            <div class="text">
                <h1>${title}</h1>
                <p>${cName} . ${viewStr} views . ${monthsOld} months ago</p>
            </div>
        </div>`

    document.querySelector(".container").innerHTML=document.querySelector(".container").innerHTML+html
}

createCard("Introduction to backend | Sigma Web Dev video #2","CodeWithHarry",5600000,7,"31:22","https://i.ytimg.com/vi/kJEsTjH5mVg/hqdefault.jpg?sqp=-oaymwEmCKgBEF5IWvKriqkDGQgBFQAAiEIYAdgBAeIBCggYEAIYBjgBQAE=&rs=AOn4CLBYghRBiZcZs-xVJKq92lAM8h3BOg") //it dynamic as we can change the text in create card and a card will be created witht that change
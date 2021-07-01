let w = window.innerWidth;
let h = window.innerHeight;
let container = document.getElementById('column-container');

var workingWidth = 0.01 * w;

window.onload= function(){
    randomize();
}

function randomize(){
    clearContainer();

    for (var i = 0; i < 60; i++){
        let randomNumber = Math.floor(Math.random() * (500 - 50) + 10);
        var element = document.createElement("div");
        element.classList.add("lines");
        element.style.height = randomNumber + "px";
        element.style.width = Math.floor(0.1 * w) + "px";
        container.appendChild(element);
    }
}

function clearContainer(){
    container.innerHTML="";
}
let w = window.innerWidth;
let h = window.innerHeight;
let container = document.getElementById('column-container');

var workingWidth = 0.01 * w;

window.onload= function(){
    randomize();
}

function swap(a, b){
    var x = a.style.height;
    a.style.height = b.style.height;
    b.style.height = x;
}
function randomizeS(){
    if(document.getElementById("randomizeB").disabled){
        alert("Sort algorithm is running, please wait or refresh the page to terminate.")
    }else{
        randomize();
    }
}

function randomize(){
    clearContainer();

    for (var i = 0; i < 60; i++){
        let randomNumber = Math.floor(Math.random() * (400 - 50) + 10);
        var element = document.createElement("div");
        element.classList.add("lines");
        element.setAttribute("id", "bar" + i);
        element.style.height = randomNumber + "px";
        element.style.width = Math.floor(0.1 * w) + "px";
        container.appendChild(element);
    }
}

function clearContainer(){
    container.innerHTML="";
    document.getElementById("arraycount").innerHTML= 0;
    document.getElementById("comparisions").innerHTML= 0;
}


function disableContainer(){
    document.getElementById("randomizeB").disabled = true;
    document.getElementById("countingB").disabled = true;
    document.getElementById("heapB").disabled = true;
    document.getElementById("mergeB").disabled = true;
    document.getElementById("quickB").disabled = true;
    document.getElementById("insertionB").disabled = true;
    document.getElementById("selectionB").disabled = true;
    document.getElementById("bubbleB").disabled = true;
}

function enableContainer(){
    document.getElementById("randomizeB").disabled = false;
    document.getElementById("countingB").disabled = false;
    document.getElementById("heapB").disabled = false;
    document.getElementById("mergeB").disabled = false;
    document.getElementById("quickB").disabled = false;
    document.getElementById("insertionB").disabled = false;
    document.getElementById("selectionB").disabled = false;
    document.getElementById("bubbleB").disabled = false;
}

function updateAccessesAndComparisions(arrayAccess, comparisions){
    document.getElementById("arraycount").innerHTML=arrayAccess;
    document.getElementById("comparisions").innerHTML=comparisions;
}
let producing = () => new Promise(resolve => setTimeout(resolve, 100));



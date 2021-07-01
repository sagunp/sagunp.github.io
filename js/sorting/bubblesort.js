async function bubblesort(){
    let arr = 0; 
    let comp = 0;
    for (var i = 0; i < 59; i++){
        for(var j = 0; j < 59 - i; j++){
            let c = j + 1;

            let a = document.getElementById("bar" + j);
            let b = document.getElementById("bar" + c);

            a.style.background = "blue";
            b.style.background = "blue";

            if(parseInt(a.style.height) > parseInt(b.style.height)){
                await producing();
                swap(a, b);
            }

            arr +=2;
            comp +=1;
            updateAccessesAndComparisions(arr, comp);

            a.style.background = "black";
            b.style.background = "black";
        }
        let x = 60 - i - 1;
        document.getElementById("bar" + x).style.background = "rgba(238, 231, 231, 0.945)";
    }
    document.getElementById("bar0").style.background = "rgba(238, 231, 231, 0.945)";
}

async function runBubbleSort(){
    if(document.getElementById("bubbleB").disabled){
        alert("Bubble sort is running, please wait or refresh the page to terminate.")
    }else{
        disableContainer();
        await bubblesort();
        enableContainer();
    }
}

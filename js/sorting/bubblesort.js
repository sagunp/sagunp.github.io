async function bubblesort(){
    let arr = 0; 
    let comp = 0;
    let bar = document.querySelectorAll(".lines");

    for (var i = 0; i < 59; i++){
        for(var j = 0; j < 59 - i; j++){

            let a = bar[j];
            let b = bar[j + 1];

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
       bar[x].style.background = "rgba(238, 231, 231, 0.945)";
    }
    bar[0].style.background = "rgba(238, 231, 231, 0.945)";
}

async function runBubbleSort(){
    if(document.getElementById("randomizeB").disabled){
        alert("Sorting is running, please wait or refresh the page to terminate.")
    }else{
        disableContainer();
        await bubblesort();
        enableContainer();
    }
}

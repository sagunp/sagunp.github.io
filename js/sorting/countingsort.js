async function countingsort(){
    let bar = document.querySelectorAll(".lines");
    let counting = new Array(500).fill(0);

    let arrayAccess = 0;
    let comparisions = 0;
    
    for (let i = 0; i < bar.length; i++){

        await producing();
        bar[i].style.background = "blue";
        await producing();
        bar[i].style.background = "black";

        counting[parseInt(bar[i].style.height)] += 1;

        arrayAccess++;
        updateAccessesAndComparisions(arrayAccess, comparisions);
    }

    let index = 0;

    for(let j = 0; j < counting.length; j++){
        while(counting[j] > 0){
            await producing();
            bar[index].style.height = j + "px";
            await producing();  

            bar[index].style.background = "rgba(238, 231, 231, 0.945)";
            index++;
            counting[j]--;

            arrayAccess++;
            updateAccessesAndComparisions(arrayAccess, comparisions);
        }
    }
}

async function runCountingSort(){
    if(document.getElementById("randomizeB").disabled){
        alert("Sorting is running, please wait or refresh the page to terminate.")
    }else{
        disableContainer();
        await countingsort();
        enableContainer();
    }
}
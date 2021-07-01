async function selectionsort(){
    let bar = document.querySelectorAll(".lines");
    let arr = 0; 
    let comp = 0;

    for(var i = 0; i < 59; i++){
        let min_index = i;
        let position = bar[i];
        position.style.background="yellow";
        arr++;

        for(var j = i + 1; j < 60; j++){
            await producing();
            let iteratee = bar[j];
            iteratee.style.background = "blue";
            arr++;
            await producing();
            comp++;
            if(parseInt(iteratee.style.height) < parseInt(bar[min_index].style.height)){
                if (min_index != i){
                    bar[min_index].style.background="black";
                } 
                min_index = j;
                bar[j].style.background="red";
            }else{
                bar[j].style.background = "black";
            }
            updateAccessesAndComparisions(arr, comp);
        }
        await producing();
        swap(bar[i], bar[min_index]); 
        bar[min_index].style.background = "black";
        bar[i].style.background = "rgba(238, 231, 231, 0.945)";  
    }
    bar[59].style.background = "rgba(238, 231, 231, 0.945)";
}

async function runSelectionSort(){
    if(document.getElementById("randomizeB").disabled){
        alert("Sort is running, please wait or refresh the page to terminate.")
    }else{
        disableContainer();
        await selectionsort();
        enableContainer();
    }
}


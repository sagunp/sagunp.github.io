async function insertionsort(){
    let bar = document.querySelectorAll(".lines");
    let arr = 0; 
    let comp = 0;

    for (let i = 1; i < 60; i++){
        let bar_to_insert = bar[i];
        let key = bar_to_insert.style.height;
        arr++; 

        bar_to_insert.background = "blue";
        
        let j = i - 1;

        while (parseInt(j) >= 0 && (parseInt(bar[j].style.height) > parseInt(key))){
            arr += 3;
            comp++;
            updateAccessesAndComparisions(arr, comp);

            await producing();
            bar[j].style.background = "blue";
            bar[j+1].style.background = "black";
            bar[j + 1].style.height = bar[j].style.height; 
            j--;
        }

        bar[j + 1].style.height = key;
        arr++;
        updateAccessesAndComparisions(arr, comp);
        bar[j + 1].style.background = "green";
    }
    for(let x = 0; x < 60; x++){
        await producing();
        bar[x].style.background = "rgba(238, 231, 231, 0.945)";
    }
}


async function runInsertionSort(){
    if(document.getElementById("randomizeB").disabled){
        alert("Sort is running, please wait or refresh the page to terminate.")
    }else{
        disableContainer();
        await insertionsort();
        enableContainer();
    }
}

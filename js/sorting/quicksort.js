let quickarr = 0;
let quickcomp = 0;

async function partition (bar, left, right){
    let i = left - 1;
    bar[right].style.background = "red";

    await producing();
    await producing();
    await producing();
    
    for(let j = left; j < right; j++){
        bar[j].style.background = "blue";

        await producing();
        await producing();
        await producing();


        if(parseInt(bar[j].style.height) < parseInt(bar[right].style.height)){
            quickarr += 2;
            quickcomp++;
            updateAccessesAndComparisions(quickarr, quickcomp);

            await producing();
            await producing();
            await producing();
            await producing();

            i++;
            bar[i].style.background = "yellow";
            bar[j].style.background = "yellow";
            swap(bar[i], bar[j]);
            updateAccessesAndComparisions(quickarr, quickcomp);
            quickarr += 2;
        }
        bar[j].style.background = "black";
    }
    i++;
    await producing();
    await producing();
    await producing();

    swap(bar[i], bar[right]);
    bar[i].style.background = 'white';
    return i;
}

async function quicksortR(bar, left, right){
    if(left >= right){
        if(left < bar.length && left >= 0) bar[left].style.background = "white";
        if(right < bar.length && right >= 0) bar[right].style.background = "white";
        return;
    }
    quickarr += 2;
    quickcomp++;
    updateAccessesAndComparisions(quickarr, quickcomp);

    let partitionIndex = await partition(bar, left, right); 

    await producing();

    await quicksortR(bar, left, partitionIndex - 1);
    
    await producing();
    await producing();
    await producing();
    await producing();

    await  quicksortR(bar, partitionIndex + 1, right);
}

async function quicksort(){
    let bar = document.querySelectorAll(".lines");
    await quicksortR(bar, 0, bar.length - 1);
}


async function runQuickSort(){
    if(document.getElementById("randomizeB").disabled){
        alert("Sort is running, please wait or refresh the page to terminate.")
    }else{
        disableContainer();
        await quicksort();
        enableContainer();
    }
}
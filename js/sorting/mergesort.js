async function mergeHalves(bar, left, right){

    let mid = left + Math.floor((right - left)/2);

    const n1 = mid - left + 1;
    const n2 = right - mid;

    let leftArray = new Array(n1);
    let rightArray = new Array(n2);

    for(let i = 0; i < n1; i++){
        leftArray = bar[left + i].style.height;
    }
    
    for(let i = 0; i < n2; i++){
        rightArray = bar[mid + 1 + i].style.height;
    }

    let i = 0; 
    let j = 0;
    let index = left;

    while(i < n1 && j < n2){
        if(leftArray[i] <= rightArray[j]){
            bar[index].style.height = leftArray[i];
            i++;
        }else{
            bar[index].style.height = rightArray[j];
            j++;
        }
        index++;
    }
    while(i < n1){
        bar[index].style.height = leftArray[i];
        i++;
        index++;
    }
    while(j < n2){
        bar[index].style.height = rightArray[j];
        j++;
        index++;
    }
}

async function mergesortR(bar, left, right){
    if(left >= right){
        return;
    }
    let mid = left + Math.floor((right - left)/2);
    bar[mid].style.background = "red";
    await producing();

    await mergesortR(bar, left, mid);
    await mergesortR(bar, mid+1, right);
    await mergeHalves(bar, left, right);
}


async function mergesort(){
    let bar = document.querySelectorAll(".lines");
    await mergesortR(bar, 0, bar.length - 1);
}

async function runMergeSort(){
    if(document.getElementById("randomizeB").disabled){
        alert("Sort is running, please wait or refresh the page to terminate.")
    }else{
        disableContainer();
        await mergesort();
        enableContainer();
    }
}
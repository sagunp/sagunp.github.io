let heaparr = 0; 
let heapcomp = 0;

async function sortParentAndChild(bar, i, size){
    let parentIndex = i; 
    let leftChildIndex = i * 2 + 1;
    let rightChildIndex = i * 2 + 2;

    let maxIndex = parentIndex;

    bar[maxIndex].style.background = "red";
    
    if(leftChildIndex < size && bar[leftChildIndex].style.height > bar[maxIndex].style.height){
        maxIndex = leftChildIndex;
    }
    if(rightChildIndex < size && bar[rightChildIndex].style.height > bar[maxIndex].style.height){
        maxIndex = rightChildIndex;
    }
    bar[parentIndex].style.background = "black";

    bar[maxIndex].style.background = "red";

    await producing();

    heaparr += 2;
    heapcomp += 2;
    updateAccessesAndComparisions(heaparr, heapcomp);

    heaparr++;
    heapcomp += 2;
    updateAccessesAndComparisions(heaparr, heapcomp);

    if(maxIndex !== parentIndex){
        swap(bar[maxIndex], bar[parentIndex]);
        await sortParentAndChild(bar, maxIndex, size);
    }
}


async function heapsort(){
    let bar = document.querySelectorAll(".lines");

    let size = bar.length;
    let lastParentIndex = Math.floor(size/2) - 1;

    for(let i = lastParentIndex; i >= 0; i--){
        heaparr++;
        updateAccessesAndComparisions(heaparr, heapcomp);
        await sortParentAndChild(bar, i, size);
    }

    console.log(bar.length);

    for(let j = bar.length - 1; j >= 0; j--){
        heaparr += 2;
        updateAccessesAndComparisions(heaparr, heapcomp);
        swap(bar[0], bar[j]);
        await sortParentAndChild(bar, 0, j);
    }
}

async function runHeapSort(){
    if(document.getElementById("randomizeB").disabled){
        alert("Sorting is running, please wait or refresh the page to terminate.")
    }else{
        disableContainer();
        await heapsort();
        enableContainer();
    }
}

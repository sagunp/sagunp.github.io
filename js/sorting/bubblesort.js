async function bubblesort(){
    for (var i = 0; i < 59; i++){
        for(var j = 0; j < 59 - i; j++){
            let a = document.getElementById("bar" + j);
            let c = j + 1;
            let b = document.getElementById("bar" + c);
            a.style.background = "blue";
            b.style.background = "blue";
            
            if(parseInt(a.style.height) > parseInt(b.style.height)){
                await producing();
                swap(a, b);
            }
            a.style.background = "black";
            b.style.background = "black";
        }
        let x = 60 - i - 1;
        document.getElementById("bar" + x).style.background = "rgba(238, 231, 231, 0.945)";
    }
    document.getElementById("bar0").style.background = "rgba(238, 231, 231, 0.945)";
}
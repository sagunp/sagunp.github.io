body.directive("navBar", function(){
    return {
        templateUrl:'../js/directives/navbar.html'
    };
});

function togglebar(){
    let a = document.querySelectorAll(".d-md-block");
    console.log("check");

    for(let i = 0; i < a.length; i++){
      a[i].classList.toggle("d-none");
    }
  }
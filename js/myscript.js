// var page = document.querySelector("page")
// var navbar = document.getElementById("nav-bar");

function menuBtn(){
    document.getElementById("nav-list-container").classList.toggle("show");
}

(function ($){
window.onscroll = function(){
    //do work
        var scrollTop = window.pageYOffset;
        console.log(scrollTop);
        var elementNavbar = document.getElementById("nav-bar");
        var elementBody = document.getElementById("body");
        var elementNavBtn = document.getElementById("toggle-icon");
        // console.log(elementNavbar)
        if (scrollTop >= 147) {
            elementNavbar.classList.add("fix-navbar")
            elementBody.classList.add("noPadBody")
            console.log("Activated")
        }
        else {
            elementNavbar.classList.remove("fix-navbar");
            elementBody.classList.remove("noPadBody")
            console.log("Deactivated")
        }

        if (scrollTop >= 570){
            elementNavBtn.classList.add("navBtnGray")
            elementNavbar.classList.add("white-navbar")
        }
        else{
            elementNavBtn.classList.remove("navBtnGray")
            elementNavbar.classList.remove("white-navbar")
          }
   
  };
}());
// document.getElementById("nav-bar").addEventListener("click", () =>{
//     console.log("Scroll")
// })
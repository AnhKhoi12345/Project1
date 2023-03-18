// var page = document.querySelector("page")
// var navbar = document.getElementById("nav-bar");

function menuBtn(){
    document.getElementById("nav-list-container").classList.toggle("show");
}
function getRandomInt(max) {
    return Math.floor(Math.random() * max);
}
(function ($){
window.onload = (event) => {
    var pic = getRandomInt(5) + 1
    console.log(pic);
    var elementHeaderContainer = document.getElementById("header-container");
    if(pic === 2){
        elementHeaderContainer.classList.add("header-container-bg2");
        console.log("header img change to 2");
    }
    else if(pic === 3){
        elementHeaderContainer.classList.add("header-container-bg3");
        console.log("header img change to 3");
    }
    else if(pic === 4){
        elementHeaderContainer.classList.add("header-container-bg4");
        console.log("header img change to 4");
    }
    else if(pic === 2){
        elementHeaderContainer.classList.add("header-container-bg5");
        console.log("header img change to 5");
    }
    else{
        console.log("header img not change");
    }
    };    
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
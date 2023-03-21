// var page = document.querySelector("page")
// var navbar = document.getElementById("nav-bar");
var nova = document.getElementById("novanoid");
var mini = document.getElementById("minimalism");
var crea = document.getElementById("creative");

function menuBtn(){
    var navtoggle= document.getElementById("nav-list-container").classList;
    if(navtoggle[1] === "show"){
        navtoggle.add("hide");
        navtoggle.toggle("show");
        console.log(navtoggle[0] +" if");
        console.log(navtoggle[1] +" if");
        // navtoggle.remove("hide");
    }
    else if(navtoggle[1] !=="show"){
        navtoggle.remove("hide");
        navtoggle.toggle("show");
        console.log(navtoggle[0] +" else if");
        console.log(navtoggle[1] +" else if");
    }
    else{
        // navtoggle.remove("hide")
        // navtoggle.toggle("show");
        console.log("error");
    }
}

function getRandomInt(max) {
    return Math.floor(Math.random() * max);
}

function dotOne(){
    var nova = document.getElementById("novanoid");
var mini = document.getElementById("minimalism");
var crea = document.getElementById("creative");
    nova.classList.add("h1-show");
    mini.classList.remove("h1-show");
    crea.classList.remove("h1-show");
    document.getElementById("dot-1").classList.add("dot-active");
    document.getElementById("dot-2").classList.remove("dot-active");
    document.getElementById("dot-3").classList.remove("dot-active");
}

function dotTwo(){
    var nova = document.getElementById("novanoid");
var mini = document.getElementById("minimalism");
var crea = document.getElementById("creative");
nova.classList.remove("h1-show");
mini.classList.add("h1-show");
crea.classList.remove("h1-show");
document.getElementById("dot-1").classList.remove("dot-active");
document.getElementById("dot-2").classList.add("dot-active");
document.getElementById("dot-3").classList.remove("dot-active");
}

function dotThree(){
    var nova = document.getElementById("novanoid");
var mini = document.getElementById("minimalism");
var crea = document.getElementById("creative");
nova.classList.remove("h1-show");
mini.classList.remove("h1-show");
crea.classList.add("h1-show");
document.getElementById("dot-1").classList.remove("dot-active");
document.getElementById("dot-2").classList.remove("dot-active");
document.getElementById("dot-3").classList.add("dot-active");
}

let slideIndex = 0;
function titleAutoChange(){
    if(slideIndex==0){
        dotOne();
        slideIndex++;
        console.log("titleAuto 0");
    }
    else if(slideIndex==1){
        dotTwo();
        slideIndex++;
        console.log("titleAuto 1");
    }
    else if(slideIndex==2){
        dotThree();
        slideIndex++;
        console.log("titleAuto 2");
    }
    else{
        console.log("titleAuto error");
    }
    
    if (slideIndex ==3) {slideIndex = 0}    
    setTimeout(titleAutoChange, 5000);
}
// titleAutoChange();
(function ($){
window.onload = (event) => {
    var nova = document.getElementById("novanoid");
    nova.classList.add("h1-show");
    document.getElementById("dot-1").classList.add("dot-active");

    titleAutoChange();


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
            console.log("navbar stick Activated")
        }
        else {
            elementNavbar.classList.remove("fix-navbar");
            elementBody.classList.remove("noPadBody")
            console.log("navbar stick Deactivated")
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
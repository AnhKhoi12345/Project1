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
    nova.classList.add("display-show");
    mini.classList.remove("display-show");
    crea.classList.remove("display-show");
    document.getElementById("dot-1").classList.add("dot-active");
    document.getElementById("dot-2").classList.remove("dot-active");
    document.getElementById("dot-3").classList.remove("dot-active");
}

function dotTwo(){
    var nova = document.getElementById("novanoid");
var mini = document.getElementById("minimalism");
var crea = document.getElementById("creative");
nova.classList.remove("display-show");
mini.classList.add("display-show");
crea.classList.remove("display-show");
document.getElementById("dot-1").classList.remove("dot-active");
document.getElementById("dot-2").classList.add("dot-active");
document.getElementById("dot-3").classList.remove("dot-active");
}

function dotThree(){
    var nova = document.getElementById("novanoid");
var mini = document.getElementById("minimalism");
var crea = document.getElementById("creative");
nova.classList.remove("display-show");
mini.classList.remove("display-show");
crea.classList.add("display-show");
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

var work1 = document.getElementById("work-item-1").classList
var work2 = document.getElementById("work-item-2").classList
var work3 = document.getElementById("work-item-3").classList
var work4 = document.getElementById("work-item-4").classList
var work5 = document.getElementById("work-item-5").classList
var work6 = document.getElementById("work-item-6").classList
var work7 = document.getElementById("work-item-7").classList
var work8 = document.getElementById("work-item-8").classList
var work9 = document.getElementById("work-item-9").classList

var btnAll = document.getElementById("btn-all").classList
var btnTravel = document.getElementById("btn-travel").classList
var btnRoad = document.getElementById("btn-road").classList
var btnMountains = document.getElementById("btn-mountains").classList
var btnNature = document.getElementById("btn-nature").classList

function allBtn(){
    work1.remove("work-image-filter")
    work2.remove("work-image-filter")
    work3.remove("work-image-filter")
    work4.remove("work-image-filter")
    work5.remove("work-image-filter")
    work6.remove("work-image-filter")
    work7.remove("work-image-filter")
    work8.remove("work-image-filter")
    work9.remove("work-image-filter")

    work1.add("fade");
    work2.add("fade");
    work3.add("fade");
    work4.add("fade");
    work5.add("fade");
    work6.add("fade");
    work7.add("fade");
    work8.add("fade");
    work9.add("fade");

    btnAll.add("work-button-active")
    btnTravel.remove("work-button-active")
    btnRoad.remove("work-button-active")
    btnMountains.remove("work-button-active")
    btnNature.remove("work-button-active")
}

function travelBtn(){
    work1.remove("work-image-filter")
    work2.add("work-image-filter")
    work3.remove("work-image-filter")
    work4.add("work-image-filter")
    work5.remove("work-image-filter")
    work6.add("work-image-filter")
    work7.add("work-image-filter")
    work8.add("work-image-filter")
    work9.remove("work-image-filter")

    work1.add("fade");
    work2.remove("fade");
    work3.add("fade");
    work4.remove("fade");
    work5.add("fade");
    work6.remove("fade");
    work7.remove("fade");
    work8.remove("fade");
    work9.add("fade");

    btnAll.remove("work-button-active")
    btnTravel.add("work-button-active")
    btnRoad.remove("work-button-active")
    btnMountains.remove("work-button-active")
    btnNature.remove("work-button-active")
}
function roadlBtn(){
    work1.add("work-image-filter")
    work2.remove("work-image-filter")
    work3.add("work-image-filter")
    work4.remove("work-image-filter")
    work5.add("work-image-filter")
    work6.add("work-image-filter")
    work7.remove("work-image-filter")
    work8.add("work-image-filter")
    work9.remove("work-image-filter")

    work1.remove("fade");
    work2.add("fade");
    work3.remove("fade");
    work4.add("fade");
    work5.remove("fade");
    work6.remove("fade");
    work7.add("fade");
    work8.remove("fade");
    work9.add("fade");

    btnAll.remove("work-button-active")
    btnTravel.remove("work-button-active")
    btnRoad.add("work-button-active")
    btnMountains.remove("work-button-active")
    btnNature.remove("work-button-active")
}

function mountainsBtn(){
    work1.add("work-image-filter")
    work2.remove("work-image-filter")
    work3.remove("work-image-filter")
    work4.add("work-image-filter")
    work5.remove("work-image-filter")
    work6.remove("work-image-filter")
    work7.add("work-image-filter")
    work8.remove("work-image-filter")
    work9.add("work-image-filter")

    work1.remove("fade");
    work2.add("fade");
    work3.add("fade");
    work4.remove("fade");
    work5.add("fade");
    work6.add("fade");
    work7.remove("fade");
    work8.add("fade");
    work9.remove("fade");

    btnAll.remove("work-button-active")
    btnTravel.remove("work-button-active")
    btnRoad.remove("work-button-active")
    btnMountains.add("work-button-active")
    btnNature.remove("work-button-active")
}
function natureBtn(){
    work1.remove("work-image-filter")
    work2.add("work-image-filter")
    work3.add("work-image-filter")
    work4.remove("work-image-filter")
    work5.add("work-image-filter")
    work6.remove("work-image-filter")
    work7.remove("work-image-filter")
    work8.remove("work-image-filter")
    work9.add("work-image-filter")

    work1.add("fade");
    work2.remove("fade");
    work3.remove("fade");
    work4.add("fade");
    work5.remove("fade");
    work6.add("fade");
    work7.add("fade");
    work8.add("fade");
    work9.remove("fade");

    btnAll.remove("work-button-active")
    btnTravel.remove("work-button-active")
    btnRoad.remove("work-button-active")
    btnMountains.remove("work-button-active")
    btnNature.add("work-button-active")
}

var paraBtn=document.getElementById("parallax-button")
paraBtn.addEventListener("mouseover",()=>{document.getElementById("parallax-i").classList.add("h1-hide");   })
paraBtn.addEventListener("mouseout",()=>{document.getElementById("parallax-i").classList.remove("h1-hide");   }) 

function readAllBtn(){
    var blogReadAllBtn=document.getElementById("blog-readall-button")
    blogReadAllBtn.addEventListener("mouseover",()=>{
        blogReadAllBtn.classList.add("buy-button-dark");
        document.getElementById("blog-i").classList.add("h1-hide");   
    })
    blogReadAllBtn.addEventListener("mouseout",()=>{
        document.getElementById("blog-i").classList.remove("h1-hide");   
        blogReadAllBtn.classList.remove("buy-button-dark");
}) 
}
var workImg1=document.getElementById("work-image-1")
var workImg2=document.getElementById("work-image-2")
var workImg3=document.getElementById("work-image-3")
var workImg4=document.getElementById("work-image-4")
var workImg5=document.getElementById("work-image-5")
var workImg6=document.getElementById("work-image-6")
var workImg7=document.getElementById("work-image-7")
var workImg8=document.getElementById("work-image-8")
var workImg9=document.getElementById("work-image-9")

function workOverlay(){
    workImg1.addEventListener("mouseover",()=>{
        document.getElementById("work-overlay-1").classList.add("display-show");  
        document.getElementById("work-overlay-1").classList.add("fade-in-09");
        document.getElementById("work-title-1").classList.add("fade-in-fully");
    })
    workImg1.addEventListener("mouseout",()=>{
        document.getElementById("work-overlay-1").classList.remove("display-show");  
    })
    workImg2.addEventListener("mouseover",()=>{
        document.getElementById("work-overlay-2").classList.add("display-show"); 
        document.getElementById("work-overlay-2").classList.add("fade-in-09");
        document.getElementById("work-title-2").classList.add("fade-in-fully");  
    })
    workImg2.addEventListener("mouseout",()=>{
        document.getElementById("work-overlay-2").classList.remove("display-show");   
    })

    workImg3.addEventListener("mouseover",()=>{
        document.getElementById("work-overlay-3").classList.add("display-show");
        document.getElementById("work-overlay-3").classList.add("fade-in-09");
        document.getElementById("work-title-3").classList.add("fade-in-fully");  
    })
    workImg3.addEventListener("mouseout",()=>{
        document.getElementById("work-overlay-3").classList.remove("display-show");   
    })

    workImg4.addEventListener("mouseover",()=>{
        document.getElementById("work-overlay-4").classList.add("display-show");
        document.getElementById("work-overlay-4").classList.add("fade-in-09");
        document.getElementById("work-title-4").classList.add("fade-in-fully");     
    })
    workImg4.addEventListener("mouseout",()=>{
        document.getElementById("work-overlay-4").classList.remove("display-show");   
    })

    workImg5.addEventListener("mouseover",()=>{
        document.getElementById("work-overlay-5").classList.add("display-show");
        document.getElementById("work-overlay-5").classList.add("fade-in-09");
        document.getElementById("work-title-5").classList.add("fade-in-fully");     
    })
    workImg5.addEventListener("mouseout",()=>{
        document.getElementById("work-overlay-5").classList.remove("display-show");  
    })

    workImg6.addEventListener("mouseover",()=>{
        document.getElementById("work-overlay-6").classList.add("display-show");
        document.getElementById("work-overlay-6").classList.add("fade-in-09");
        document.getElementById("work-title-6").classList.add("fade-in-fully");    
    })
    workImg6.addEventListener("mouseout",()=>{
        document.getElementById("work-overlay-6").classList.remove("display-show");   
    })

    workImg7.addEventListener("mouseover",()=>{
        document.getElementById("work-overlay-7").classList.add("display-show");
        document.getElementById("work-overlay-7").classList.add("fade-in-09");
        document.getElementById("work-title-7").classList.add("fade-in-fully");     
    })
    workImg7.addEventListener("mouseout",()=>{
        document.getElementById("work-overlay-7").classList.remove("display-show");   
    })

    workImg8.addEventListener("mouseover",()=>{
        document.getElementById("work-overlay-8").classList.add("display-show");
        document.getElementById("work-overlay-8").classList.add("fade-in-09");
        document.getElementById("work-title-8").classList.add("fade-in-fully");     
    })
    workImg8.addEventListener("mouseout",()=>{
        document.getElementById("work-overlay-8").classList.remove("display-show");   
    })

    workImg9.addEventListener("mouseover",()=>{
        document.getElementById("work-overlay-9").classList.add("display-show");
        document.getElementById("work-overlay-9").classList.add("fade-in-09");
        document.getElementById("work-title-9").classList.add("fade-in-fully");     
    })
    workImg9.addEventListener("mouseout",()=>{
        document.getElementById("work-overlay-9").classList.remove("display-show");   
    })
}
// var workImg9=document.getElementById("work-image-9")
var teamOverlay1=document.getElementById("team-img-1")
var teamOverlay2=document.getElementById("team-img-2")
var teamOverlay3=document.getElementById("team-img-3")
var teamOverlay4=document.getElementById("team-img-4")
var teamOverlay5=document.getElementById("team-img-5")
var teamOverlay6=document.getElementById("team-img-6")

function teamOverlay(){
    teamOverlay1.addEventListener("mouseover",()=>{
        document.getElementById("team-overlay-1").classList.add("display-show");  
        document.getElementById("team-overlay-1").classList.add("fade-in-09");
        console.log("team-overlay hover success");
    })
    teamOverlay1.addEventListener("mouseout",()=>{
        document.getElementById("team-overlay-1").classList.remove("display-show");  
    })

    teamOverlay2.addEventListener("mouseover",()=>{
        document.getElementById("team-overlay-2").classList.add("display-show");  
        document.getElementById("team-overlay-2").classList.add("fade-in-09");
        console.log("team-overlay hover success");
    })
    teamOverlay2.addEventListener("mouseout",()=>{
        document.getElementById("team-overlay-2").classList.remove("display-show");  
    })

    teamOverlay3.addEventListener("mouseover",()=>{
        document.getElementById("team-overlay-3").classList.add("display-show");  
        document.getElementById("team-overlay-3").classList.add("fade-in-09");
        console.log("team-overlay hover success");
    })
    teamOverlay3.addEventListener("mouseout",()=>{
        document.getElementById("team-overlay-3").classList.remove("display-show");  
    })

    teamOverlay4.addEventListener("mouseover",()=>{
        document.getElementById("team-overlay-4").classList.add("display-show");  
        document.getElementById("team-overlay-4").classList.add("fade-in-09");
        console.log("team-overlay hover success");
    })
    teamOverlay4.addEventListener("mouseout",()=>{
        document.getElementById("team-overlay-4").classList.remove("display-show");  
    })

    teamOverlay5.addEventListener("mouseover",()=>{
        document.getElementById("team-overlay-5").classList.add("display-show");  
        document.getElementById("team-overlay-5").classList.add("fade-in-09");
        console.log("team-overlay hover success");
    })
    teamOverlay5.addEventListener("mouseout",()=>{
        document.getElementById("team-overlay-5").classList.remove("display-show");  
    })

    teamOverlay6.addEventListener("mouseover",()=>{
        document.getElementById("team-overlay-6").classList.add("display-show");  
        document.getElementById("team-overlay-6").classList.add("fade-in-09");
        console.log("team-overlay hover success");
    })
    teamOverlay6.addEventListener("mouseout",()=>{
        document.getElementById("team-overlay-6").classList.remove("display-show");  
    })
}

var buyBtn1 = document.getElementById("buy-button-1");
var buyBtn2 = document.getElementById("buy-button-2");
var buyBtn3 = document.getElementById("buy-button-3");
function buyButton(){
    buyBtn1.addEventListener("mouseover",()=>{
        document.getElementById("buy-now-1").classList.add("h1-hide");  
        document.getElementById("buy-i-1").classList.add("display-show");  
        buyBtn1.classList.add("buy-button-dark");
        console.log("buy-overlay hover success");
    })
    buyBtn1.addEventListener("mouseout",()=>{
        document.getElementById("buy-now-1").classList.remove("h1-hide");  
        document.getElementById("buy-i-1").classList.remove("display-show");
        buyBtn1.classList.remove("buy-button-dark");
    })

    buyBtn2.addEventListener("mouseover",()=>{
        document.getElementById("buy-now-2").classList.add("h1-hide");  
        document.getElementById("buy-i-2").classList.add("display-show");  
        buyBtn2.classList.add("buy-button-dark");
        console.log("buy-overlay hover success");
    })
    buyBtn2.addEventListener("mouseout",()=>{
        document.getElementById("buy-now-2").classList.remove("h1-hide");  
        document.getElementById("buy-i-2").classList.remove("display-show");
        buyBtn2.classList.remove("buy-button-dark");
    })

    buyBtn3.addEventListener("mouseover",()=>{
        document.getElementById("buy-now-3").classList.add("h1-hide");  
        document.getElementById("buy-i-3").classList.add("display-show");  
        buyBtn3.classList.add("buy-button-dark");
        console.log("buy-overlay hover success");
    })
    buyBtn3.addEventListener("mouseout",()=>{
        document.getElementById("buy-now-3").classList.remove("h1-hide");  
        document.getElementById("buy-i-3").classList.remove("display-show");
        buyBtn3.classList.remove("buy-button-dark");
    })
}
// titleAutoChange();

// var teamOverlay1=document.getElementById('team-overlay-1').style.height;
// var teamImg1=document.getElementById('team-img-1').style.height;
// teamOverlay1 = teamImg1;
function submitForm() {
    var variable = document.getElementById('form-name').value;
    document.getElementById('greet-user').innerHTML = 'Hello: ' + variable +". Thanks for your message";
  }
  


(function ($){
window.onload = (event) => {
    var nova = document.getElementById("novanoid");
    nova.classList.add("display-show");
    document.getElementById("dot-1").classList.add("dot-active");

    titleAutoChange();

    allBtn();

    workOverlay();

    teamOverlay();

    buyButton();
    
    readAllBtn()

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
            elementNavbar.classList.add("fix-navbar");
            elementBody.classList.add("noPadBody");
            console.log("navbar stick Activated");
        }
        else {
            elementNavbar.classList.remove("fix-navbar");
            elementBody.classList.remove("noPadBody");
            console.log("navbar stick Deactivated");
        }

        if (scrollTop >= 570){
            elementNavBtn.classList.add("navBtnGray");
            elementNavbar.classList.add("white-navbar");
        }
        else{
            elementNavBtn.classList.remove("navBtnGray");
            elementNavbar.classList.remove("white-navbar");
          }
   
  };
}());
// document.getElementById("nav-bar").addEventListener("click", () =>{
//     console.log("Scroll")
// })
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
    work1.remove("work-animation-filter")
    work2.remove("work-animation-filter")
    work3.remove("work-animation-filter")
    work4.remove("work-animation-filter")
    work5.remove("work-animation-filter")
    work6.remove("work-animation-filter")
    work7.remove("work-animation-filter")
    work8.remove("work-animation-filter")
    work9.remove("work-animation-filter")

    work1.add("work-image-unfilter");
    work2.add("work-image-unfilter");
    work3.add("work-image-unfilter");
    work4.add("work-image-unfilter");
    work5.add("work-image-unfilter");
    work6.add("work-image-unfilter");
    work7.add("work-image-unfilter");
    work8.add("work-image-unfilter");
    work9.add("work-image-unfilter");

    btnAll.add("work-button-active")
    btnTravel.remove("work-button-active")
    btnRoad.remove("work-button-active")
    btnMountains.remove("work-button-active")
    btnNature.remove("work-button-active")
}

function travelBtn(){
    work1.remove("work-animation-filter")
    work2.add("work-animation-filter")
    work3.remove("work-animation-filter")
    work4.add("work-animation-filter")
    work5.remove("work-animation-filter")
    work6.add("work-animation-filter")
    work7.add("work-animation-filter")
    work8.add("work-animation-filter")
    work9.remove("work-animation-filter")

    work1.add("work-image-unfilter");
    work2.remove("work-image-unfilter");
    work3.add("work-image-unfilter");
    work4.remove("work-image-unfilter");
    work5.add("work-image-unfilter");
    work6.remove("work-image-unfilter");
    work7.remove("work-image-unfilter");
    work8.remove("work-image-unfilter");
    work9.add("work-image-unfilter");

    btnAll.remove("work-button-active")
    btnTravel.add("work-button-active")
    btnRoad.remove("work-button-active")
    btnMountains.remove("work-button-active")
    btnNature.remove("work-button-active")
}
function roadlBtn(){
    work1.add("work-animation-filter")
    work2.remove("work-animation-filter")
    work3.add("work-animation-filter")
    work4.remove("work-animation-filter")
    work5.add("work-animation-filter")
    work6.add("work-animation-filter")
    work7.remove("work-animation-filter")
    work8.add("work-animation-filter")
    work9.remove("work-animation-filter")

    work1.remove("work-image-unfilter");
    work2.add("work-image-unfilter");
    work3.remove("work-image-unfilter");
    work4.add("work-image-unfilter");
    work5.remove("work-image-unfilter");
    work6.remove("work-image-unfilter");
    work7.add("work-image-unfilter");
    work8.remove("work-image-unfilter");
    work9.add("work-image-unfilter");

    btnAll.remove("work-button-active")
    btnTravel.remove("work-button-active")
    btnRoad.add("work-button-active")
    btnMountains.remove("work-button-active")
    btnNature.remove("work-button-active")
}

function mountainsBtn(){
    work1.add("work-animation-filter")
    work2.remove("work-animation-filter")
    work3.remove("work-animation-filter")
    work4.add("work-animation-filter")
    work5.remove("work-animation-filter")
    work6.remove("work-animation-filter")
    work7.add("work-animation-filter")
    work8.remove("work-animation-filter")
    work9.add("work-animation-filter")

    work1.remove("work-image-unfilter");
    work2.add("work-image-unfilter");
    work3.add("work-image-unfilter");
    work4.remove("work-image-unfilter");
    work5.add("work-image-unfilter");
    work6.add("work-image-unfilter");
    work7.remove("work-image-unfilter");
    work8.add("work-image-unfilter");
    work9.remove("work-image-unfilter");

    btnAll.remove("work-button-active")
    btnTravel.remove("work-button-active")
    btnRoad.remove("work-button-active")
    btnMountains.add("work-button-active")
    btnNature.remove("work-button-active")
}
function natureBtn(){
    work1.remove("work-animation-filter")
    work2.add("work-animation-filter")
    work3.add("work-animation-filter")
    work4.remove("work-animation-filter")
    work5.add("work-animation-filter")
    work6.remove("work-animation-filter")
    work7.remove("work-animation-filter")
    work8.remove("work-animation-filter")
    work9.add("work-animation-filter")

    work1.add("work-image-unfilter");
    work2.remove("work-image-unfilter");
    work3.remove("work-image-unfilter");
    work4.add("work-image-unfilter");
    work5.remove("work-image-unfilter");
    work6.add("work-image-unfilter");
    work7.add("work-image-unfilter");
    work8.add("work-image-unfilter");
    work9.remove("work-image-unfilter");

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

function sendMessageButton(){
    var formSendMessage=document.getElementById("form-send-message")
    formSendMessage.addEventListener("mouseover",()=>{
        formSendMessage.classList.add("buy-button-dark");
        document.getElementById("send-i").classList.add("h1-hide");   
    })
    formSendMessage.addEventListener("mouseout",()=>{
        document.getElementById("send-i").classList.remove("h1-hide");   
        formSendMessage.classList.remove("buy-button-dark");
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
    var nameVariable = document.getElementById('form-name');
    var emailVariable = document.getElementById('form-email');
    var phoneVariable = document.getElementById('form-number');
    var subjectVariable = document.getElementById('form-subject');
    var messageVariable = document.getElementById('form-message');
    const formList = [nameVariable,emailVariable, phoneVariable,subjectVariable, messageVariable];

    var nameEmpty = true;
    var emailEmpty = true;
    var phoneEmpty = true;
    var subjectEmpty = true;
    var messageEmpty = true;
    const formEmptyList = [nameEmpty,emailEmpty,phoneEmpty, subjectEmpty,messageEmpty];
    var allEmpty = true;
    console.log("be4 formlist loop" + allEmpty)
    for(i = 0; i < formList.length; i++){
        if(formList[i].value.length < 1){
            formList[i].style.borderColor = 'red';
            formEmptyList[i] = true;
            console.log(formList[i].length+"border red");
            console.log(formEmptyList[i])
        }
    
    else{
        formList[i].style.borderColor = '#f3f4f8';
        formEmptyList[i] = false;
        console.log(formList[i].length+"pass");
        console.log(formEmptyList[i])
        }
    }
    for(i=0; i<formEmptyList.length; i++){
        if(formEmptyList[i] === true){
            allEmpty = true;
            break;
        }
        else{
        allEmpty = false;
        }
    }
    console.log("after formlist loop" + allEmpty)

    
    function allValid(){
        if(nameVariable.value.length <= 3){
            document.getElementById('input-error').innerHTML = "Your name must be longer than 3 characters.";
            return false;
        }
        if(emailVariable.value.includes("@gmail.com") === false){
            document.getElementById('input-error').innerHTML = "Your email must include a @gmail.com address.";
            return false;
        }
        if(phoneVariable.value.length <= 9){
            document.getElementById('input-error').innerHTML = "Your phone number must be longer than 9 numbers.";
            return false;
        }
        if(subjectVariable.value.length <= 3){
            document.getElementById('input-error').innerHTML = "Your subject must be longer than 3 characters.";
            return false;
        }
        if(messageVariable.value.length <= 3){
            document.getElementById('input-error').innerHTML = "Your message must be longer than 3 characters.";
            return false;
        }
        return true;
    }
    console.log(allValid())



    if(allValid() === true){
        console.log("all valid")
        document.getElementById('input-error').innerHTML ="";
        document.getElementById('greet-user').style.color = '#48cfae';
        document.getElementById('greet-user').innerHTML = 'Hello: ' + nameVariable.value +". Thanks for your message";}

    
    else{
        document.getElementById('greet-user').style.color = 'red';
            document.getElementById('greet-user').innerHTML = "Please check your input";}
}
function isInViewport(element) {
    const rect = element.getBoundingClientRect();
    return (
        rect.top >= 0 &&
        rect.left >= 0 &&
        rect.bottom <= (window.innerHeight || document.documentElement.clientHeight) &&
        rect.right <= (window.innerWidth || document.documentElement.clientWidth)
    );
}
function animateValue(obj, start, end, duration) {
    let startTimestamp = null;
    const step = (timestamp) => {
      if (!startTimestamp) startTimestamp = timestamp;
      const progress = Math.min((timestamp - startTimestamp) / duration, 1);
      obj.innerHTML = Math.floor(progress * (end - start) + start);
      if (progress < 1) {
        window.requestAnimationFrame(step);
      }
    };
    window.requestAnimationFrame(step);
  }
//   var statDone = false
//   if(statDone === false ){
   
//   }

function isNumberKey(evt) {
    var charCode = 'which' in evt ? evt.which : evt.keyCode;
    if (charCode > 31 && (charCode < 48 || charCode > 57))
      return false;
    // if(evt.target.value.length > 10)
    //     return false;
    return true;
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

    sendMessageButton()

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
    
    var stat1 = document.getElementById("clients");
    var stat2 = document.getElementById("projects");
    var stat3 = document.getElementById("countries");
    var stat4 = document.getElementById("offices");
    
    if(isInViewport(stat1) === true){
        // animateValue(stat1, 0, 1642, 3000);
        stat1.classList.add("client-increase")
    }
    if(isInViewport(stat2) === true){
        // animateValue(stat2, 0, 2758, 3000);
        stat2.classList.add("project-increase")
    }
    if(isInViewport(stat3) === true){
        // animateValue(stat3, 0, 53, 3000);
        stat3.classList.add("country-increase")
    }
    if(isInViewport(stat4) === true){
        // animateValue(stat4, 0, 3, 3000);
        stat4.classList.add("office-increase")
    }


    
    
    var feat1 = document.querySelector(" .feat1");
    var feat2 = document.querySelector(" .feat2");
    var feat3 = document.querySelector(" .feat3");
    var feat4 = document.querySelector(" .feat4");
    var feat5 = document.querySelector(" .feat5");
    var feat6 = document.querySelector(" .feat6");
    // console.log(isInViewport(feat1))
    if(isInViewport(feat1) === true){
        feat1.classList.add("text-in-fully")
    }
    if(isInViewport(feat2) === true){
        feat2.classList.add("text-in-fully")
    }
    if(isInViewport(feat3) === true){
        feat3.classList.add("text-in-fully")
    }
    if(isInViewport(feat4) === true){
        feat4.classList.add("text-in-fully")
    }
    if(isInViewport(feat5) === true){
        feat5.classList.add("text-in-fully")
    }
    if(isInViewport(feat6) === true){
        feat6.classList.add("text-in-fully")
    }
    
    var serv1 = document.querySelector(" .service1");
    var serv2 = document.querySelector(" .service2");
    var serv3 = document.querySelector(" .service3");
    var serv4 = document.querySelector(" .service4");
    var serv5 = document.querySelector(" .service5");
    var serv6 = document.querySelector(" .service6");
    if(isInViewport(serv1) === true){
        serv1.classList.add("text-in-fully")
    }
    if(isInViewport(serv2) === true){
        serv2.classList.add("text-in-fully")
    }
    if(isInViewport(serv3) === true){
        serv3.classList.add("text-in-fully")
    }
    if(isInViewport(serv4) === true){
        serv4.classList.add("text-in-fully")
    }
    if(isInViewport(serv5) === true){
        serv5.classList.add("text-in-fully")
    }
    if(isInViewport(serv6) === true){
        serv6.classList.add("text-in-fully")
    }

    var buy1 = document.querySelector(" .buy-box-1");
    var buy2 = document.querySelector(" .buy-box-2");
    var buy3 = document.querySelector(" .buy-box-3");
    if(isInViewport(buy1) === true){
        buy1.classList.add("box-in-fully")
    }
    if(isInViewport(buy2) === true){
        buy2.classList.add("box-in-fully")
    }
    if(isInViewport(buy3) === true){
        buy3.classList.add("box-in-fully")
    }

    var contact1 = document.querySelector(" .contact-1");
    var contact2 = document.querySelector(" .contact-2");
    var contact3 = document.querySelector(" .contact-3");
    if(isInViewport(contact1) === true){
        contact1.classList.add("text-in-fully")
    }
    if(isInViewport(contact2) === true){
        contact2.classList.add("text-in-fully")
    }
    if(isInViewport(contact3) === true){
        contact3.classList.add("text-in-fully")
    }

    var scrollTop = window.pageYOffset;
    console.log(scrollTop);
    var elementNavbar = document.getElementById("nav-bar");
    var elementBody = document.getElementById("body");
    var elementNavBtn = document.getElementById("toggle-icon");
    var elementListContainer = document.getElementById("nav-list-container");
    var navFlexItem = document.getElementsByClassName("nav-flex-item");

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

    if (scrollTop >= 550){
        for(var i = 0; i < navFlexItem.length; i++)
        {
            navFlexItem[i].classList.add('navBtnGray');
        }
        elementNavBtn.classList.add("navBtnGray");
        elementNavbar.classList.add("white-navbar");
        elementListContainer.classList.add("white-navbar");
    }
    else{
        for(var i = 0; i < navFlexItem.length; i++)
        {
            navFlexItem[i].classList.remove('navBtnGray');
        }
        elementNavBtn.classList.remove("navBtnGray");
        elementNavbar.classList.remove("white-navbar");
        elementListContainer.classList.remove("white-navbar");
        }
   
  };
}());
// document.getElementById("nav-bar").addEventListener("click", () =>{
//     console.log("Scroll")
// })
var modal = document.getElementById("myModal");

// Get the image and insert it inside the modal - use its "alt" text as a caption
var overlay1 = document.getElementById("work-overlay-1");
var img = document.getElementById("img1");
var modalImg = document.getElementById("img01");

overlay1.onclick = function(){
  modal.style.display = "block";
  modalImg.src = img.src;
  console.log(this.src);
}

var overlay2 = document.getElementById("work-overlay-2");
var img2 = document.getElementById("img2");
var modalImg = document.getElementById("img01");

overlay2.onclick = function(){
  modal.style.display = "block";
  modalImg.src = img2.src;
}

var overlay3 = document.getElementById("work-overlay-3");
var img3 = document.getElementById("img3");
var modalImg = document.getElementById("img01");

overlay3.onclick = function(){
  modal.style.display = "block";
  modalImg.src = img3.src;
  console.log(this.src);
}

var overlay4 = document.getElementById("work-overlay-4");
var img4 = document.getElementById("img4");
var modalImg = document.getElementById("img01");

overlay4.onclick = function(){
  modal.style.display = "block";
  modalImg.src = img4.src;
}

var overlay5 = document.getElementById("work-overlay-5");
var img5 = document.getElementById("img5");
var modalImg = document.getElementById("img01");

overlay5.onclick = function(){
  modal.style.display = "block";
  modalImg.src = img5.src;
}

var overlay6 = document.getElementById("work-overlay-6");
var img6 = document.getElementById("img6");
var modalImg = document.getElementById("img01");

overlay6.onclick = function(){
  modal.style.display = "block";
  modalImg.src = img6.src;
}

var overlay7 = document.getElementById("work-overlay-7");
var img7 = document.getElementById("img7");
var modalImg = document.getElementById("img01");

overlay7.onclick = function(){
  modal.style.display = "block";
  modalImg.src = img7.src;
}

var overlay8 = document.getElementById("work-overlay-8");
var img8 = document.getElementById("img8");
var modalImg = document.getElementById("img01");

overlay8.onclick = function(){
  modal.style.display = "block";
  modalImg.src = img8.src;
}

var overlay9 = document.getElementById("work-overlay-9");
var img9 = document.getElementById("img9");
var modalImg = document.getElementById("img01");

overlay9.onclick = function(){
  modal.style.display = "block";
  modalImg.src = img9.src;
}




// Get the <span> element that closes the modal
var span = document.getElementsByClassName("close")[0];

// When the user clicks on <span> (x), close the modal
span.onclick = function() { 
  modal.style.display = "none";
}
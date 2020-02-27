function closeAll() {
    document.getElementById("first").style.width = "10%";
    document.getElementById("second").style.width = "10%";
    document.getElementById("third").style.width = "10%";
    document.getElementById("fourth").style.width = "10%";

    document.getElementById("firstBox").style.visibility = "hidden";
    document.getElementById("secondBox").style.visibility = "hidden";
    document.getElementById("thirdBox").style.visibility = "hidden";
    document.getElementById("fourthBox").style.visibility = "hidden";
}

function openFirstTab() {
    document.getElementById("first").style.width = "60%";
    document.getElementById("second").style.width = "10%";
    document.getElementById("third").style.width = "10%";
    document.getElementById("fourth").style.width = "10%";

    document.getElementById("firstBox").style.visibility = "visible";
    document.getElementById("secondBox").style.visibility = "hidden";
    document.getElementById("thirdBox").style.visibility = "hidden";
    document.getElementById("fourthBox").style.visibility = "hidden";

    //document.getElementById("firstBox").classList.add("fadeInRight");
/*
    setTimeout(function(){
      document.getElementById("firstBox").style.visibility = "visible";
      document.getElementById("secondBox").style.visibility = "hidden";
      document.getElementById("thirdBox").style.visibility = "hidden";
      document.getElementById("fourthBox").style.visibility = "hidden";
    }, 300);*/
  }

function openSecondTab() {
    document.getElementById("first").style.width = "10%";
    document.getElementById("second").style.width = "60%";
    document.getElementById("third").style.width = "10%";
    document.getElementById("fourth").style.width = "10%";

    document.getElementById("firstBox").style.visibility = "hidden";
    document.getElementById("secondBox").style.visibility = "visible";
    document.getElementById("thirdBox").style.visibility = "hidden";
    document.getElementById("fourthBox").style.visibility = "hidden";
  }

function openThirdTab() {
    document.getElementById("first").style.width = "10%";
    document.getElementById("second").style.width = "10%";
    document.getElementById("third").style.width = "60%";
    document.getElementById("fourth").style.width = "10%";

    document.getElementById("firstBox").style.visibility = "hidden";
    document.getElementById("secondBox").style.visibility = "hidden";
    document.getElementById("thirdBox").style.visibility = "visible";
    document.getElementById("fourthBox").style.visibility = "hidden";
  }

function openFourthTab() {
    document.getElementById("first").style.width = "10%";
    document.getElementById("second").style.width = "10%";
    document.getElementById("third").style.width = "10%";
    document.getElementById("fourth").style.width = "60%";

    document.getElementById("firstBox").style.visibility = "hidden";
    document.getElementById("secondBox").style.visibility = "hidden";
    document.getElementById("thirdBox").style.visibility = "hidden";
    document.getElementById("fourthBox").style.visibility = "visible";
  }
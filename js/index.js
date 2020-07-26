function closeAll() {
  if ($(window).width() <= 1024) {
    document.getElementById("first").style.height = "6%";
    document.getElementById("second").style.height = "6%";
    document.getElementById("third").style.height = "6%";
    document.getElementById("fourth").style.height = "6%";
    document.getElementById("close").style.height = "28%";
    console.log("AAAA");
  }else {
    document.getElementById("first").style.width = "4%";
    document.getElementById("second").style.width = "4%";
    document.getElementById("third").style.width = "4%";
    document.getElementById("fourth").style.width = "4%";
    document.getElementById("close").style.width = "28%";
    console.log("BBBB");
  }

  document.getElementById("firstBox").style.visibility = "hidden";
  document.getElementById("secondBox").style.visibility = "hidden";
  document.getElementById("thirdBox").style.visibility = "hidden";
  document.getElementById("fourthBox").style.visibility = "hidden";
}

function openFirstTab() {
  if ($(window).width() <= 1024) {
    document.getElementById("first").style.height = "60%";
    document.getElementById("second").style.height = "6%";
    document.getElementById("third").style.height = "6%";
    document.getElementById("fourth").style.height = "6%";
    document.getElementById("close").style.height = "100%";
    console.log("AAAA");
  }else {
    document.getElementById("first").style.width = "60%";
    document.getElementById("second").style.width = "4%";
    document.getElementById("third").style.width = "4%";
    document.getElementById("fourth").style.width = "4%";
    document.getElementById("close").style.width = "28%";
    console.log("BBBB");
  }
  

  document.getElementById("firstBox").style.visibility = "visible";
  document.getElementById("secondBox").style.visibility = "hidden";
  document.getElementById("thirdBox").style.visibility = "hidden";
  document.getElementById("fourthBox").style.visibility = "hidden";
}

function openSecondTab() {
  if ($(window).width() <= 1024) {
    document.getElementById("first").style.height = "6%";
    document.getElementById("second").style.height = "60%";
    document.getElementById("third").style.height = "6%";
    document.getElementById("fourth").style.height = "6%";
    document.getElementById("close").style.height = "100%";
    console.log("AAAA");
  }else {
    document.getElementById("first").style.width = "4%";
    document.getElementById("second").style.width = "60%";
    document.getElementById("third").style.width = "4%";
    document.getElementById("fourth").style.width = "4%";
    document.getElementById("close").style.width = "28%";
    console.log("BBBB");
  }

  document.getElementById("firstBox").style.visibility = "hidden";
  document.getElementById("secondBox").style.visibility = "visible";
  document.getElementById("thirdBox").style.visibility = "hidden";
  document.getElementById("fourthBox").style.visibility = "hidden";
}

function openThirdTab() {
  if ($(window).width() <= 1024) {
    document.getElementById("first").style.height = "6%";
    document.getElementById("second").style.height = "6%";
    document.getElementById("third").style.height = "60%";
    document.getElementById("fourth").style.height = "6%";
    document.getElementById("close").style.height = "100%";
    console.log("AAAA");
  }else {
    document.getElementById("first").style.width = "4%";
    document.getElementById("second").style.width = "4%";
    document.getElementById("third").style.width = "60%";
    document.getElementById("fourth").style.width = "4%";
    document.getElementById("close").style.width = "28%";
    console.log("BBBB");
  }

  document.getElementById("firstBox").style.visibility = "hidden";
  document.getElementById("secondBox").style.visibility = "hidden";
  document.getElementById("thirdBox").style.visibility = "visible";
  document.getElementById("fourthBox").style.visibility = "hidden";
}

function openFourthTab() {
  if ($(window).width() <= 1024) {
    document.getElementById("first").style.height = "6%";
    document.getElementById("second").style.height = "6%";
    document.getElementById("third").style.height = "6%";
    document.getElementById("fourth").style.height = "60%";
    document.getElementById("close").style.height = "100%";
    console.log("AAAA");
  }else {
    document.getElementById("first").style.width = "4%";
    document.getElementById("second").style.width = "4%";
    document.getElementById("third").style.width = "4%";
    document.getElementById("fourth").style.width = "60%";
    document.getElementById("close").style.width = "28%";
    console.log("BBBB");
  }

  document.getElementById("firstBox").style.visibility = "hidden";
  document.getElementById("secondBox").style.visibility = "hidden";
  document.getElementById("thirdBox").style.visibility = "hidden";
  document.getElementById("fourthBox").style.visibility = "visible";
}
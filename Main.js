// Slideshow script
var slideIndex = 1;
showDivs(slideIndex);

function plusDivs(n) {
  showDivs(slideIndex += n);
}

function showDivs(n) {
  var i;
  var x = document.getElementsByClassName("Slides");
  if (n > x.length) {slideIndex = 1}
  if (n < 1) {slideIndex = x.length}
  for (i = 0; i < x.length; i++) {
    x[i].style.display = "none";
  }
  x[slideIndex-1].style.display = "block";
}

slideIndex = 0;
carousel();

function carousel() {
  var i;
  var x = document.getElementsByClassName("Slides");
  for (i = 0; i < x.length; i++) {
    x[i].style.display = "none";
  }
  slideIndex++;
  if (slideIndex > x.length) {slideIndex = 1}
  x[slideIndex-1].style.display = "block";
  setTimeout(carousel, 3000); // Change image every 3 seconds
}

// Products Filtering script

filterSelection('all')
function filterSelection(c) {
  var x, i;
  x = document.getElementsByClassName("filterDiv");
  if (c == "all") c = "";
  // Add the "show" class (display:block) to the filtered elements, and remove the "show" class from the elements that are not selected
  for (i = 0; i < x.length; i++) {
    w3RemoveClass(x[i], "show");
    if (x[i].className.indexOf(c) > -1) w3AddClass(x[i], "show");
  }
}

// Show filtered elements
function w3AddClass(element, name) {
  var i, arr1, arr2;
  arr1 = element.className.split(" ");
  arr2 = name.split(" ");
  for (i = 0; i < arr2.length; i++) {
    if (arr1.indexOf(arr2[i]) == -1) {
      element.className += " " + arr2[i];
    }
  }
}

// Hide elements that are not selected
function w3RemoveClass(element, name) {
  var i, arr1, arr2;
  arr1 = element.className.split(" ");
  arr2 = name.split(" ");
  for (i = 0; i < arr2.length; i++) {
    while (arr1.indexOf(arr2[i]) > -1) {
      arr1.splice(arr1.indexOf(arr2[i]), 1);
    }
  }
  element.className = arr1.join(" ");
}

// Add active class to the current control button (highlight it)
// var btnContainer = document.getElementById("myBtnContainer");
// var btns = btnContainer.getElementsByClassName("btn");
// for (var i = 0; i < btns.length; i++) {
//   btns[i].addEventListener("click", function() {
//     var current = document.getElementsByClassName("active");
//     current[0].className = current[0].className.replace(" active", "");
//     this.className += " active";
//   });
// }

// Order Form

var modal = document.getElementById("myModal");
var btn = document.getElementsByClassName('open-button')
// var btnclose = document.getElementsByClassName('btn-cancel')

function openForm_Meat() {
  document.getElementById("dog-cat-Modal").style.display = "block";
}

function openForm_Veg() {
  document.getElementById("Rabbit-Modal").style.display = "block";
}

// local storage for & registration & Login

function CheckInput(){
  var InputFName = document.getElementById("InputFName").value;
  var InputLName = document.getElementById("InputLName").value;
  var InputEmail = document.getElementById("InputEmail").value;
  var InputPW = document.getElementById("InputPW").value;
  var InputCfmPW = document.getElementById("InputCfmPW").value;
  if (InputFName.length == 0 || InputLName.length == 0 || InputEmail.length == 0 || InputPW.length == 0 || InputCfmPW.length == 0) {
    alert("Please fill in!");
  } else if (InputEmail.length != 0 || InputPW.length != 0 || InputCfmPW.length != 0) {
    if (InputPW == InputCfmPW) {
      localStorage.setItem("FirstName", InputFName);
      localStorage.setItem("LastName", InputLName);
      localStorage.setItem("Email", InputEmail);
      localStorage.setItem("Password", InputPW);
      localStorage.setItem("CfmPW", InputCfmPW);
      alert("You are now a member of Paw Ohana!");
    }else {
      alert("Password does not match");
    }
  } else {
    alert("error");
  }
}

function LoginCheck(){
  var UserEmail = document.getElementById("UserEmail").value;
  var UserPw = document.getElementById("UserPw").value;
  if (UserEmail.length == 0 || UserPw.length == 0) {
    alert("Please fill in!");
  } else if (UserEmail.length != 0 || UserPw.length != 0) {
    var StoredEmail = localStorage.getItem("Email");
    var StoredPW = localStorage.getItem("Password");
    var StoredFName = localStorage.getItem("FirstName");
    if (UserEmail == StoredEmail && UserPw == StoredPW) {
      alert("Hello " + StoredFName + " Welcome back!")
    } else {
      alert("Login or Password is invalid")
    }
  }else {
    alert("Error")
  }
}

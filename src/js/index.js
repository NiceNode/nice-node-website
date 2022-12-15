import '../sass/index.scss';
// import $ from 'jquery';

document.addEventListener("DOMContentLoaded", function () {
  // modify this later with localCache, local settings detection
  const checkbox = document.querySelector('li.switch');
  const body = document.querySelector('body');
  let currentTheme = body.classList.contains("light") ? "light" : "dark";

  checkbox.addEventListener("click", function () {
    const nextTheme = currentTheme === "light" ? "dark" : "light";
    body.classList.replace(currentTheme, nextTheme);
    currentTheme = nextTheme;
  });
});

var acc = document.getElementsByClassName("accordion");
var i;

for (i = 0; i < acc.length; i++) {
  acc[i].addEventListener("click", function() {
    this.classList.toggle("active");
    var panel = this.nextElementSibling;
    if (panel.style.display === "block") {
      panel.style.display = "none";
    } else {
      panel.style.display = "block";
    }
  });
}

// buggy

// var scroll = $(window).scrollTop();

// $(window).scroll(function() {    
//   scroll = $(window).scrollTop();

//   if (scroll > 500) {
//       $("header").addClass("minimized");
//   } else {
//     $("header").removeClass("minimized");
//   }
// });
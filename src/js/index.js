import '../sass/index.scss';
import './accordion-carousel';
import $ from 'jquery';

const body = document.querySelector('body');
const savedTheme = localStorage.getItem('theme');

if (savedTheme){
  const darkMode = savedTheme === 'dark';
  if (darkMode){
    body.classList.remove('light');
    body.classList.add('dark');
  } else {
    body.classList.remove('dark');
    body.classList.add('light');
  }
} else if (window.matchMedia && window.matchMedia('(prefers-color-scheme: dark)').matches) {
  body.classList.remove('light');
  body.classList.add('dark');
} else {
  body.classList.remove('dark');
  body.classList.add('light');
}

document.addEventListener("DOMContentLoaded", function () {
  // modify this later with localCache, local settings detection
  const checkbox = document.querySelector('li.switch');
  const body = document.querySelector('body');
  let currentTheme = body.classList.contains("light") ? "light" : "dark";

  checkbox.addEventListener("click", function () {
    const nextTheme = currentTheme === "light" ? "dark" : "light";
    body.classList.replace(currentTheme, nextTheme);
    currentTheme = nextTheme;

    // Save the current theme in localStorage
    localStorage.setItem('theme', currentTheme);
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
      this.querySelector("span.dot").innerHTML = "●";
      this.querySelector("span.arrow").innerHTML = "↓";
    } else {
      panel.style.display = "block";
      this.querySelector("span.dot").innerHTML = "○";
      this.querySelector("span.arrow").innerHTML = "↑";
    }
  });
}

document.querySelectorAll('a[href^="#"]').forEach(anchor => {
  anchor.addEventListener('click', function (e) {
      e.preventDefault();

      const element = document.querySelector(this.getAttribute('href'));
      const elementPosition = element.getBoundingClientRect().top;
      window.scrollBy({
          top: elementPosition - 62,
          behavior: 'smooth'
      });
  });
});

const header = document.querySelector('header');
const main = document.querySelector('main');
window.addEventListener('scroll', function() {
  if (main.getBoundingClientRect().top === 62) {
    header.classList.remove('minimized');
  } else if (main.getBoundingClientRect().top <= 95 && main.getBoundingClientRect().top !== 62) {
    header.classList.add('minimized');
  }
});

$(".downloadButton.orange").click(function() {
  $(".downloadMenu").toggleClass('visible');
});

$(document).click(function(event) {
  if (!($(event.target).hasClass('downloadContainer') || $(event.target).hasClass('downloadButton orange') || $(event.target).hasClass('down'))) {
    $(".downloadMenu").removeClass('visible');
  }
});
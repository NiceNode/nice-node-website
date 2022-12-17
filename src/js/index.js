import '../sass/index.scss';
import './accordion-carousel';

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

document.querySelectorAll('a[href^="#"]').forEach(anchor => {
  anchor.addEventListener('click', function (e) {
      e.preventDefault();

      document.querySelector(this.getAttribute('href')).scrollIntoView({
          behavior: 'smooth'
      });
  });
});

const header = document.querySelector('header');
window.addEventListener('scroll', function() {
  if (window.scrollY > 0) {
    header.classList.add('minimized');
  } else {
    header.classList.remove('minimized');
  }
});


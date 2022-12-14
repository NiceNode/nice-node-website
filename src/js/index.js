import '../sass/index.scss';

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

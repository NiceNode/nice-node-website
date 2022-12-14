import '../sass/index.scss';

document.addEventListener("DOMContentLoaded", function () {
  // modify this later with localCache, local settings detection
  const checkbox = document.querySelector('input[name=mode]');
  const body = document.querySelector('body');

  checkbox.addEventListener("change", function () {
    if(this.checked) {
      trans();
      body.classList.replace('light', 'dark');
    } else {
        trans();
        body.classList.replace('dark', 'light');
    }
  });
});


let trans = () => {
    document.documentElement.classList.add('transition');
    window.setTimeout(() => {
        document.documentElement.classList.remove('transition');
    }, 1000);
};
// This script hides the preloader after the window is fully loaded (cross-browser)
window.addEventListener('load', function() {
  var preloader = document.querySelector('.lqd-preloader-wrap');
  if (preloader) {
    preloader.style.display = 'none';
  }
});

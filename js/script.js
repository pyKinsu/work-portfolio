// CURRENTLY I AM WORKING TO ADD TOGGLE AND PRELOADER IN WEBSITE AND I AM WORKING ON THAT SO IF YOU WANNA THEN FORK AND EDIT AS YOU WANT 
// script.js

window.addEventListener("load", () => {
  const loader = document.querySelector(".loader-wrapper");
  if (loader) {
    loader.style.opacity = 0;
    setTimeout(() => {
      loader.style.display = "none";
    }, 500);
  }
});

// Dark mode toggle
const toggle = document.getElementById('darkModeToggle');
const body = document.body;
const icon = toggle.querySelector('i');

if (localStorage.getItem('theme') === 'light') {
  body.classList.add('light-mode');
  icon.classList.remove('fa-moon');
  icon.classList.add('fa-sun');
}

toggle.addEventListener('click', () => {
  body.classList.toggle('light-mode');
  const isLight = body.classList.contains('light-mode');
  icon.classList.toggle('fa-moon', !isLight);
  icon.classList.toggle('fa-sun', isLight);
  localStorage.setItem('theme', isLight ? 'light' : 'dark');
});

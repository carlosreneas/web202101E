window.addEventListener('scroll', function () {
  const header = document.querySelector('header');
  header.classList.toggle("sticky", window.scrollY > 250);
});

function toggle_menu() {
  const toggle = document.querySelector('.menu-toggle');
  toggle.classList.toggle('active');
}
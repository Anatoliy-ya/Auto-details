document.addEventListener('DOMContentLoaded', function () {
  const scrollButtons = document.querySelectorAll('[data-scroll]');

  scrollButtons.forEach(function (button) {
    button.addEventListener('click', function (event) {
      event.preventDefault();

      const targetId = button.getAttribute('data-scroll');
      const targetElement = document.querySelector(targetId);

      if (targetElement) {
        window.scrollTo({
          top: targetElement.offsetTop,
          behavior: 'smooth', // Добавляем плавный скроллинг
        });
      }
    });
  });
});

// JavaScript для зафиксированной шапки

window.addEventListener('scroll', function () {
  const header = document.getElementById('header');
  if (window.pageYOffset > 0) {
    header.classList.add('fixed');
  } else {
    header.classList.remove('fixed');
  }
});

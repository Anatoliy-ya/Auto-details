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

// JavaScript для слайдера

let slideIndex = 1;
let slides = document.getElementsByClassName('carousel-item'); // Переместите slides на глобальный уровень
showSlides(slideIndex);

function moveSlide(n) {
  showSlides((slideIndex += n));
}

function showSlides(n) {
  let i;
  let slides = document.getElementsByClassName('carousel-item');
  if (n > slides.length) {
    slideIndex = 1;
  }
  if (n < 1) {
    slideIndex = slides.length;
  }
  for (i = 0; i < slides.length; i++) {
    slides[i].style.display = 'none';
  }
  slides[slideIndex - 1].style.display = 'block';
}

// Добавляем автоматическое переключение
setInterval(function () {
  slideIndex++;
  if (slideIndex > slides.length) {
    slideIndex = 1;
  }
  showSlides(slideIndex);
}, 4000); // 4000 мс = 5 секунд

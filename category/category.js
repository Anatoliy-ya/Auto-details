import products from './products.js';

// Получаем элементы DOM
const categoryList = document.getElementById('category-list');
const productsContainer = document.getElementById('products');

// Обработчик события для клика по категории
categoryList.addEventListener('click', (event) => {
  if (event.target.tagName === 'A') {
    // Получаем выбранную категорию из атрибута data-category
    const selectedCategory = event.target.getAttribute('data-category');
    window.history.pushState(null, '', `?category=${selectedCategory}`);
    // Загрузка товаров из выбранной категории
    console.log(selectedCategory);
    loadProductsForCategory(selectedCategory);
  }
});

function createProductCard(product) {
  const productCard = document.createElement('div');
  productCard.classList.add('product-card');

  const productImage = document.createElement('img');
  productImage.src = product.imageUrl;
  productImage.alt = product.name;
  productCard.appendChild(productImage);

  const productName = document.createElement('h5');
  productName.textContent = product.name;
  productCard.appendChild(productName);

  const productModel = document.createElement('p');
  productModel.textContent = product.model;
  productCard.appendChild(productModel);

  const productAvailable = document.createElement('p');
  productAvailable.textContent = product.available;
  productCard.appendChild(productAvailable);

  // Добавляем обработчик событий для открытия модального окна
  productCard.addEventListener('click', function () {
    fillModalWithProductInfo(product);
  });

  return productCard;
}

function fillModalWithProductInfo(product) {
  document.getElementById('modalImage').src = product.imageUrl;
  document.getElementById('modalName').textContent = product.name;
  document.getElementById('modalDescription').textContent = product.description;
  document.getElementById('modalAvailable').textContent = product.available;
  document.getElementById('modalArticle').textContent = product.article;
  document.getElementById('modalModel').textContent = product.model;
  document.getElementById('modalComplete').textContent = product.complete;
  // Добавьте здесь другие элементы, которые нужно заполнить
  // Например, вес, размер, модель, артикул и т.д.

  modal.style.display = 'flex';
  modal.style.justifyContent = 'center';
}

// Получаем модальное окно
var modal = document.getElementById('productModal');

// Получаем элемент <span> для закрытия модального окна
var span = document.getElementsByClassName('close')[0];

// Когда пользователь кликает на <span> (x), закрываем модальное окно
span.onclick = function () {
  modal.style.display = 'none';
};

// Когда пользователь кликает в любое место за пределами модального окна, оно закрывается
window.onclick = function (event) {
  if (event.target === modal) {
    modal.style.display = 'none';
  }
};

// Функция загрузки товаров из выбранной категории
function loadProductsForCategory(category) {
  // Очищаем контейнер товаров перед добавлением новых товаров
  productsContainer.innerHTML = '';

  // Фильтруем товары по выбранной категории и создаем элементы для отображения
  const filteredProducts = products.filter((product) => product.category === category);

  filteredProducts.forEach((product) => {
    // Создаем элемент карточки товара
    const productCard = createProductCard(product);
    productsContainer.appendChild(productCard);
  });
}

document.addEventListener('DOMContentLoaded', function () {
  // Получаем параметр category из URL
  const urlParams = new URLSearchParams(window.location.search);
  const category = urlParams.get('category');

  // Проверяем, есть ли параметр category и загружаем товары для этой категории
  if (category) {
    loadProductsForCategory(category);
  }
});

// pagination
// let currentPage = 0;
// const itemsPerPage = 8; // Предполагаем 4 столбца * 2 строки
// const totalPages = Math.ceil(products.length / itemsPerPage);
// const currentPageSpan = document.getElementById('currentPage');

// function showPage(page) {
//   const start = page * itemsPerPage;
//   const end = start + itemsPerPage;
//   const productsToShow = products.slice(start, end);

//   // Очистить текущие товары
//   productsContainer.innerHTML = '';

//   // Добавить товары для выбранной страницы
//   productsToShow.forEach((product) => {
//     productsContainer.appendChild(createProductCard(product));
//   });

//   // Обновить номер текущей страницы
//   currentPage = page;
//   console.log(currentPage);
//   currentPageSpan.textContent = page + 1; // +1, потому что страницы начинаются с 1, а не с 0
// }

// // Функция для перехода на следующую страницу
// function nextPage() {
//   if (currentPage < totalPages - 1) {
//     showPage(currentPage + 1);
//   }
// }

// // Функция для перехода на предыдущую страницу
// function prevPage() {
//   if (currentPage > 0) {
//     showPage(currentPage - 1);
//   }
// }

// // Добавляем обработчики событий для кнопок
// document.getElementById('nextPage').addEventListener('click', nextPage);
// document.getElementById('prevPage').addEventListener('click', prevPage);

// // Показать начальную страницу
// showPage(0);

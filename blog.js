// Анимация снежинок
document.addEventListener('DOMContentLoaded', () => {
    const snowContainer = document.getElementById('snowflakes');
    const snowflakeCount = 50; 

    for (let i = 0; i < snowflakeCount; i++) {
      const snowflake = document.createElement('div');
      snowflake.className = 'snowflake';
      snowflake.innerHTML = '❄'; 
      snowflake.style.left = Math.random() * 200 + 'vw';
      snowflake.style.fontSize = Math.random() * 1.5 + 0.5 + 'em';
      snowflake.style.animationDuration = Math.random() * 5 + 5 + 's';
      snowflake.style.animationDelay = Math.random() * 5 + 's';
      snowflake.style.setProperty('--horizontal-shift', Math.random() * 2 - 1); 

      snowContainer.appendChild(snowflake);
    }

  });
  
// Гирлянда
const numberOfLights = 40; // Количество лампочек 

const lightrope = document.getElementById('lightrope');

for (let i = 0; i < numberOfLights; i++) {
  const light = document.createElement('li');
  lightrope.appendChild(light);
}



// Получаем все элементы блога
const blogItems = document.querySelectorAll('.blog-item');

// Получаем модальное окно и элементы внутри него
const modal = document.getElementById('modal');
const closeModal = document.getElementById('closeModal');

// Для каждого элемента блога добавляем обработчик события
blogItems.forEach(item => {
    item.addEventListener('click', function() {
        // Заполняем модальное окно контентом выбранного блога
        const title = item.querySelector('.blog-title').textContent;
        const date = item.querySelector('.blog-date').textContent;
        const year = item.querySelector('.blog-year').textContent;

        // Проверяем, есть ли у элемента секция blog-preview.full
        const previewFull = item.querySelector('.blog-preview.full');
        const previewContent = previewFull 
            ? previewFull.innerHTML // Если есть, берем содержимое .blog-preview.full
            : item.querySelector('.blog-preview').innerHTML; // Если нет, берем обычный .blog-preview

        // Открываем модальное окно
        modal.querySelector('.blog-title').textContent = title;
        modal.querySelector('.blog-date').textContent = date;
        modal.querySelector('.blog-year').textContent = year;
        modal.querySelector('.blog-full-content').innerHTML = previewContent;

        modal.style.display = 'block';
    });
});

// Закрытие модального окна
closeModal.addEventListener('click', function() {
    modal.style.display = 'none';
});

// Закрытие модального окна при клике вне его
window.addEventListener('click', function(event) {
    if (event.target === modal) {
        modal.style.display = 'none';
    }
});
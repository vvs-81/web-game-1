// 1. Задаём массив (или объект) с промокодами
// Вы можете редактировать промокоды в этом массиве по своему усмотрению.
// Допустим, у нас есть три кода - по одному на каждый сундук:
const promoCodes = [
  "PROMO10",    // промокод в первом сундуке
  "PROMO20",    // промокод во втором сундуке
  "PROMO30",    // промокод в третьем сундуке
];

// 2. Находим нужные элементы на странице
const chests = document.querySelectorAll(".chest");
const resultContainer = document.getElementById("result");
const codeText = document.getElementById("code-text");
const resetButton = document.getElementById("reset-button");

// 3. Функция для обработки клика на сундук
function handleChestClick(event) {
  // Получаем индекс сундука (data-chest="0", "1" или "2")
  const chestIndex = event.currentTarget.getAttribute("data-chest");

  // Получаем соответствующий промокод
  const selectedPromo = promoCodes[chestIndex];

  // Отображаем в блоке "result"
  codeText.textContent = `Ваш промокод: ${selectedPromo}`;
  resultContainer.classList.remove("hidden");

  // После выбора сундуков можно спрятать все сундуки или "задизейблить" их
  chests.forEach(chest => {
    chest.removeEventListener("click", handleChestClick);
  });
}

// 4. Навешиваем обработчики кликов на все сундуки
chests.forEach(chest => {
  chest.addEventListener("click", handleChestClick);
});

// 5. Кнопка "Попробовать снова"
resetButton.addEventListener("click", () => {
  // Скрываем блок с промокодом
  resultContainer.classList.add("hidden");
  codeText.textContent = "";

  // Восстанавливаем возможность кликать на сундуки
  chests.forEach(chest => {
    chest.addEventListener("click", handleChestClick);
  });
});

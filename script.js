// Массив промокодов (три кода для трёх сундуков)
const promoCodes = [
  "PROMO10",
  "PROMO20",
  "PROMO30"
];

// Находим все сундуки и элементы для результата
const chests = document.querySelectorAll(".chest");
const resultContainer = document.getElementById("result");
const codeText = document.getElementById("code-text");
const resetButton = document.getElementById("reset-button");

// Обработчик клика на сундук
function handleChestClick(event) {
  const chest = event.currentTarget;               // весь блок .chest
  const chestIndex = chest.getAttribute("data-chest"); // "0", "1" или "2"
  const selectedPromo = promoCodes[chestIndex];    // берем нужный промокод

  // Добавляем класс opened, чтобы запустить CSS-анимацию
  chest.classList.add("opened");

  // Ждем 0.8 секунды, пока сундук «откроется», затем показываем промокод
  setTimeout(() => {
    codeText.textContent = `Ваш промокод: ${selectedPromo}`;
    resultContainer.classList.remove("hidden");
  }, 800);

  // Отключаем клики на все сундуки, чтобы нельзя было открыть несколько
  chests.forEach(ch => ch.removeEventListener("click", handleChestClick));
}

// Назначаем обработчик каждому сундуку
chests.forEach(ch => ch.addEventListener("click", handleChestClick));

// Кнопка "Попробовать снова" — сбрасываем всё
resetButton.addEventListener("click", () => {
  // Прячем блок с промокодом
  resultContainer.classList.add("hidden");
  codeText.textContent = "";

  // Снимаем класс "opened" со всех сундуков
  chests.forEach(chest => {
    chest.classList.remove("opened");
    // Возвращаем возможность кликать
    chest.addEventListener("click", handleChestClick);
  });
});

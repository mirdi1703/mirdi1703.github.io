//ДОСТУП К ТАБЕЛЬ-КАЛЕНДАРЮ
document.addEventListener("DOMContentLoaded", function () {
  const calendarLink = document.querySelector('.navigation a[href*="calendar.html"]');
  if (calendarLink) {
    calendarLink.addEventListener("click", function (e) {
      e.preventDefault();
      alert("Доступ к Табель-календарю доступен только через страницу входа.");
    });
  }
});

//ПРЕДУПРЕЖДЕНИЕ
document.addEventListener("DOMContentLoaded", function () {
  function showRandomAlert() {
    const messages = [
      "⚠️ ВНЕЗАПНАЯ ЖАРА",
      "⚠️ Уровень радиации повышен",
      "☠️ Жуки на подходе!",
      "🌪️ Аномалия приближается!",
      "🔥 Сбой системы охлаждения"
    ];

    const message = messages[Math.floor(Math.random() * messages.length)];

    const alertBox = document.createElement("div");
    alertBox.className = "alert-blink";
    alertBox.textContent = message;
    document.body.appendChild(alertBox);

    alertBox.style.display = "block";

    // Показываем 3 секунды
    setTimeout(() => {
      alertBox.remove();

      // Следующее появление через 5–10 секунд
      const nextTime = Math.random() * 5000 + 5000;
      setTimeout(showRandomAlert, nextTime);
    }, 3000);
  }

  // Первое появление через 2–5 секунд
  const initialTime = Math.random() * 3000 + 2000;
  setTimeout(showRandomAlert, initialTime);
});



//КНОПКА СКРОЛЛА НАВЕРХ СТРАНИЦЫ
document.addEventListener("DOMContentLoaded", function () {
  const scrollBtn = document.getElementById("scrollTopBtn");

  window.addEventListener("scroll", () => {
    if (window.scrollY > 400) {
      scrollBtn.style.visibility = "visible";
      scrollBtn.style.opacity = "1";
    } else {
      scrollBtn.style.visibility = "hidden";
      scrollBtn.style.opacity = "0";
    }
  });

  scrollBtn.addEventListener("click", () => {
    window.scrollTo({
      top: 0,
      behavior: "smooth"
    });
  });
});



//ДВОРФ
document.addEventListener("DOMContentLoaded", function () {
  const callBtn = document.getElementById("callDwarfBtn");
  const popup = document.getElementById("dwarfPopup");
  const quote = document.getElementById("dwarfQuote");

  const dwarfPhrases = [
    "Rock and Stone!",
    "Get to work, miner!",
    "Time to dig!",
    "For Kaaaaarl!",
    "Stay by the light!"
  ];

  callBtn.addEventListener("click", () => {
    const phrase = dwarfPhrases[Math.floor(Math.random() * dwarfPhrases.length)];
    quote.textContent = phrase;
    popup.classList.add("active");

    setTimeout(() => {
      popup.classList.remove("active");
    }, 3000);
  });
});

//ДАТА
document.addEventListener("DOMContentLoaded", function () {
  const today = new Date().toLocaleDateString("ru-RU", {
    day: 'numeric',
    month: 'long',
    year: 'numeric'
  });
  const dateElement = document.getElementById("date");
  if (dateElement) {
    dateElement.textContent = today;
  }
});
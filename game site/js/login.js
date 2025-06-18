const loginForm = document.getElementById("loginForm");
const errorMsg = document.getElementById("error-message");

loginForm.addEventListener("submit", function (e) {
  e.preventDefault();

  const inputUser = document.getElementById("username").value.trim();
  const inputPass = document.getElementById("password").value.trim();

  const savedUser = localStorage.getItem("drgUser");
  const savedPass = localStorage.getItem("drgPass");

  if (!savedUser || !savedPass) {
    errorMsg.textContent = "⛔ Нет зарегистрированных данных. Пожалуйста, зарегистрируйтесь.";
    errorMsg.style.display = "block";
    return;
  }

  if (inputUser === savedUser && inputPass === savedPass) {
    localStorage.setItem("isLoggedIn", "true"); // Сохраняем флаг входа
    window.location.href = "../html/calendar.html";
  } else {
    errorMsg.textContent = "⛔ Неверный позывной или код доступа!";
    errorMsg.style.display = "block";
  }
});

// Блокируем только ссылку "Табель-календарь" в шапке на этой странице
const calendarLink = document.querySelector('.navigation a[href=""]');
if (calendarLink) {
  calendarLink.addEventListener("click", function (e) {
    e.preventDefault();
    alert("Доступ к Табель-календарю доступен только после входа.");
  });
}

document.addEventListener("DOMContentLoaded", function () {
  const calendarLink = document.querySelector('.navigation a[href*="calendar.html"]');
  if (calendarLink) {
    calendarLink.addEventListener("click", function (e) {
      e.preventDefault();
      alert("Доступ к Табель-календарю доступен только через страницу входа.");
    });
  }
});
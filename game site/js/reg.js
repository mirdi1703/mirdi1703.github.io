// reg.js

document.getElementById("registerForm").addEventListener("submit", function(e) {
  e.preventDefault();

  const email = document.getElementById("newEmail").value.trim();
  const username = document.getElementById("newUsername").value.trim();
  const password = document.getElementById("newPassword").value.trim();
  const confirmPassword = document.getElementById("confirmPassword").value.trim();
  const message = document.getElementById("register-message");

  if (username.length < 3 || password.length < 3) {
    message.textContent = "❗ Позывной и код должны быть не короче 3 символов.";
    message.style.color = "red";
    return;
  }

  if (password !== confirmPassword) {
    message.textContent = "❗ Пароли не совпадают.";
    message.style.color = "red";
    return;
  }

  // Сохраняем учётные данные
  localStorage.setItem("drgEmail", email);
  localStorage.setItem("drgUser", username);
  localStorage.setItem("drgPass", password);

  message.textContent = "✅ Регистрация успешна! Перейдите на страницу входа.";
  message.style.color = "lime";
});

document.addEventListener("DOMContentLoaded", function () {
  const calendarLink = document.querySelector('.navigation a[href*="calendar.html"]');
  if (calendarLink) {
    calendarLink.addEventListener("click", function (e) {
      e.preventDefault();
      alert("Доступ к Табель-календарю доступен только через страницу входа.");
    });
  }
});

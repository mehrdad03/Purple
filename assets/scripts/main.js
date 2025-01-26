document.addEventListener("DOMContentLoaded", function () {
  // تاریخ هدف (به فرمت "YYYY-MM-DDTHH:MM:SS")
  const targetDate = new Date("2025-12-01T00:00:00").getTime();
  let timerInterval;

  // متد برای به‌روزرسانی تایمر
  function updateTimer() {
    const currentDate = new Date().getTime();
    const timeRemaining = targetDate - currentDate;

    if (timeRemaining <= 0) {
      clearInterval(timerInterval);
      document.getElementById("timer").textContent = "زمان به پایان رسید!";
      return;
    }

    const days = Math.floor(timeRemaining / (1000 * 60 * 60 * 24));
    const hours = Math.floor(
      (timeRemaining % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60)
    );
    const minutes = Math.floor(
      (timeRemaining % (1000 * 60 * 60)) / (1000 * 60)
    );
    const seconds = Math.floor((timeRemaining % (1000 * 60)) / 1000);

    document.querySelector(".days").textContent = days;
    document.querySelector(".hour").textContent = hours
      .toString()
      .padStart(2, "0");
    document.querySelector(".minute").textContent = minutes
      .toString()
      .padStart(2, "0");
    document.querySelector(".seconds").textContent = seconds
      .toString()
      .padStart(2, "0");
  }

  // متد برای شروع تایمر
  function startTimer() {
    timerInterval = setInterval(updateTimer, 1000);
    updateTimer(); // اجرای اولیه برای نمایش مقادیر
  }

  startTimer(); // شروع تایمر
});

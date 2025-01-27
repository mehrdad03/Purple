document.addEventListener("DOMContentLoaded", function () {
  const targetDate = new Date("2025-12-01T00:00:00").getTime();
  let timerInterval;

  const timerElement = document.querySelector("#timer");
  const toolsBtn = document.querySelector(".tools-btn");
  const tools = document.querySelector(".tools");
  const overlay = document.querySelector(".overlay");
  const closeBtn = document.querySelector(".ri-close-line");

  // متد برای فرمت زمان
  function formatTime(value) {
    return value.toString().padStart(2, "0");
  }

  // متد به‌روزرسانی تایمر
  function updateTimer() {
    const currentDate = new Date().getTime();
    const timeRemaining = targetDate - currentDate;

    if (timeRemaining <= 0) {
      clearInterval(timerInterval);
      if (timerElement) timerElement.textContent = "زمان به پایان رسید!";
      return;
    }

    const days = Math.floor(timeRemaining / (1000 * 60 * 60 * 24));
    const hours = Math.floor((timeRemaining % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
    const minutes = Math.floor((timeRemaining % (1000 * 60 * 60)) / (1000 * 60));
    const seconds = Math.floor((timeRemaining % (1000 * 60)) / 1000);

    document.querySelector(".days").textContent = days;
    document.querySelector(".hour").textContent = formatTime(hours);
    document.querySelector(".minute").textContent = formatTime(minutes);
    document.querySelector(".seconds").textContent = formatTime(seconds);
  }

  // شروع تایمر
  function startTimer() {
    timerInterval = setInterval(updateTimer, 1000);
    updateTimer();
  }

  // مدیریت تصاویر Vendor
  function updateVendorImage(index) {
    const vendorCover = document.querySelector(".vendor-cover");
    const vendorLogo = document.querySelector(".vender-logo");
    if (vendorCover && vendorLogo) {
      vendorCover.src = `../assets/images/vendors/img-${index + 1}.jpg`;
      vendorLogo.src = `../assets/images/vendors/vendor-${index + 1}.jpg`;
    }
  }

  // مدیریت Sidebar
  function toggleSidebar(show) {
    if (tools && overlay) {
      tools.style.right = show ? "0" : "-18.75rem";
      overlay.classList.toggle("invisible", !show);
      overlay.classList.toggle("opacity-50", show);
      overlay.classList.toggle("opacity-0", !show);
    }
  }

  if (toolsBtn && tools && overlay && closeBtn) {
    toolsBtn.addEventListener("click", () => toggleSidebar(true));
    overlay.addEventListener("click", () => toggleSidebar(false));
    closeBtn.addEventListener("click", () => toggleSidebar(false));
  } else {
    console.error("Some required elements are missing in the DOM.");
  }

  // افزودن Event به Vendorها
  const vendors = document.querySelectorAll(".vendor");
  vendors.forEach((vendor, index) => {
    vendor.addEventListener("click", () => {
      vendors.forEach((v) => v.classList.remove("border-primary"));
      vendor.classList.add("border-primary");
      updateVendorImage(index);
    });
  });

  startTimer(); // اجرای تایمر
});

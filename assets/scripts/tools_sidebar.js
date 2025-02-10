document.addEventListener("DOMContentLoaded", function () {
    const colorOptions = document.querySelectorAll("#change-color span");

    function applyTextColor(newColor) {
        const oldColor = localStorage.getItem("themeTextColor") || "primary";

        document.querySelectorAll(`[class*='text-${oldColor}']`).forEach((el) => {
            el.classList.replace(`text-${oldColor}`, `text-${newColor}`);
        });

        localStorage.setItem("themeTextColor", newColor);
    }

    function changeTextColor(event) {
        const newColor = event.target.dataset.color;
        if (!newColor) return;

        applyTextColor(newColor);
        updateSelectedIcon(event.target);
    }

    function updateSelectedIcon(selectedSpan) {
        // حذف هر آیکونی که قبلاً اضافه شده است
        document.querySelectorAll("#change-color span i").forEach(icon => icon.remove());

        // ایجاد آیکون جدید
        const icon = document.createElement("i");
        icon.className = "ri-check-double-line text-white";
        icon.style.fontSize = "1.6rem"; // کمی فاصله برای زیباتر شدن

        // اضافه کردن آیکون به span انتخاب‌شده
        selectedSpan.appendChild(icon);

        // ذخیره انتخاب در localStorage
        localStorage.setItem("selectedColor", selectedSpan.dataset.color);
    }

    function loadSavedTextColor() {
        const savedColor = localStorage.getItem("themeTextColor");
        if (!savedColor) return;

        document.querySelectorAll("[class*='text-primary']").forEach((el) => {
            el.classList.forEach((className) => {
                if (className.includes("text-primary")) {
                    el.classList.replace(className, `text-${savedColor}`);
                }
            });
        });

        // بازیابی آیکون انتخاب شده
        const selectedColor = localStorage.getItem("selectedColor");
        if (selectedColor) {
            const selectedSpan = [...colorOptions].find(span => span.dataset.color === selectedColor);
            if (selectedSpan) {
                updateSelectedIcon(selectedSpan);
            }
        }
    }

    // اضافه کردن رویداد کلیک به spanهای رنگ
    colorOptions.forEach((option) => {
        option.addEventListener("click", changeTextColor);
    });

    // بارگذاری رنگ ذخیره‌شده
    loadSavedTextColor();



    // Dark Mode
    const darkModeBtn = document.getElementById("DarkMode");
    const lightModeBtn = document.getElementById("LightMode");

    function updateActiveButton(activeBtn, inactiveBtn) {
        activeBtn.querySelector("div").classList.add("border-primary");
        inactiveBtn.querySelector("div").classList.remove("border-primary");
    }

    // بررسی وضعیت ذخیره‌شده در localStorage هنگام بارگذاری صفحه
    if (localStorage.theme === "dark") {
        document.documentElement.classList.add("dark");
        updateActiveButton(darkModeBtn, lightModeBtn);
    } else {
        document.documentElement.classList.remove("dark");
        updateActiveButton(lightModeBtn, darkModeBtn);
    }

    // دکمه دارک مود
    darkModeBtn.addEventListener("click", function () {
        document.documentElement.classList.add("dark");
        localStorage.setItem("theme", "dark");
        updateActiveButton(darkModeBtn, lightModeBtn);
    });

    // دکمه لایت مود
    lightModeBtn.addEventListener("click", function () {
        document.documentElement.classList.remove("dark");
        localStorage.setItem("theme", "light");
        updateActiveButton(lightModeBtn, darkModeBtn);
    });
});

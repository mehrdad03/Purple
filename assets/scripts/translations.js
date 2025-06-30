document.addEventListener("DOMContentLoaded", () => {

const TRANSLATIONS = {
    en: {
      account:     "Account",
      login:       "Login",
      register:    "Register",
      checkout:    "Checkout",
      items_3:     "3 items",
      wishlist:    "Wishlist",
      items_4:     "4 items",
      cart:        "Cart",
      home:        "Home",
      categories:  "Categories",
      category_1:  "Category-1",
      products:    "Products",
      pages:       "Pages",
      offers:      "Offers",
      istanbul:    "Istanbul",
      berlin:      "Berlin",
      madrid:      "Madrid",
      dubai:       "Dubai",
      lang_en:     "EN",
      lang_tr:     "TR",
      lang_fr:     "FR",
      lang_de:     "DE",
      flat30:      "Flat 30% Off",
      find_your_1: "Find your",
      find_your_2: "perfect",
      find_your_3: "New Collection",
      shop_now:    "Shop Now",
      explore_cat: "Explore",
      categories2: "Categories",
      category_name: "Category name",
      item_number:   "Item number",
      deal_title_1: "Day of the",
      deal_title_2: "deal",
      deal_tagline: "Don't wait. The time will never be just right.",
      days:        "Days",
      // breadcrumbs
      bc_all:      "All",
      bc_snack:    "Snack & Spices",
      bc_fruits:   "Fruits",
      bc_veg:      "Vegetables",
      // new arrivals
      new_arrivals_1: "New",
      new_arrivals_2: "Arrivals",
      new_arrivals_tag: "Shop online for new arrivals and get free shipping!",
      // services
      svc_payment: "Payment Secure",
      svc_hours:   "Contact us 24 hours a day, 7 days a week",
      // vendors
      top_vendors: "Top Vendors",
      vendors_sub: "Discover Our Trusted Partners:\nExcellence & Reliability in Every choice",
      vendor_name: "Mira Fashion Pvt. Ltd.",
      vendor_products: "Fruits (5) | Vegetables (30) | Snacks (09)",
      vendor_sales:    "Sales - 587",
      // testimonials
      testimonials:   "Testimonials",
      t_name:         "Nikki Albart",
      t_role:         "(Team Leader)",
      t_text:         "“Lorem ipsum dolor sit amet consectetur adipisicing elit. Architecto at sint eligendi possimus perspiciatis asperiores reiciendis hic amet alias aut quaerat maiores blanditiis.”",
      // blog
      blog_date:      "June 30,2024 - organic",
      blog_title:     "Marketing Guide: 5 Steps to Success.",
      // footer categories
      footer_cat:     "Category",
      ft_dairy:       "Dairy & Milk",
      ft_snack:       "Snack & Spice",
      ft_fastfood:    "Fast Food",
      ft_juice:       "Juice & Drinks",
      ft_bakery:      "Bakery",
      // footer contact
      contact:        "Contact",
      address:        "971 Lajamni, Motavarachha, Surat, Gujarat, India 394101.",
      phone:          "+00 9876543210",
      email:          "example@email.com",
      // copyright
      copyright:     "Copyright © 2025",
      copyright_by:  "ful-stak.dev",
      all_rights:    "all rights reserved."
    },
    fa: {
      account:     "حساب کاربری",
      login:       "ورود",
      register:    "ثبت نام",
      checkout:    "تسویه حساب",
      items_3:     "۳ آیتم",
      wishlist:    "علاقه‌مندی‌ها",
      items_4:     "۴ آیتم",
      cart:        "سبد خرید",
      home:        "خانه",
      categories:  "دسته‌بندی‌ها",
      category_1:  "دسته-۱",
      products:    "محصولات",
      pages:       "صفحات",
      offers:      "پیشنهادات",
      istanbul:    "استانبول",
      berlin:      "برلین",
      madrid:      "مادرید",
      dubai:       "دبی",
      lang_en:     "انگلیسی",
      lang_tr:     "ترکی",
      lang_fr:     "فرانسه",
      lang_de:     "آلمانی",
      flat30:      "۳۰٪ تخفیف",
      find_your_1: "بیابید",
      find_your_2: "کامل",
      find_your_3: "مجموعهٔ جدید",
      shop_now:    "همین‌الان بخر",
      explore_cat: "جستجوی",
      categories2: "دسته‌ها",
      category_name: "نام دسته",
      item_number:   "تعداد آیتم",
      deal_title_1: "روز ",
      deal_title_2: "تخفیف",
      deal_tagline: "منتظر نمانید. هیچ‌گاه زمان مناسب نخواهد بود.",
      days:        "روز",
      bc_all:      "همه",
      bc_snack:    "تنقلات و ادویه",
      bc_fruits:   "میوه‌ها",
      bc_veg:      "سبزیجات",
      new_arrivals_1: "جدید",
      new_arrivals_2: "وارد شده‌ها",
      new_arrivals_tag: "آنلاین خرید کنید و ارسال رایگان بگیرید!",
      svc_payment: "پرداخت امن",
      svc_hours:   "پشتیبانی ۲۴ ساعته، ۷ روز هفته",
      top_vendors: "تامین‌کنندگان برتر",
      vendors_sub: "شرکای مورد اعتماد ما را\nکشف کنید: کیفیت و اعتماد در هر انتخاب",
      vendor_name: "میرا فشن خصوصی",
      vendor_products: "میوه (۵) | سبزیجات (۳۰) | تنقلات (۰۹)",
      vendor_sales:    "فروش – ۵۸۷",
      testimonials:   "نظرات",
      t_name:         "نیکی آلبرت",
      t_role:         "(رهبر تیم)",
      t_text:         "“لورم ایپسوم دولور سیت …”",
      blog_date:      "۳۰ ژوئن ۲۰۲۴ - ارگانیک",
      blog_title:     "راهنمای بازاریابی: ۵ گام تا موفقیت.",
      footer_cat:     "دسته‌بندی",
      ft_dairy:       "لبنیات",
      ft_snack:       "تنقلات و ادویه",
      ft_fastfood:    "فست‌فود",
      ft_juice:       "آب‌میوه و نوشیدنی",
      ft_bakery:      "نان و شیرینی",
      contact:        "تماس",
      address:        "۹۷۱ لاجامنی، موتاواراچا، سورت، گجرات، هند ۳۹۴۱۰۱",
      phone:          "+۰۰ ۹۸۷۶۵۴۳۲۱۰",
      email:          "example@email.com",
      copyright:     "کپی‌رایت © ۲۰۲۵",
      copyright_by:  "ful-stak.dev",
      all_rights:    "تمام حقوق محفوظ است."
    }
  };

  // ۱. المان‌های data-key را به متن ترجمه‌شده بروز می‌کند
function applyTranslations(lang) {
    document.querySelectorAll("[data-key]").forEach(el => {
      const key = el.dataset.key;
      const txt = TRANSLATIONS[lang][key];
      if (txt !== undefined) el.textContent = txt;
    });
  }
  
  // ۲. وقتی جهت تغییر می‌کند، زبان را ست می‌کند و ترجمه را اعمال می‌کند
  function changeDirection(dir) {
    document.documentElement.setAttribute("dir", dir);
    localStorage.setItem("direction", dir);
    const lang = dir === "rtl" ? "fa" : "en";
    applyTranslations(lang);
    // … بقیه منطق شما برای فعال/غیرفعال کردن دکمه‌ها …
  }
  
  // ۳. تنظیم اولیه بر اساس ذخیره‌شده
  const savedDir = localStorage.getItem("direction") || "ltr";
  changeDirection(savedDir);
  
  // ۴. مپ کردن کلیک روی دکمه‌های LTR/RTL
  document.querySelectorAll("#direction-toggle [data-dir]")
    .forEach(btn => btn.addEventListener("click", () => {
      changeDirection(btn.dataset.dir);
    }));
  
});
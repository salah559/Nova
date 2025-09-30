// Language content
const translations = {
  en: {
    nav_hero: "Home",
    nav_about: "About Us",
    nav_services: "Services",
    nav_portfolio: "Portfolio",
    nav_contact: "Contact",
    hero_headline: "Turning Ideas into Reality",
    hero_description: "Novaweb is your trusted partner in crafting stunning websites and digital solutions.",
    about_title: "About Us",
    about_text: "Novaweb is a group of passionate web developers specializing in custom websites, e-commerce platforms, FiveM server websites, and tailored web solutions. Our vision is to turn your ideas into exceptional digital realities.",
    services_title: "Services",
    service_website: "Website Development",
    service_website_desc: "Modern, responsive, and fast websites tailored for your needs.",
    service_ecommerce: "E-commerce Platforms",
    service_ecommerce_desc: "Robust online stores that drive sales and engagement.",
    service_fivem: "FiveM Server Websites",
    service_fivem_desc: "Custom sites designed specifically for FiveM server communities.",
    service_custom: "Custom Web Solutions",
    service_custom_desc: "Unique web tools and solutions developed to fit your business.",
    portfolio_title: "Portfolio",
    contact_title: "Contact Us",
    contact_name: "Name",
    contact_email: "Email",
    contact_message: "Message",
    contact_send: "Send Message",
    contact_direct: "Direct Contact:"
  },
  ar: {
    nav_hero: "الرئيسية",
    nav_about: "من نحن",
    nav_services: "خدماتنا",
    nav_portfolio: "الأعمال",
    nav_contact: "اتصل بنا",
    hero_headline: "تحويل الأفكار إلى واقع",
    hero_description: "نوفاوِب شريكك الموثوق لصناعة مواقع إلكترونية وحلول رقمية مميزة.",
    about_title: "من نحن",
    about_text: "نوفاوِب عبارة عن مجموعة من مطوري الويب الشغوفين متخصصين في المواقع المخصصة، منصات التجارة الإلكترونية، مواقع خوادم FiveM، والحلول الرقمية المفصلة. رؤيتنا تحويل أفكارك إلى واقع رقمي استثنائي.",
    services_title: "خدماتنا",
    service_website: "تطوير المواقع",
    service_website_desc: "مواقع عصرية، متجاوبة وسريعة مصممة خصيصًا لك.",
    service_ecommerce: "منصات التجارة الإلكترونية",
    service_ecommerce_desc: "متاجر إلكترونية قوية تزيد من المبيعات والتفاعل.",
    service_fivem: "مواقع خوادم FiveM",
    service_fivem_desc: "مواقع مخصصة لمجتمعات خوادم FiveM.",
    service_custom: "حلول ويب مخصصة",
    service_custom_desc: "أدوات وحلول رقمية فريدة تناسب عملك.",
    portfolio_title: "الأعمال",
    contact_title: "اتصل بنا",
    contact_name: "الاسم",
    contact_email: "البريد الإلكتروني",
    contact_message: "رسالتك",
    contact_send: "إرسال الرسالة",
    contact_direct: "للتواصل المباشر:"
  }
};

let currentLang = 'en';

const langToggleBtn = document.getElementById('lang-toggle');

function updateContentLanguage() {
  document.documentElement.lang = currentLang;
  if (currentLang === 'ar') {
    document.documentElement.dir = 'rtl';
  } else {
    document.documentElement.dir = 'ltr';
  }

  // Update all elements with data-i18n attribute
  document.querySelectorAll('[data-i18n]').forEach(el => {
    const key = el.getAttribute('data-i18n');
    if (translations[currentLang] && translations[currentLang][key]) {
      el.textContent = translations[currentLang][key];
    }
  });

  // Update nav links for active language
  langToggleBtn.textContent = currentLang === 'en' ? 'ع / EN' : 'EN / ع';
}

// Toggle language on button click
langToggleBtn.addEventListener('click', () => {
  currentLang = currentLang === 'en' ? 'ar' : 'en';
  updateContentLanguage();
});

// Initialize content language
updateContentLanguage();

// Contact form submission (optional - placeholder)
document.getElementById('contact-form').addEventListener('submit', (e) => {
  e.preventDefault();
  alert(currentLang === 'en' ? "Thank you for contacting Novaweb!" : "شكرًا لتواصلك مع نوفاوِب!");
  e.target.reset();
});

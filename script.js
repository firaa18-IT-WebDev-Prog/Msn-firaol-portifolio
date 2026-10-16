// Object translations kan Afaan sadiif qophaa'e
const translations = {
  om: {
    aboutTitle: "Waa'ee Koo (About Me)",
    aboutText1: "Maqaan koo <strong>Firaol Fayisa Kabeta</strong> jedhama.",
    aboutText2: "Digirii koo jalqabaa Yuunivarsiitii Amboo irraa gosa barnootaa <strong>Information Technology (IT)</strong>'n baradhee eebbifameera.",
    aboutText3: "Eebbifameen booda gosa barnootaa Information Technology fi Web Design barsiiseera. Leenjiiwwan IT dabalataa (Coding, Computer Security, Maintenance, Hardware & Networking...) fudhadheera.",
    aboutText4: "Amma immoo dandeettii dhuunfaa koo cimsadhee programming languages, coding, fi website irratti xiyyeeffadhee ogummaa programmer fi web developer gonfadhee hojjechuuf fuulduratti imalaan jira.",
    aboutSummary: "🚀 <strong>Waaqayyos na gargaara.:</strong> Galatoomaa!"
  },
  en: {
    aboutTitle: "About Me",
    aboutText1: "My name is <strong>Firaol Fayisa Kabeta</strong>.",
    aboutText2: "I graduated with a Bachelor's Degree in <strong>Information Technology (IT)</strong> from Ambo University.",
    aboutText3: "After graduation, I taught Information Technology and Web Design. I have taken additional IT training (Coding, Computer Security, Maintenance, Hardware & Networking...).",
    aboutText4: "Now, I am enhancing my personal skills by focusing on programming languages, coding, and web design to work professionally as a programmer and web developer.",
    aboutSummary: "🚀 <strong>God will help me.:</strong> Thank you!"
  },
  am: {
    aboutTitle: "ስለ እኔ (About Me)",
    aboutText1: "ስሜ <strong>ፍራኦል ፈይሳ ቀበታ</strong> ይባላል።",
    aboutText2: "የመጀመሪያ ዲግሪዬን ከአምቦ ዩኒቨርሲቲ በ <strong>Information Technology (IT)</strong> ተመርቄአለሁ።",
    aboutText3: "ከተመረቅኩ በኋላ የInformation Technology እና Web Design አስተምሬአለሁ። மேadditional IT பயிற்ሶችን (Coding, Computer Security, Maintenance, Hardware & Networking...) ወስጃለሁ።",
    aboutText4: "አሁን ደግሞ የግል ክህሎቴን በማጠናከር በprogramming languages, coding, እና website ላይ ትኩረት በማድረግ እንደ programmer እና web developer ለመስራት ወደፊት በመጓዝ ላይ ነኝ።",
    aboutSummary: "🚀 <strong>እግዚአብሔር ይረዳኛል።:</strong> አመሰግናለሁ!"
  }
};

// Function afaan jijjiiru
function changeLanguage(lang) {
  const t = translations[lang];
  if (!t) return;

  if (document.getElementById('about-title')) document.getElementById('about-title').innerText = t.aboutTitle;
  if (document.getElementById('about-text-1')) document.getElementById('about-text-1').innerHTML = t.aboutText1;
  if (document.getElementById('about-text-2')) document.getElementById('about-text-2').innerHTML = t.aboutText2;
  if (document.getElementById('about-text-3')) document.getElementById('about-text-3').innerHTML = t.aboutText3;
  if (document.getElementById('about-text-4')) document.getElementById('about-text-4').innerHTML = t.aboutText4;
  if (document.getElementById('about-summary-text')) document.getElementById('about-summary-text').innerHTML = t.aboutSummary;
}

// Toggle About Section (Banu/Cufu)
function toggleAbout() {
  const card = document.getElementById('about-card');
  const btn = document.getElementById('toggle-about-btn');
  if (card.style.display === 'none' || card.style.display === '') {
    card.style.display = 'block';
    if (btn) btn.innerHTML = '✖ Cufi / Close';
  } else {
    card.style.display = 'none';
    if (btn) btn.innerHTML = '📖 Seenaa Koo Dubbisi / Read More';
  }
}

// Toggle Contact Info Section
function toggleContactInfo() {
  const card = document.getElementById('contact-card');
  if (card.style.display === 'none' || card.style.display === '') {
    card.style.display = 'block';
  } else {
    card.style.display = 'none';
  }
}

// Toggle Bank Account Number
function toggleBankAccount() {
  const accNum = document.getElementById('bank-acc-num');
  const accHidden = document.getElementById('bank-acc-hidden');
  const btn = document.getElementById('toggle-bank-btn');

  if (accNum.style.display === 'none') {
    accNum.style.display = 'inline';
    accHidden.style.display = 'none';
    btn.innerHTML = '🙈 Lakkoofsa Herregaa Dhoksi / Hide Account';
  } else {
    accNum.style.display = 'none';
    accHidden.style.display = 'inline';
    btn.innerHTML = '👁️ Lakkoofsa Herregaa Mul\'isi / Show Account';
  }
}
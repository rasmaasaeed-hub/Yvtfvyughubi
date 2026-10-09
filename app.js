const surahs = [
  { number: 1, name: "الفاتحة", emoji: "🗝️" },
  { number: 2, name: "البقرة", emoji: "🐄" },
  { number: 3, name: "آل عمران", emoji: "👨‍👩‍👧" },
  { number: 4, name: "النساء", emoji: "👩" },
  { number: 5, name: "المائدة", emoji: "🍽️" },
  { number: 6, name: "الأنعام", emoji: "🐏" },
  { number: 7, name: "الأعراف", emoji: "⛰️" },
  { number: 8, name: "الأنفال", emoji: "🎁" },
  { number: 9, name: "التوبة", emoji: "🤲" },
  { number: 10, name: "يونس", emoji: "🐋" },
  { number: 11, name: "هود", emoji: "🚢" },
  { number: 12, name: "يوسف", emoji: "👕" },
  { number: 13, name: "الرعد", emoji: "⚡" },
  { number: 14, name: "إبراهيم", emoji: "🔥" },
  { number: 15, name: "الحجر", emoji: "🪨" },
  { number: 16, name: "النحل", emoji: "🐝" },
  { number: 17, name: "الإسراء", emoji: "🌙" },
  { number: 18, name: "الكهف", emoji: "🕳️" },
  { number: 19, name: "مريم", emoji: "👶" },
  { number: 20, name: "طه", emoji: "🌿" },
  { number: 21, name: "الأنبياء", emoji: "📜" },
  { number: 22, name: "الحج", emoji: "🕋" },
  { number: 23, name: "المؤمنون", emoji: "🕌" },
  { number: 24, name: "النور", emoji: "💡" },
  { number: 25, name: "الفرقان", emoji: "⚖️" },
  { number: 26, name: "الشعراء", emoji: "✍️" },
  { number: 27, name: "النمل", emoji: "🐜" },
  { number: 28, name: "القصص", emoji: "📖" },
  { number: 29, name: "العنكبوت", emoji: "🕷️" },
  { number: 30, name: "الروم", emoji: "🏛️" },
  { number: 31, name: "لقمان", emoji: "👴" },
  { number: 32, name: "السجدة", emoji: "🙇" },
  { number: 33, name: "الأحزاب", emoji: "🛡️" },
  { number: 34, name: "سبأ", emoji: "👑" },
  { number: 35, name: "فاطر", emoji: "🌌" },
  { number: 36, name: "يس", emoji: "💚" },
  { number: 37, name: "الصافات", emoji: "🪽" },
  { number: 38, name: "ص", emoji: "🐑" },
  { number: 39, name: "الزمر", emoji: "👥" },
  { number: 40, name: "غافر", emoji: "🤍" },
  { number: 41, name: "فصلت", emoji: "📚" },
  { number: 42, name: "الشورى", emoji: "🗣️" },
  { number: 43, name: "الزخرف", emoji: "💎" },
  { number: 44, name: "الدخان", emoji: "🌫️" },
  { number: 45, name: "الجاثية", emoji: "🧎" },
  { number: 46, name: "الأحقاف", emoji: "🏜️" },
  { number: 47, name: "محمد", emoji: "☝️" },
  { number: 48, name: "الفتح", emoji: "🔓" },
  { number: 49, name: "الحجرات", emoji: "🚪" },
  { number: 50, name: "ق", emoji: "🌳" },
  { number: 51, name: "الذاريات", emoji: "🌬️" },
  { number: 52, name: "الطور", emoji: "🏔️" },
  { number: 53, name: "النجم", emoji: "⭐" },
  { number: 54, name: "القمر", emoji: "🌕" },
  { number: 55, name: "الرحمن", emoji: "🌸" },
  { number: 56, name: "الواقعة", emoji: "🌍" },
  { number: 57, name: "الحديد", emoji: "🔩" },
  { number: 58, name: "المجادلة", emoji: "💬" },
  { number: 59, name: "الحشر", emoji: "➡️" },
  { number: 60, name: "الممتحنة", emoji: "📝" },
  { number: 61, name: "الصف", emoji: "🧱" },
  { number: 62, name: "الجمعة", emoji: "📅" },
  { number: 63, name: "المنافقون", emoji: "🎭" },
  { number: 64, name: "التغابن", emoji: "🔄" },
  { number: 65, name: "الطلاق", emoji: "💔" },
  { number: 66, name: "التحريم", emoji: "🚫" },
  { number: 67, name: "الملك", emoji: "🏰" },
  { number: 68, name: "القلم", emoji: "🖊️" },
  { number: 69, name: "الحاقة", emoji: "❗" },
  { number: 70, name: "المعارج", emoji: "🪜" },
  { number: 71, name: "نوح", emoji: "🌧️" },
  { number: 72, name: "الجن", emoji: "👤" },
  { number: 73, name: "المزمل", emoji: "🧣" },
  { number: 74, name: "المدثر", emoji: "🛏️" },
  { number: 75, name: "القيامة", emoji: "🌋" },
  { number: 76, name: "الإنسان", emoji: "🧍" },
  { number: 77, name: "المرسلات", emoji: "💨" },
  { number: 78, name: "النبأ", emoji: "📰" },
  { number: 79, name: "النازعات", emoji: "✨" },
  { number: 80, name: "عبس", emoji: "🙁" },
  { number: 81, name: "التكوير", emoji: "☀️" },
  { number: 82, name: "الانفطار", emoji: "🌐" },
  { number: 83, name: "المطففين", emoji: "⚱️" },
  { number: 84, name: "الانشقاق", emoji: "🌑" },
  { number: 85, name: "البروج", emoji: "🌟" },
  { number: 86, name: "الطارق", emoji: "🌠" },
  { number: 87, name: "الأعلى", emoji: "⬆️" },
  { number: 88, name: "الغاشية", emoji: "🌪️" },
  { number: 89, name: "الفجر", emoji: "🌅" },
  { number: 90, name: "البلد", emoji: "🏙️" },
  { number: 91, name: "الشمس", emoji: "🌞" },
  { number: 92, name: "الليل", emoji: "🌚" },
  { number: 93, name: "الضحى", emoji: "🌤️" },
  { number: 94, name: "الشرح", emoji: "🫀" },
  { number: 95, name: "التين", emoji: "🍈" },
  { number: 96, name: "العلق", emoji: "🩸" },
  { number: 97, name: "القدر", emoji: "🌃" },
  { number: 98, name: "البينة", emoji: "🔎" },
  { number: 99, name: "الزلزلة", emoji: "🫨" },
  { number: 100, name: "العاديات", emoji: "🐎" },
  { number: 101, name: "القارعة", emoji: "💥" },
  { number: 102, name: "التكاثر", emoji: "💰" },
  { number: 103, name: "العصر", emoji: "⏳" },
  { number: 104, name: "الهمزة", emoji: "🗯️" },
  { number: 105, name: "الفيل", emoji: "🐘" },
  { number: 106, name: "قريش", emoji: "🐫" },
  { number: 107, name: "الماعون", emoji: "🥣" },
  { number: 108, name: "الكوثر", emoji: "⛲" },
  { number: 109, name: "الكافرون", emoji: "↔️" },
  { number: 110, name: "النصر", emoji: "🏆" },
  { number: 111, name: "المسد", emoji: "🪢" },
  { number: 112, name: "الإخلاص", emoji: "💠" },
  { number: 113, name: "الفلق", emoji: "🌄" },
  { number: 114, name: "الناس", emoji: "🫂" }
];

const grid = document.getElementById("surahGrid");
const audio = document.getElementById("quranAudio");
const playButton = document.getElementById("mainPlayButton");
const currentSurahName = document.getElementById("currentSurahName");
const setupAudioButton = document.getElementById("setupAudioButton");
const audioFolderInput = document.getElementById("audioFolderInput");

const DB_NAME = "MushafiAudioDB";
const STORE_NAME = "surahAudio";

let currentSurah = null;
let loadedSurahNumber = null;
let currentAudioURL = null;
let lastSaveTime = 0;
let playRequest = 0;
let importing = false;

// فتح قاعدة بيانات الصوت
function openDB() {
  return new Promise((resolve, reject) => {
    const request = indexedDB.open(DB_NAME, 1);

    request.onupgradeneeded = () => {
      const db = request.result;

      if (!db.objectStoreNames.contains(STORE_NAME)) {
        db.createObjectStore(STORE_NAME);
      }
    };

    request.onsuccess = () => resolve(request.result);
    request.onerror = () => reject(request.error);
  });
}

// حفظ ملف صوت واحد
async function saveAudio(number, file) {
  const db = await openDB();

  return new Promise((resolve, reject) => {
    const tx = db.transaction(STORE_NAME, "readwrite");

    tx.objectStore(STORE_NAME).put(file, number);

    tx.oncomplete = () => {
      db.close();
      resolve();
    };

    tx.onerror = () => {
      db.close();
      reject(tx.error);
    };

    tx.onabort = () => {
      db.close();
      reject(tx.error || new Error("Storage failed"));
    };
  });
}

// قراءة ملف صوت
async function getAudio(number) {
  const db = await openDB();

  return new Promise((resolve, reject) => {
    const tx = db.transaction(STORE_NAME, "readonly");
    const request = tx.objectStore(STORE_NAME).get(number);

    request.onsuccess = () => resolve(request.result);
    request.onerror = () => reject(request.error);

    tx.oncomplete = () => db.close();
  });
}

// حساب عدد السور المحفوظة
async function countAudio() {
  const db = await openDB();

  return new Promise((resolve, reject) => {
    const tx = db.transaction(STORE_NAME, "readonly");
    const request = tx.objectStore(STORE_NAME).count();

    request.onsuccess = () => resolve(request.result);
    request.onerror = () => reject(request.error);

    tx.oncomplete = () => db.close();
  });
}

// تحديث زر إعداد الصوت
async function updateSetupButton() {
  try {
    const count = await countAudio();

    setupAudioButton.style.display =
      count === 114 ? "none" : "block";

    setupAudioButton.textContent =
      count === 0
        ? "إعداد الصوت"
        : `إعداد الصوت (${count}/114)`;

  } catch (error) {
    console.error(error);

    setupAudioButton.style.display = "block";
    setupAudioButton.textContent = "إعداد الصوت";
  }
}

// فتح نافذة اختيار ملفات MP3
setupAudioButton.addEventListener("click", () => {
  if (!importing) {
    audioFolderInput.click();
  }
});

// استيراد ملفات السور
audioFolderInput.addEventListener("change", async () => {
  const files = Array.from(audioFolderInput.files || []);

  if (files.length === 0) return;

  importing = true;
  setupAudioButton.disabled = true;

  let imported = 0;
  let failed = 0;
  let skipped = 0;

  try {
    if (navigator.storage && navigator.storage.persist) {
      await navigator.storage.persist();
    }
  } catch (error) {
    console.log("Persistent storage unavailable:", error);
  }

  for (const file of files) {
    const match = file.name.match(/^(\d{1,3})\.mp3$/i);

    if (!match) {
      skipped++;
      continue;
    }

    const number = Number(match[1]);

    if (number < 1 || number > 114) {
      skipped++;
      continue;
    }

    try {
      await saveAudio(number, file);
      imported++;
    } catch (error) {
      console.error("Import failed:", file.name, error);
      failed++;
    }

    setupAudioButton.textContent =
      `جاري الحفظ: ${imported}/${files.length}`;
  }

  importing = false;
  setupAudioButton.disabled = false;
  audioFolderInput.value = "";

  let total = 0;

  try {
    total = await countAudio();
  } catch (error) {
    console.error(error);
  }

  await updateSetupButton();

  alert(
    `تم حفظ ${imported} ملف.\n` +
    `السور الموجودة: ${total}/114\n` +
    `تعذر حفظ: ${failed}\n` +
    `ملفات غير مطابقة: ${skipped}`
  );
});

// إنشاء بوكسات السور
surahs.forEach((surah) => {
  const button = document.createElement("button");

  button.className = "surah-button";
  button.textContent = `${surah.name} ${surah.emoji}`;

  button.addEventListener("click", () => {
    playSurah(surah);
  });

  grid.appendChild(button);
});

// حفظ موضع 
document.getElementById("mainPlayButton").onclick = () => {
  alert("جاري محاولة تشغيل الفاتحة");
  playSurah(surahs[0]);
};
// 🔤 BURÇ ALGILAMA
const burclar = {
  "koc":"koc","koç":"koc",
  "boga":"boga","boğa":"boga",
  "ikizler":"ikizler",
  "yengec":"yengec","yengeç":"yengec",
  "aslan":"aslan",
  "basak":"basak","başak":"basak",
  "terazi":"terazi",
  "akrep":"akrep",
  "yay":"yay",
  "oglak":"oglak","oğlak":"oglak",
  "kova":"kova",
  "balik":"balik","balık":"balik"
};

// 📦 VERİLER
const data = {
  koc:{tanitim:"mp3/koc_tanitim.mp3",ozellikler:["Özellik 1","Özellik 2"],gezegen:"mp3/koc_gezegen.mp3",element:"mp3/koc_element.mp3",sayi:"mp3/koc_sayi.mp3",simge:"icons/koc.png",gezegenVideo:"icons/mars.mp4",elementIcon:"icons/ates.png",sayilar:"1, 8, 17"},
  boga:{tanitim:"mp3/boga_tanitim.mp3",ozellikler:["Özellik 1","Özellik 2"],gezegen:"mp3/boga_gezegen.mp3",element:"mp3/boga_element.mp3",sayi:"mp3/boga_sayi.mp3",simge:"icons/boga.png",gezegenVideo:"icons/venus.mp4",elementIcon:"icons/toprak.png",sayilar:"2, 6, 9"},
  ikizler:{tanitim:"mp3/ikizler_tanitim.mp3",ozellikler:["Özellik 1","Özellik 2"],gezegen:"mp3/ikizler_gezegen.mp3",element:"mp3/ikizler_element.mp3",sayi:"mp3/ikizler_sayi.mp3",simge:"icons/ikizler.png",gezegenVideo:"icons/merkur.mp4",elementIcon:"icons/hava.png",sayilar:"3, 7, 12"},
  yengec:{tanitim:"mp3/yengec_tanitim.mp3",ozellikler:["Özellik 1","Özellik 2"],gezegen:"mp3/yengec_gezegen.mp3",element:"mp3/yengec_element.mp3",sayi:"mp3/yengec_sayi.mp3",simge:"icons/yengec.png",gezegenVideo:"icons/moon.mp4",elementIcon:"icons/su.png",sayilar:"2, 7, 11"},
  aslan:{tanitim:"mp3/aslan_tanitim.mp3",ozellikler:["Özellik 1","Özellik 2"],gezegen:"mp3/aslan_gezegen.mp3",element:"mp3/aslan_element.mp3",sayi:"mp3/aslan_sayi.mp3",simge:"icons/aslan.png",gezegenVideo:"icons/sun.mp4",elementIcon:"icons/ates.png",sayilar:"1, 5, 9"},
  basak:{tanitim:"mp3/basak_tanitim.mp3",ozellikler:["Özellik 1","Özellik 2"],gezegen:"mp3/basak_gezegen.mp3",element:"mp3/basak_element.mp3",sayi:"mp3/basak_sayi.mp3",simge:"icons/basak.png",gezegenVideo:"icons/merkur(1).mp4",elementIcon:"icons/toprak.png",sayilar:"5, 14, 23"},
  terazi:{tanitim:"mp3/terazi_tanitim.mp3",ozellikler:["Özellik 1","Özellik 2"],gezegen:"mp3/terazi_gezegen.mp3",element:"mp3/terazi_element.mp3",sayi:"mp3/terazi_sayi.mp3",simge:"icons/terazi.png",gezegenVideo:"icons/venus(1).mp4",elementIcon:"icons/hava.png",sayilar:"6, 15, 24"},
  akrep:{tanitim:"mp3/akrep_tanitim.mp3",ozellikler:["Özellik 1","Özellik 2"],gezegen:"mp3/akrep_gezegen.mp3",element:"mp3/akrep_element.mp3",sayi:"mp3/akrep_sayi.mp3",simge:"icons/akrep.png",gezegenVideo:"icons/pluton.mp4",elementIcon:"icons/su.png",sayilar:"8, 11, 18"},
  yay:{tanitim:"mp3/yay_tanitim.mp3",ozellikler:["Özellik 1","Özellik 2"],gezegen:"mp3/yay_gezegen.mp3",element:"mp3/yay_element.mp3",sayi:"mp3/yay_sayi.mp3",simge:"icons/yay.png",gezegenVideo:"icons/jupiter.mp4",elementIcon:"icons/ates.png",sayilar:"3, 7, 9"},
  oglak:{tanitim:"mp3/oglak_tanitim.mp3",ozellikler:["Özellik 1","Özellik 2"],gezegen:"mp3/oglak_gezegen.mp3",element:"mp3/oglak_element.mp3",sayi:"mp3/oglak_sayi.mp3",simge:"icons/oglak.png",gezegenVideo:"icons/saturn.mp4",elementIcon:"icons/toprak.png",sayilar:"4, 8, 13"},
  kova:{tanitim:"mp3/kova_tanitim.mp3",ozellikler:["Özellik 1","Özellik 2"],gezegen:"mp3/kova_gezegen.mp3",element:"mp3/kova_element.mp3",sayi:"mp3/kova_sayi.mp3",simge:"icons/kova.png",gezegenVideo:"icons/uranus.mp4",elementIcon:"icons/hava.png",sayilar:"4, 7, 11"},
  balik:{tanitim:"mp3/balik_tanitim.mp3",ozellikler:["Özellik 1","Özellik 2"],gezegen:"mp3/balik_gezegen.mp3",element:"mp3/balik_element.mp3",sayi:"mp3/balik_sayi.mp3",simge:"icons/balik.png",gezegenVideo:"icons/neptun.mp4",elementIcon:"icons/su.png",sayilar:"3, 7, 12"}
};

// 🎯 DOM
const btn = document.getElementById("play-btn");
const burcSimge = document.getElementById("burc-simge");
const elementIcon = document.getElementById("element-icon");
const ozelliklerDisplay = document.getElementById("ozellikler-display");
const sayiDisplay = document.getElementById("sayi-display");
const videoEl = document.getElementById("gezegen-video");

// 🔊 AUDIO
function playAudio(src) {
  return new Promise(resolve => {
    const audio = new Audio(src);
    audio.play();
    audio.onended = resolve;
  });
}

// 🎨 UI
function show(el, src = null) {
  if (src) {
    if (el.tagName === "VIDEO") {
      el.src = src;
      el.currentTime = 0;
      el.play();
    } else {
      el.src = src;
    }
  }
  el.style.display = "block";
}

function hideAll() {
  [burcSimge, elementIcon, videoEl, ozelliklerDisplay, sayiDisplay].forEach(el => el.style.display = "none");
  videoEl.pause();
}

// 🚀 ANİMASYON AKIŞI
async function runShow(burc) {
  try {
    const b = data[burc];
    if (!b) { alert("Burç bulunamadı"); return; }

    hideAll();

    // 1️⃣ TANITIM
    await playAudio(b.tanitim);
    show(burcSimge, b.simge);
    burcSimge.style.transform = "translate(-50%, -50%) scale(1.5)";
    await new Promise(r => setTimeout(r, 1500));

    // 2️⃣ ÖZELLİKLER + GEZEGEN
    hideAll();
    document.body.style.background = "#000";
    show(ozelliklerDisplay);
    show(videoEl, b.gezegenVideo);
    for (let o of b.ozellikler) {
      ozelliklerDisplay.innerText = o;
      await playAudio(b.gezegen); // sesle eş zamanlı
      await new Promise(r => setTimeout(r, 500));
    }

    // 3️⃣ ELEMENT
    hideAll();
    show(elementIcon, b.elementIcon);
    await playAudio(b.element);

    // 4️⃣ SAYILAR
    hideAll();
    sayiDisplay.innerText = b.sayilar;
    show(sayiDisplay);
    sayiDisplay.style.transform = "translateX(-50%) scale(1.5)";
    await playAudio(b.sayi);

    hideAll();
    document.body.style.background = "";
  } catch (err) {
    console.error(err);
    alert("HATA VAR: " + err.message);
  }
}

// 🎤 SES TANIMA
function startListening() {
  const SpeechRecognition = window.SpeechRecognition || window.webkitSpeechRecognition;
  if (!SpeechRecognition) { alert("Tarayıcı desteklemiyor"); return; }

  const recognition = new SpeechRecognition();
  recognition.lang = "tr-TR";
  recognition.start();

  btn.innerText = "Dinleniyor... 🎤";

  recognition.onresult = function(e) {
    const text = e.results[0][0].transcript.toLowerCase();
    btn.innerText = "Burcunu Dinle ve Göster!";

    for (let key in burclar) {
      if (text.includes(key)) {
        runShow(burclar[key]);
        return;
      }
    }
    alert("Burç anlaşılmadı 😅");
  };

  recognition.onerror = function() {
    btn.innerText = "Burcunu Dinle ve Göster!";
    alert("Ses hatası");
  };
}

// 🎯 BUTON
btn.addEventListener("click", startListening);

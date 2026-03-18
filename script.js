// 📦 VERİLER
const data = {
  koc:{tanitim:"mp3/koc_tanitim.mp3",ozellikler:"mp3/koc_ozellikler.mp3",element:"mp3/koc_element.mp3",sayi:"mp3/koc_sayi.mp3",simge:"icons/koc.png",video:"icons/koc_mars.mp4",elementIcon:"icons/ates.png",sayilar:"1, 8, 17"},
  boga:{tanitim:"mp3/boga_tanitim.mp3",ozellikler:"mp3/boga_ozellikler.mp3",element:"mp3/boga_element.mp3",sayi:"mp3/boga_sayi.mp3",simge:"icons/boga.png",video:"icons/boga_venus.mp4",elementIcon:"icons/toprak.png",sayilar:"2, 6, 9"},
  ikizler:{tanitim:"mp3/ikizler_tanitim.mp3",ozellikler:"mp3/ikizler_ozellikler.mp3",element:"mp3/ikizler_element.mp3",sayi:"mp3/ikizler_sayi.mp3",simge:"icons/ikizler.png",video:"icons/ikizler_merkur.mp4",elementIcon:"icons/hava.png",sayilar:"3, 7, 12"},
  yengec:{tanitim:"mp3/yengec_tanitim.mp3",ozellikler:"mp3/yengec_ozellikler.mp3",element:"mp3/yengec_element.mp3",sayi:"mp3/yengec_sayi.mp3",simge:"icons/yengec.png",video:"icons/yengec_moon.mp4",elementIcon:"icons/su.png",sayilar:"2, 7, 11"},
  aslan:{tanitim:"mp3/aslan_tanitim.mp3",ozellikler:"mp3/aslan_ozellikler.mp3",element:"mp3/aslan_element.mp3",sayi:"mp3/aslan_sayi.mp3",simge:"icons/aslan.png",video:"icons/aslan_sun.mp4",elementIcon:"icons/ates.png",sayilar:"1, 5, 9"},
  basak:{tanitim:"mp3/basak_tanitim.mp3",ozellikler:"mp3/basak_ozellikler.mp3",element:"mp3/basak_element.mp3",sayi:"mp3/basak_sayi.mp3",simge:"icons/basak.png",video:"icons/basak_merkur1.mp4",elementIcon:"icons/toprak.png",sayilar:"5, 14, 23"},
  terazi:{tanitim:"mp3/terazi_tanitim.mp3",ozellikler:"mp3/terazi_ozellikler.mp3",element:"mp3/terazi_element.mp3",sayi:"mp3/terazi_sayi.mp3",simge:"icons/terazi.png",video:"icons/terazi_venus1.mp4",elementIcon:"icons/hava.png",sayilar:"6, 15, 24"},
  akrep:{tanitim:"mp3/akrep_tanitim.mp3",ozellikler:"mp3/akrep_ozellikler.mp3",element:"mp3/akrep_element.mp3",sayi:"mp3/akrep_sayi.mp3",simge:"icons/akrep.png",video:"icons/akrep_pluto.mp4",elementIcon:"icons/su.png",sayilar:"8, 11, 18"},
  yay:{tanitim:"mp3/yay_tanitim.mp3",ozellikler:"mp3/yay_ozellikler.mp3",element:"mp3/yay_element.mp3",sayi:"mp3/yay_sayi.mp3",simge:"icons/yay.png",video:"icons/yay_jupiter.mp4",elementIcon:"icons/ates.png",sayilar:"3, 7, 9"},
  oglak:{tanitim:"mp3/oglak_tanitim.mp3",ozellikler:"mp3/oglak_ozellikler.mp3",element:"mp3/oglak_element.mp3",sayi:"mp3/oglak_sayi.mp3",simge:"icons/oglak.png",video:"icons/oglak_saturn.mp4",elementIcon:"icons/toprak.png",sayilar:"4, 8, 13"},
  kova:{tanitim:"mp3/kova_tanitim.mp3",ozellikler:"mp3/kova_ozellikler.mp3",element:"mp3/kova_element.mp3",sayi:"mp3/kova_sayi.mp3",simge:"icons/kova.png",video:"icons/kova_uranus.mp4",elementIcon:"icons/hava.png",sayilar:"4, 7, 11"},
  balik:{tanitim:"mp3/balik_tanitim.mp3",ozellikler:"mp3/balik_ozellikler.mp3",element:"mp3/balik_element.mp3",sayi:"mp3/balik_sayi.mp3",simge:"icons/balik.png",video:"icons/balik_neptun.mp4",elementIcon:"icons/su.png",sayilar:"3, 7, 12"}
};

// 🎯 ELEMENTLER
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
      el.play();
    } else {
      el.src = src;
    }
  }
  el.style.display = "block";
}

function hideAll() {
  [burcSimge, elementIcon, videoEl, ozelliklerDisplay, sayiDisplay]
    .forEach(el => el.style.display = "none");
}

// 🚀 ANA AKIŞ
async function runShow(burc) {
  const b = data[burc];
  if (!b) return;

  hideAll();

  await playAudio(b.tanitim);
  show(burcSimge, b.simge);

  await playAudio(b.ozellikler);
  ozelliklerDisplay.innerText = "Özellikler gösteriliyor...";
  show(ozelliklerDisplay);

  show(videoEl, b.video);
  await new Promise(r => videoEl.onended = r);

  await playAudio(b.element);
  show(elementIcon, b.elementIcon);

  await playAudio(b.sayi);
  sayiDisplay.innerText = b.sayilar;
  show(sayiDisplay);
}

// 🔘 BUTON EVENTLERİ
document.querySelectorAll("#test-buttons button").forEach(btn => {
  btn.addEventListener("click", () => {
    const burc = btn.getAttribute("data-burc");
    runShow(burc);
  });
});

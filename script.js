// Burç kısa isimleri
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

// Tüm veriler (mp3, png ve mp4 dosya yolları)
const data = {
  koc:{tanitim:"mp3/koc_tanitim.mp3",ozellikler:"mp3/koc_ozellikler.mp3",gezegenVideo:"icons/mars.mp4",element:"mp3/koc_element.mp3",simge:"icons/koc.png",elementIcon:"icons/ates.png",sayi:"mp3/koc_sayi.mp3",sayilar:"1,8,17"},
  boga:{tanitim:"mp3/boga_tanitim.mp3",ozellikler:"mp3/boga_ozellikler.mp3",gezegenVideo:"icons/venus.mp4",element:"mp3/boga_element.mp3",simge:"icons/boga.png",elementIcon:"icons/toprak.png",sayi:"mp3/boga_sayi.mp3",sayilar:"2,6,9"},
  ikizler:{tanitim:"mp3/ikizler_tanitim.mp3",ozellikler:"mp3/ikizler_ozellikler.mp3",gezegenVideo:"icons/merkur.mp4",element:"mp3/ikizler_element.mp3",simge:"icons/ikizler.png",elementIcon:"icons/hava.png",sayi:"mp3/ikizler_sayi.mp3",sayilar:"3,7,12"},
  yengec:{tanitim:"mp3/yengec_tanitim.mp3",ozellikler:"mp3/yengec_ozellikler.mp3",gezegenVideo:"icons/moon.mp4",element:"mp3/yengec_element.mp3",simge:"icons/yengec.png",elementIcon:"icons/su.png",sayi:"mp3/yengec_sayi.mp3",sayilar:"2,7,11"},
  aslan:{tanitim:"mp3/aslan_tanitim.mp3",ozellikler:"mp3/aslan_ozellikler.mp3",gezegenVideo:"icons/sun.mp4",element:"mp3/aslan_element.mp3",simge:"icons/aslan.png",elementIcon:"icons/ates.png",sayi:"mp3/aslan_sayi.mp3",sayilar:"1,5,9"},
  basak:{tanitim:"mp3/basak_tanitim.mp3",ozellikler:"mp3/basak_ozellikler.mp3",gezegenVideo:"icons/merkur(1).mp4",element:"mp3/basak_element.mp3",simge:"icons/basak.png",elementIcon:"icons/toprak.png",sayi:"mp3/basak_sayi.mp3",sayilar:"5,14,23"},
  terazi:{tanitim:"mp3/terazi_tanitim.mp3",ozellikler:"mp3/terazi_ozellikler.mp3",gezegenVideo:"icons/venus(1).mp4",element:"mp3/terazi_element.mp3",simge:"icons/terazi.png",elementIcon:"icons/hava.png",sayi:"mp3/terazi_sayi.mp3",sayilar:"6,15,24"},
  akrep:{tanitim:"mp3/akrep_tanitim.mp3",ozellikler:"mp3/akrep_ozellikler.mp3",gezegenVideo:"icons/pluton.mp4",element:"mp3/akrep_element.mp3",simge:"icons/akrep.png",elementIcon:"icons/su.png",sayi:"mp3/akrep_sayi.mp3",sayilar:"8,11,18"},
  yay:{tanitim:"mp3/yay_tanitim.mp3",ozellikler:"mp3/yay_ozellikler.mp3",gezegenVideo:"icons/jupiter.mp4",element:"mp3/yay_element.mp3",simge:"icons/yay.png",elementIcon:"icons/ates.png",sayi:"mp3/yay_sayi.mp3",sayilar:"3,7,9"},
  oglak:{tanitim:"mp3/oglak_tanitim.mp3",ozellikler:"mp3/oglak_ozellikler.mp3",gezegenVideo:"icons/saturn.mp4",element:"mp3/oglak_element.mp3",simge:"icons/oglak.png",elementIcon:"icons/toprak.png",sayi:"mp3/oglak_sayi.mp3",sayilar:"4,8,13"},
  kova:{tanitim:"mp3/kova_tanitim.mp3",ozellikler:"mp3/kova_ozellikler.mp3",gezegenVideo:"icons/uranus.mp4",element:"mp3/kova_element.mp3",simge:"icons/kova.png",elementIcon:"icons/hava.png",sayi:"mp3/kova_sayi.mp3",sayilar:"4,7,11"},
  balik:{tanitim:"mp3/balik_tanitim.mp3",ozellikler:"mp3/balik_ozellikler.mp3",gezegenVideo:"icons/neptun.mp4",element:"mp3/balik_element.mp3",simge:"icons/balik.png",elementIcon:"icons/su.png",sayi:"mp3/balik_sayi.mp3",sayilar:"3,7,12"}
};

// DOM
const burcSimge = document.getElementById("burc-simge");
const elementIcon = document.getElementById("element-icon");
const ozelliklerDisplay = document.getElementById("ozellikler-display");
const sayiDisplay = document.getElementById("sayi-display");

// Video element
const videoEl = document.createElement("video");
videoEl.id = "gezegen-video";
videoEl.style.position = "absolute";
videoEl.style.top = "45%";
videoEl.style.left = "25%";
videoEl.style.width = "120px";
videoEl.style.zIndex = "2";
videoEl.style.display = "none";
videoEl.muted = true;
videoEl.autoplay = false;
videoEl.loop = false;
document.getElementById("zodiac-container").appendChild(videoEl);

// Audio oynatma
function playAudio(src) {
  return new Promise(resolve => {
    const audio = new Audio(src);
    audio.play();
    audio.onended = resolve;
  });
}

// Göster/gizle
function show(el, src = null) {
  if(src){
    if(el.tagName==="VIDEO"){ el.src=src; el.currentTime=0; el.play(); } 
    else{ el.src=src; }
  }
  el.style.display="block";
}

function hideAll(){
  [burcSimge, elementIcon, videoEl, ozelliklerDisplay, sayiDisplay].forEach(el=>el.style.display="none");
}

// Show fonksiyonu
async function runShow(burc){
  const b = data[burc];
  if(!b){ alert("Burç bulunamadı"); return; }
  hideAll();

  await playAudio(b.tanitim);
  show(burcSimge, b.simge);

  await playAudio(b.ozellikler);
  ozelliklerDisplay.innerText="Özellikler gösteriliyor...";
  show(ozelliklerDisplay);

  show(videoEl, b.gezegenVideo);
  await new Promise(resolve=>{ videoEl.onended=resolve; });

  await playAudio(b.element);
  show(elementIcon, b.elementIcon);

  await playAudio(b.sayi);
  sayiDisplay.innerText=b.sayilar;
  show(sayiDisplay);
}

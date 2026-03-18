// 🔤 BURÇ ALGILAMA
const burclar = {
  "koc": "koc", "koç": "koc",
  "boga": "boga", "boğa": "boga",
  "ikizler": "ikizler",
  "yengec": "yengec", "yengeç": "yengec",
  "aslan": "aslan",
  "basak": "basak", "başak": "basak",
  "terazi": "terazi",
  "akrep": "akrep",
  "yay": "yay",
  "oglak": "oglak", "oğlak": "oglak",
  "kova": "kova",
  "balik": "balik", "balık": "balik"
};

// 📦 TÜM VERİLER
const data = {
  koc:{tanitim:"mp3/koc_tanitim.mp3",ozellikler:"mp3/koc_ozellikler.mp3",gezegen:"mp3/koc_gezegen.mp3",element:"mp3/koc_element.mp3",sayi:"mp3/koc_sayi.mp3",simge:"icons/koc.png",gezegenGif:"icons/mars_spin.gif",elementIcon:"icons/ates.png",sayilar:"1, 8, 17"},
  boga:{tanitim:"mp3/boga_tanitim.mp3",ozellikler:"mp3/boga_ozellikler.mp3",gezegen:"mp3/boga_gezegen.mp3",element:"mp3/boga_element.mp3",sayi:"mp3/boga_sayi.mp3",simge:"icons/boga.png",gezegenGif:"icons/venus_spin.gif",elementIcon:"icons/toprak.png",sayilar:"2, 6, 9"},
  ikizler:{tanitim:"mp3/ikizler_tanitim.mp3",ozellikler:"mp3/ikizler_ozellikler.mp3",gezegen:"mp3/ikizler_gezegen.mp3",element:"mp3/ikizler_element.mp3",sayi:"mp3/ikizler_sayi.mp3",simge:"icons/ikizler.png",gezegenGif:"icons/merkur_spin.gif",elementIcon:"icons/hava.png",sayilar:"3, 7, 12"},
  yengec:{tanitim:"mp3/yengec_tanitim.mp3",ozellikler:"mp3/yengec_ozellikler.mp3",gezegen:"mp3/yengec_gezegen.mp3",element:"mp3/yengec_element.mp3",sayi:"mp3/yengec_sayi.mp3",simge:"icons/yengec.png",gezegenGif:"icons/ay_spin.gif",elementIcon:"icons/su.png",sayilar:"2, 7, 11"},
  aslan:{tanitim:"mp3/aslan_tanitim.mp3",ozellikler:"mp3/aslan_ozellikler.mp3",gezegen:"mp3/aslan_gezegen.mp3",element:"mp3/aslan_element.mp3",sayi:"mp3/aslan_sayi.mp3",simge:"icons/aslan.png",gezegenGif:"icons/gunes_spin.gif",elementIcon:"icons/ates.png",sayilar:"1, 5, 9"},
  basak:{tanitim:"mp3/basak_tanitim.mp3",ozellikler:"mp3/basak_ozellikler.mp3",gezegen:"mp3/basak_gezegen.mp3",element:"mp3/basak_element.mp3",sayi:"mp3/basak_sayi.mp3",simge:"icons/basak.png",gezegenGif:"icons/merkur_spin.gif",elementIcon:"icons/toprak.png",sayilar:"5, 14, 23"},
  terazi:{tanitim:"mp3/terazi_tanitim.mp3",ozellikler:"mp3/terazi_ozellikler.mp3",gezegen:"mp3/terazi_gezegen.mp3",element:"mp3/terazi_element.mp3",sayi:"mp3/terazi_sayi.mp3",simge:"icons/terazi.png",gezegenGif:"icons/venus_spin.gif",elementIcon:"icons/hava.png",sayilar:"6, 15, 24"},
  akrep:{tanitim:"mp3/akrep_tanitim.mp3",ozellikler:"mp3/akrep_ozellikler.mp3",gezegen:"mp3/akrep_gezegen.mp3",element:"mp3/akrep_element.mp3",sayi:"mp3/akrep_sayi.mp3",simge:"icons/akrep.png",gezegenGif:"icons/mars_spin.gif",elementIcon:"icons/su.png",sayilar:"8, 11, 18"},
  yay:{tanitim:"mp3/yay_tanitim.mp3",ozellikler:"mp3/yay_ozellikler.mp3",gezegen:"mp3/yay_gezegen.mp3",element:"mp3/yay_element.mp3",sayi:"mp3/yay_sayi.mp3",simge:"icons/yay.png",gezegenGif:"icons/jupiter_spin.gif",elementIcon:"icons/ates.png",sayilar:"3, 7, 9"},
  oglak:{tanitim:"mp3/oglak_tanitim.mp3",ozellikler:"mp3/oglak_ozellikler.mp3",gezegen:"mp3/oglak_gezegen.mp3",element:"mp3/oglak_element.mp3",sayi:"mp3/oglak_sayi.mp3",simge:"icons/oglak.png",gezegenGif:"icons/saturn_spin.gif",elementIcon:"icons/toprak.png",sayilar:"4, 8, 13"},
  kova:{tanitim:"mp3/kova_tanitim.mp3",ozellikler:"mp3/kova_ozellikler.mp3",gezegen:"mp3/kova_gezegen.mp3",element:"mp3/kova_element.mp3",sayi:"mp3/kova_sayi.mp3",simge:"icons/kova.png",gezegenGif:"icons/uranus_spin.gif",elementIcon:"icons/hava.png",sayilar:"4, 7, 11"},
  balik:{tanitim:"mp3/balik_tanitim.mp3",ozellikler:"mp3/balik_ozellikler.mp3",gezegen:"mp3/balik_gezegen.mp3",element:"mp3/balik_element.mp3",sayi:"mp3/balik_sayi.mp3",simge:"icons/balik.png",gezegenGif:"icons/neptun_spin.gif",elementIcon:"icons/su.png",sayilar:"3, 7, 12"}
};

// 🎯 DOM
const btn = document.getElementById("play-btn");
const burcSimge = document.getElementById("burc-simge");
const gezegenGif = document.getElementById("gezegen-gif");
const elementIcon = document.getElementById("element-icon");
const ozelliklerDisplay = document.getElementById("ozellikler-display");
const sayiDisplay = document.getElementById("sayi-display");

// 🔊 AUDIO
function playAudio(src){
  return new Promise(resolve=>{
    const audio=new Audio(src);
    audio.play();
    audio.onended=resolve;
  });
}

// 🎨 UI
function show(el,src=null){
  if(src) el.src=src;
  el.classList.remove("hidden");
}

function hideAll(){
  [burcSimge,gezegenGif,elementIcon,ozelliklerDisplay,sayiDisplay]
  .forEach(el=>el.classList.add("hidden"));
}

// 🚀 ANİMASYON AKIŞI
async function runShow(burc){
  const b=data[burc];
  if(!b){alert("Burç bulunamadı");return;}

  hideAll();

  await playAudio(b.tanitim);
  show(burcSimge,b.simge);

  await playAudio(b.ozellikler);
  ozelliklerDisplay.innerText="Özellikler gösteriliyor...";
  show(ozelliklerDisplay);

  await playAudio(b.gezegen);
  show(gezegenGif,b.gezegenGif);

  await playAudio(b.element);
  show(elementIcon,b.elementIcon);

  await playAudio(b.sayi);
  sayiDisplay.innerText=b.sayilar;
  show(sayiDisplay);
}

// 🎤 SES TANIMA
function startListening(){
  const SpeechRecognition = window.SpeechRecognition || window.webkitSpeechRecognition;

  if(!SpeechRecognition){
    alert("Tarayıcı desteklemiyor");
    return;
  }

  const recognition=new SpeechRecognition();
  recognition.lang="tr-TR";
  recognition.start();

  btn.innerText="Dinleniyor... 🎤";

  recognition.onresult=function(e){
    const text=e.results[0][0].transcript.toLowerCase();
    console.log("Algılanan:",text);

    btn.innerText="Burcunu Dinle ve Göster!";

    for(let key in burclar){
      if(text.includes(key)){
        runShow(burclar[key]);
        return;
      }
    }

    alert("Burç anlaşılmadı 😅");
  };

  recognition.onerror=function(){
    btn.innerText="Burcunu Dinle ve Göster!";
    alert("Ses hatası");
  };
}

// 🎯 BUTON
btn.addEventListener("click",startListening);

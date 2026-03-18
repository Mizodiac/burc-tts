const burcSimge = document.getElementById("burc-simge");
const elementIcon = document.getElementById("element-icon");
const ozelliklerDisplay = document.getElementById("ozellikler-display");
const sayiDisplay = document.getElementById("sayi-display");
const videoEl = document.getElementById("gezegen-video");

// 🎵 Ses çalma
function playAudio(src) {
  return new Promise(resolve => {
    const audio = new Audio(src);
    audio.play();
    audio.onended = resolve;
  });
}

// Görünürlük
function show(el) { el.style.display="block"; if(el===burcSimge||el===elementIcon){el.style.transform="translate(-50%,-50%) scale(1)";} if(el===ozelliklerDisplay||el===sayiDisplay){el.style.opacity=1;} }
function hideAll() { [burcSimge,elementIcon,ozelliklerDisplay,sayiDisplay,videoEl].forEach(el=>{el.style.display="none"; el.style.opacity=0; el.style.transform="translate(-50%,-50%) scale(0)";}); }

// 🔤 Burç verisi
const data = {
  koc:{tanitim:"mp3/koc.mp3",ozellikler:["Enerjik","Cesur","Atılgan"],gezegen:"mp3/koc_gezegen.mp3",element:"mp3/koc_element.mp3",sayi:"mp3/koc_sayi.mp3",simge:"icons/koc.png",elementIcon:"icons/ates.png",video:"icons/mars.mp4"},
  boga:{tanitim:"mp3/boga.mp3",ozellikler:["Sabırlı","Kararlı","Huzurlu"],gezegen:"mp3/boga_gezegen.mp3",element:"mp3/boga_element.mp3",sayi:"mp3/boga_sayi.mp3",simge:"icons/boga.png",elementIcon:"icons/toprak.png",video:"icons/venus.mp4"},
  ikizler:{tanitim:"mp3/ikizler.mp3",ozellikler:["Zeki","Neşeli","Meraklı"],gezegen:"mp3/ikizler_gezegen.mp3",element:"mp3/ikizler_element.mp3",sayi:"mp3/ikizler_sayi.mp3",simge:"icons/ikizler.png",elementIcon:"icons/hava.png",video:"icons/merkur.mp4"},
  yengec:{tanitim:"mp3/yengec.mp3",ozellikler:["Duygusal","Şefkatli","Sevgi dolu"],gezegen:"mp3/yengec_gezegen.mp3",element:"mp3/yengec_element.mp3",sayi:"mp3/yengec_sayi.mp3",simge:"icons/yengec.png",elementIcon:"icons/su.png",video:"icons/moon.mp4"},
  aslan:{tanitim:"mp3/aslan.mp3",ozellikler:["Güçlü","Özgüvenli","Lider"],gezegen:"mp3/aslan_gezegen.mp3",element:"mp3/aslan_element.mp3",sayi:"mp3/aslan_sayi.mp3",simge:"icons/aslan.png",elementIcon:"icons/ates.png",video:"icons/sun.mp4"},
  basak:{tanitim:"mp3/basak.mp3",ozellikler:["Titiz","Çalışkan","Mantıklı"],gezegen:"mp3/basak_gezegen.mp3",element:"mp3/basak_element.mp3",sayi:"mp3/basak_sayi.mp3",simge:"icons/basak.png",elementIcon:"icons/toprak.png",video:"icons/merkur(1).mp4"},
  terazi:{tanitim:"mp3/terazi.mp3",ozellikler:["Dengeli","Adaletli","İletişimci"],gezegen:"mp3/terazi_gezegen.mp3",element:"mp3/terazi_element.mp3",sayi:"mp3/terazi_sayi.mp3",simge:"icons/terazi.png",elementIcon:"icons/hava.png",video:"icons/venus(1).mp4"},
  akrep:{tanitim:"mp3/akrep.mp3",ozellikler:["Tutkulu","Gizemli","Kararlı"],gezegen:"mp3/akrep_gezegen.mp3",element:"mp3/akrep_element.mp3",sayi:"mp3/akrep_sayi.mp3",simge:"icons/akrep.png",elementIcon:"icons/su.png",video:"icons/pluton.mp4"},
  yay:{tanitim:"mp3/yay.mp3",ozellikler:["Macera","Özgürlük","İyimser"],gezegen:"mp3/yay_gezegen.mp3",element:"mp3/yay_element.mp3",sayi:"mp3/yay_sayi.mp3",simge:"icons/yay.png",elementIcon:"icons/ates.png",video:"icons/jupiter.mp4"},
  oglak:{tanitim:"mp3/oglak.mp3",ozellikler:["Sorumluluk","Disiplin","Planlı"],gezegen:"mp3/oglak_gezegen.mp3",element:"mp3/oglak_element.mp3",sayi:"mp3/oglak_sayi.mp3",simge:"icons/oglak.png",elementIcon:"icons/toprak.png",video:"icons/saturn.mp4"},
  kova:{tanitim:"mp3/kova.mp3",ozellikler:["İnovatif","Bağımsız","Orijinal"],gezegen:"mp3/kova_gezegen.mp3",element:"mp3/kova_element.mp3",sayi:"mp3/kova_sayi.mp3",simge:"icons/kova.png",elementIcon:"icons/hava.png",video:"icons/uranus.mp4"},
  balik:{tanitim:"mp3/balik.mp3",ozellikler:["Hayalperest","Duygusal","Sevgi dolu"],gezegen:"mp3/balik_gezegen.mp3",element:"mp3/balik_element.mp3",sayi:"mp3/balik_sayi.mp3",simge:"icons/balik.png",elementIcon:"icons/su.png",video:"icons/neptun.mp4"}
};

// Gösteri akışı
async function runShow(burc) {
  const b = data[burc];
  if(!b){alert("Burç bulunamadı"); return;}
  hideAll();

  // 1️⃣ Tanıtım
  playAudio(b.tanitim);
  show(burcSimge); burcSimge.src=b.simge;
  await new Promise(r=>setTimeout(r,2000));

  // 2️⃣ Özellikler + Gezegen
  document.body.style.background="#000";
  let ozelliklerText=""; b.ozellikler.forEach(f=>{ozelliklerText+="• "+f+"\n";});
  ozelliklerDisplay.innerText=ozelliklerText;
  show(ozelliklerDisplay);
  show(videoEl); videoEl.src=b.video; videoEl.play();
  await playAudio(b.gezegen);
  await new Promise(r=>videoEl.onended=r);

  // 3️⃣ Element
  document.body.style.background="#000";
  show(elementIcon); elementIcon.src=b.elementIcon;
  await playAudio(b.element);

  // 4️⃣ Sayılar
  document.body.style.background="#000";
  sayiDisplay.innerText="Uğurlu Sayılar: "+b.sayi.split(",").join(", ");
  show(sayiDisplay);
  await playAudio(b.sayi);
}

// Buton listener
document.querySelectorAll(".burc-btn").forEach(btn=>{
  btn.addEventListener("click",()=>runShow(btn.dataset.burc));
});

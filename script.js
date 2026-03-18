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

const data = {
  koc:{tanitim:"mp3/koc.mp3",ozellikler:"mp3/koc_ozellikler.mp3",gezegenVideo:"icons/mars.mp4",element:"mp3/koc_element.mp3",elementIcon:"icons/ates.png",sayi:"mp3/koc_sayi.mp3",simge:"icons/koc.png",sayilar:"1,8,17"},
  boga:{tanitim:"mp3/boga.mp3",ozellikler:"mp3/boga_ozellikler.mp3",gezegenVideo:"icons/venus.mp4",element:"mp3/boga_element.mp3",elementIcon:"icons/toprak.png",sayi:"mp3/boga_sayi.mp3",simge:"icons/boga.png",sayilar:"2,6,9"},
  ikizler:{tanitim:"mp3/ikizler.mp3",ozellikler:"mp3/ikizler_ozellikler.mp3",gezegenVideo:"icons/merkur.mp4",element:"mp3/ikizler_element.mp3",elementIcon:"icons/hava.png",sayi:"mp3/ikizler_sayi.mp3",simge:"icons/ikizler.png",sayilar:"3,7,12"},
  yengec:{tanitim:"mp3/yengec.mp3",ozellikler:"mp3/yengec_ozellikler.mp3",gezegenVideo:"icons/moon.mp4",element:"mp3/yengec_element.mp3",elementIcon:"icons/su.png",sayi:"mp3/yengec_sayi.mp3",simge:"icons/yengec.png",sayilar:"2,7,11"},
  aslan:{tanitim:"mp3/aslan.mp3",ozellikler:"mp3/aslan_ozellikler.mp3",gezegenVideo:"icons/sun.mp4",element:"mp3/aslan_element.mp3",elementIcon:"icons/ates.png",sayi:"mp3/aslan_sayi.mp3",simge:"icons/aslan.png",sayilar:"1,5,9"},
  basak:{tanitim:"mp3/basak.mp3",ozellikler:"mp3/basak_ozellikler.mp3",gezegenVideo:"icons/merkur(1).mp4",element:"mp3/basak_element.mp3",elementIcon:"icons/toprak.png",sayi:"mp3/basak_sayi.mp3",simge:"icons/basak.png",sayilar:"5,14,23"},
  terazi:{tanitim:"mp3/terazi.mp3",ozellikler:"mp3/terazi_ozellikler.mp3",gezegenVideo:"icons/venus(1).mp4",element:"mp3/terazi_element.mp3",elementIcon:"icons/hava.png",sayi:"mp3/terazi_sayi.mp3",simge:"icons/terazi.png",sayilar:"6,15,24"},
  akrep:{tanitim:"mp3/akrep.mp3",ozellikler:"mp3/akrep_ozellikler.mp3",gezegenVideo:"icons/pluton.mp4",element:"mp3/akrep_element.mp3",elementIcon:"icons/su.png",sayi:"mp3/akrep_sayi.mp3",simge:"icons/akrep.png",sayilar:"8,11,18"},
  yay:{tanitim:"mp3/yay.mp3",ozellikler:"mp3/yay_ozellikler.mp3",gezegenVideo:"icons/jupiter.mp4",element:"mp3/yay_element.mp3",elementIcon:"icons/ates.png",sayi:"mp3/yay_sayi.mp3",simge:"icons/yay.png",sayilar:"3,7,9"},
  oglak:{tanitim:"mp3/oglak.mp3",ozellikler:"mp3/oglak_ozellikler.mp3",gezegenVideo:"icons/saturn.mp4",element:"mp3/oglak_element.mp3",elementIcon:"icons/toprak.png",sayi:"mp3/oglak_sayi.mp3",simge:"icons/oglak.png",sayilar:"4,8,13"},
  kova:{tanitim:"mp3/kova.mp3",ozellikler:"mp3/kova_ozellikler.mp3",gezegenVideo:"icons/uranus.mp4",element:"mp3/kova_element.mp3",elementIcon:"icons/hava.png",sayi:"mp3/kova_sayi.mp3",simge:"icons/kova.png",sayilar:"4,7,11"},
  balik:{tanitim:"mp3/balik.mp3",ozellikler:"mp3/balik_ozellikler.mp3",gezegenVideo:"icons/neptun.mp4",element:"mp3/balik_element.mp3",elementIcon:"icons/su.png",sayi:"mp3/balik_sayi.mp3",simge:"icons/balik.png",sayilar:"3,7,12"}
};

const burcSimge = document.getElementById("burc-simge");
const elementIcon = document.getElementById("element-icon");
const gezegenVideoEl = document.getElementById("gezegen-video");
const ozelliklerDisplay = document.getElementById("ozellikler-display");
const sayiDisplay = document.getElementById("sayi-display");

function playAudio(src){return new Promise(resolve=>{const audio=new Audio(src); audio.play(); audio.onended=resolve;});}
function show(el){el.style.display="block"; if(el.tagName==="IMG") el.style.transform="translate(-50%,-50%) scale(1)"; if(el.tagName==="VIDEO") el.style.display="block"; }
function hideAll(){[burcSimge,elementIcon,gezegenVideoEl,ozelliklerDisplay,sayiDisplay].forEach(el=>{el.style.display="none"; el.style.transform="translate(-50%,-50%) scale(0)"; el.pause?.(); el.currentTime=0;});}

async function runShow(burc){
  const b=data[burc]; if(!b){alert("Burç bulunamadı"); return;}
  hideAll();

  // 1. Tanıtım
  await playAudio(b.tanitim);
  show(burcSimge); burcSimge.src=b.simge;
  await new Promise(r=>setTimeout(r,500));

  // 2. Özellikler + gezegen
  document.body.style.background="#000";
  ozelliklerDisplay.innerHTML="Özellikler gösteriliyor..."; show(ozelliklerDisplay);
  gezegenVideoEl.src=b.gezegenVideo; show(gezegenVideoEl); gezegenVideoEl.play();
  await playAudio(b.ozellikler);
  gezegenVideoEl.pause(); gezegenVideoEl.currentTime=0;
  hideAll();

  // 3. Element
  elementIcon.src=b.elementIcon; show(elementIcon);
  await playAudio(b.element);
  hideAll();

  // 4. Sayılar
  sayiDisplay.innerText=b.sayilar; show(sayiDisplay);
  await playAudio(b.sayi);
  hideAll();
}

document.getElementById("play-btn").addEventListener("click",()=>alert("Test butonlarını kullanın!"));

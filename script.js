const burcSimge = document.getElementById("burc-simge");
const elementIcon = document.getElementById("element-icon");
const ozelliklerDisplay = document.getElementById("ozellikler-display");
const sayiDisplay = document.getElementById("sayi-display");
const gezegenVideoEl = document.getElementById("gezegen-video");

const data = {
  koc:{tanitim:"mp3/koc_tanitim.mp3",ozellikler:"mp3/koc_ozellikler.mp3",gezegenVideo:"icons/mars.mp4",element:"mp3/koc_element.mp3",elementIcon:"icons/ates.png",sayilar:"1, 8, 17",features:["Cesur","Enerjik","Lider"]},
  boga:{tanitim:"mp3/boga_tanitim.mp3",ozellikler:"mp3/boga_ozellikler.mp3",gezegenVideo:"icons/venus.mp4",element:"mp3/boga_element.mp3",elementIcon:"icons/toprak.png",sayilar:"2, 6, 9",features:["Sabırlı","Kararlı","Sadık"]},
  ikizler:{tanitim:"mp3/ikizler_tanitim.mp3",ozellikler:"mp3/ikizler_ozellikler.mp3",gezegenVideo:"icons/merkur.mp4",element:"mp3/ikizler_element.mp3",elementIcon:"icons/hava.png",sayilar:"3, 7, 12",features:["Zeki","Hızlı","Meraklı"]},
  yengec:{tanitim:"mp3/yengec_tanitim.mp3",ozellikler:"mp3/yengec_ozellikler.mp3",gezegenVideo:"icons/moon.mp4",element:"mp3/yengec_element.mp3",elementIcon:"icons/su.png",sayilar:"2, 7, 11",features:["Duygusal","Sevgi dolu","Koruyucu"]},
  aslan:{tanitim:"mp3/aslan_tanitim.mp3",ozellikler:"mp3/aslan_ozellikler.mp3",gezegenVideo:"icons/sun.mp4",element:"mp3/aslan_element.mp3",elementIcon:"icons/ates.png",sayilar:"1, 5, 9",features:["Cesur","Gururlu","Yaratıcı"]},
  basak:{tanitim:"mp3/basak_tanitim.mp3",ozellikler:"mp3/basak_ozellikler.mp3",gezegenVideo:"icons/merkur(1).mp4",element:"mp3/basak_element.mp3",elementIcon:"icons/toprak.png",sayilar:"5, 14, 23",features:["Titiz","Analitik","Dikkatli"]},
  terazi:{tanitim:"mp3/terazi_tanitim.mp3",ozellikler:"mp3/terazi_ozellikler.mp3",gezegenVideo:"icons/venus(1).mp4",element:"mp3/terazi_element.mp3",elementIcon:"icons/hava.png",sayilar:"6, 15, 24",features:["Adil","Sosyal","Estetik"]},
  akrep:{tanitim:"mp3/akrep_tanitim.mp3",ozellikler:"mp3/akrep_ozellikler.mp3",gezegenVideo:"icons/pluton.mp4",element:"mp3/akrep_element.mp3",elementIcon:"icons/su.png",sayilar:"8, 11, 18",features:["Tutkulu","Kararlı","Gizemli"]},
  yay:{tanitim:"mp3/yay_tanitim.mp3",ozellikler:"mp3/yay_ozellikler.mp3",gezegenVideo:"icons/jupiter.mp4",element:"mp3/yay_element.mp3",elementIcon:"icons/ates.png",sayilar:"3, 7, 9",features:["Özgür","Neşeli","Maceracı"]},
  oglak:{tanitim:"mp3/oglak_tanitim.mp3",ozellikler:"mp3/oglak_ozellikler.mp3",gezegenVideo:"icons/saturn.mp4",element:"mp3/oglak_element.mp3",elementIcon:"icons/toprak.png",sayilar:"4, 8, 13",features:["Disiplinli","Sabırlı","Sorumlu"]},
  kova:{tanitim:"mp3/kova_tanitim.mp3",ozellikler:"mp3/kova_ozellikler.mp3",gezegenVideo:"icons/uranus.mp4",element:"mp3/kova_element.mp3",elementIcon:"icons/hava.png",sayilar:"4, 7, 11",features:["Özgün","Zeki","İnsansever"]},
  balik:{tanitim:"mp3/balik_tanitim.mp3",ozellikler:"mp3/balik_ozellikler.mp3",gezegenVideo:"icons/neptun.mp4",element:"mp3/balik_element.mp3",elementIcon:"icons/su.png",sayilar:"3, 7, 12",features:["Sevgi dolu","Duygusal","Hayalperest"]}
};

function hideAll(){
  [burcSimge, elementIcon, gezegenVideoEl, ozelliklerDisplay, sayiDisplay].forEach(el=>el.style.display="none");
}

function show(el, src=null){
  if(src) { 
    if(el.tagName==="VIDEO"){ el.src=src; el.currentTime=0; el.play(); } 
    else el.src=src;
  }
  el.style.display="block";
}

function playAudio(src){
  return new Promise(resolve=>{
    const audio=new Audio(src); audio.play(); audio.onended=resolve;
  });
}

async function showFeatures(features, audioSrc){
  ozelliklerDisplay.innerHTML=""; show(ozelliklerDisplay);
  const audio = new Audio(audioSrc); audio.play();
  for(let i=0;i<features.length;i++){
    const div=document.createElement("div");
    div.className="feature-item"; div.innerText=features[i];
    ozelliklerDisplay.appendChild(div);
    await new Promise(r=>setTimeout(r,500));
    div.classList.add("show");
  }
  return new Promise(resolve=>{ audio.onended=resolve; });
}

async function runShow(burc){
  const b=data[burc]; if(!b){ alert("Burç bulunamadı"); return; }
  hideAll();

  // Tanıtım
  await playAudio(b.tanitim);
  burcSimge.src=b.simge; show(burcSimge);
  await new Promise(r=>setTimeout(r,500));

  // Özellikler + Gezegen
  document.body.style.background="#000";
  show(gezegenVideoEl,b.gezegenVideo);
  gezegenVideoEl.play();
  await showFeatures(b.features,b.ozellikler);
  gezegenVideoEl.pause(); hideAll();

  // Element
  elementIcon.src=b.elementIcon; show(elementIcon);
  await playAudio(b.element);
  hideAll();

  // Sayılar
  sayiDisplay.innerText=b.sayilar; show(sayiDisplay);
  await playAudio(b.sayi);
  hideAll();
}

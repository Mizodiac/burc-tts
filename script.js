const data = {
  koc: {simge:"icons/koc.png", video:"icons/mars.mp4", element:"icons/ates.png", mp3:"mp3/koc.mp3"},
  boga: {simge:"icons/boga.png", video:"icons/venus.mp4", element:"icons/toprak.png", mp3:"mp3/boga.mp3"},
  ikizler: {simge:"icons/ikizler.png", video:"icons/merkur.mp4", element:"icons/hava.png", mp3:"mp3/ikizler.mp3"},
  yengec: {simge:"icons/yengec.png", video:"icons/moon.mp4", element:"icons/su.png", mp3:"mp3/yengec.mp3"},
  aslan: {simge:"icons/aslan.png", video:"icons/sun.mp4", element:"icons/ates.png", mp3:"mp3/aslan.mp3"},
  basak: {simge:"icons/basak.png", video:"icons/merkur(1).mp4", element:"icons/toprak.png", mp3:"mp3/basak.mp3"},
  terazi: {simge:"icons/terazi.png", video:"icons/venus(1).mp4", element:"icons/hava.png", mp3:"mp3/terazi.mp3"},
  akrep: {simge:"icons/akrep.png", video:"icons/pluton.mp4", element:"icons/su.png", mp3:"mp3/akrep.mp3"},
  yay: {simge:"icons/yay.png", video:"icons/jupiter.mp4", element:"icons/ates.png", mp3:"mp3/yay.mp3"},
  oglak: {simge:"icons/oglak.png", video:"icons/saturn.mp4", element:"icons/toprak.png", mp3:"mp3/oglak.mp3"},
  kova: {simge:"icons/kova.png", video:"icons/uranus.mp4", element:"icons/hava.png", mp3:"mp3/kova.mp3"},
  balik: {simge:"icons/balik.png", video:"icons/neptun.mp4", element:"icons/su.png", mp3:"mp3/balik.mp3"}
};

const burcSimge = document.getElementById("burc-simge");
const elementIcon = document.getElementById("element-icon");
const video = document.getElementById("gezegen-video");
const yazi = document.getElementById("yazi");

function playAudio(src) {
  return new Promise(resolve => {
    const a = new Audio(src);
    a.play();
    a.onended = resolve;
  });
}

async function runShow(burc) {
  const b = data[burc];
  if (!b) return;

  // reset
  video.pause();
  video.currentTime = 0;

  // BURÇ
  burcSimge.src = b.simge;

  // SES
  await playAudio(b.mp3);

  // VIDEO
  video.src = b.video;
  video.play();

  // ELEMENT
  elementIcon.src = b.element;

  // YAZI
  yazi.innerText = burc.toUpperCase();
}

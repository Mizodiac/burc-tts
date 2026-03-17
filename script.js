const burclar = ["koc","boga","ikizler","yengec","aslan","basak","terazi","akrep","yay","oglak","kova","balik"];
const burcContainer = document.getElementById("burc-container");
const startBtn = document.getElementById("startBtn");

startBtn.addEventListener("click", async () => {
  const secilen = prompt("Burcunu yaz (ör: koc, boga, ikizler, ...)");

  if(!burclar.includes(secilen)) {
    alert("Geçersiz burç!");
    return;
  }

  burcContainer.innerHTML = `<img src="icons/${secilen}.png" class="burc-icon">`;

  const mp3s = [
    `mp3/${secilen}_tanitim.mp3`,
    `mp3/${secilen}_ozellikler.mp3`,
    `mp3/${secilen}_gezegen.mp3`,
    `mp3/${secilen}_element.mp3`,
    `mp3/${secilen}_sayi.mp3`
  ];

  for(const mp3 of mp3s){
    await playAudio(mp3);
  }
});

function playAudio(src){
  return new Promise(resolve=>{
    const audio = new Audio(src);
    audio.play();
    audio.onended = resolve;
  });
}

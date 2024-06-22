import AudioPlayer from "./src/interfaz";

const mute = document.getElementById("mute");
const level = document.getElementById("level");
const play = document.getElementById("play");
const progressBar = document.getElementById("music-progress-input")

const container = document.getElementById("container");

container.addEventListener("dragover", (e) => e.preventDefault());

mute.addEventListener("click", ()=>{
  container.audioControl.toggleMute()
})

level.addEventListener("input", ()=>container.audioControl.changeVolume(level.value))

play.addEventListener("click", ()=>container.audioControl.togglePlay())

container.addEventListener("drop", (e) => {
  e.preventDefault
  const id = e.dataTransfer.getData("audioId") 
  if ( id == undefined) return console.log("error: ", id)
  if (container.audioControl != undefined) container.audioControl.load()    
  container.audioControl = new AudioPlayer({el : document.getElementById(e.dataTransfer.getData ("audioId"))})
  container.audioControl.setProgressBar(progressBar)
  container.audioControl.play()

});


const tab = document.querySelector("#music-tab");


for (let i = 0; i < 2; i++) {
  if (i == 0){
    const card = document.createElement("div");
    card.classList.add("music-component");
  
    const audio = document.createElement("audio");
    audio.src = "src/music.mp3";
    audio.id = Math.random();
    
    const img = document.createElement("img");
    img.src = "src/disco.jpeg";
    img.audioId = audio.id;
    
    function handleSetAudio(e) {
      e.dataTransfer.setData("audioId", e.target.audioId)
      console.log(e.dataTransfer.getData("audioId"))
    }
  
    img.addEventListener("dragstart", handleSetAudio)
    card.appendChild(audio);
    card.appendChild(img);
  
    tab.append(card);
  } else {
    const card = document.createElement("div");
    card.classList.add("music-component");
  
    const audio = document.createElement("audio");
    audio.src = "src/Dillom - La Primera.mp3";
    audio.id = Math.random();
    
    const img = document.createElement("img");
    img.src = "src/disco.jpeg";
    img.audioId = audio.id;

    function handleSetAudio(e) {
      e.dataTransfer.setData("audioId", e.target.audioId)
      console.log(e.dataTransfer.getData("audioId"))
    }
  
    img.addEventListener("dragstart", handleSetAudio)
    card.appendChild(audio);
    card.appendChild(img);
  
    tab.append(card);
  }

}

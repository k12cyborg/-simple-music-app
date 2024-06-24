import AudioPlayer from "../src/interfaz";

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
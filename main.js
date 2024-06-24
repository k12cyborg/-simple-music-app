import "./scripts/post-song.js";
import "./scripts/dad.js";

import getSongs from "./scripts/get-songs.js";

getSongs()

const tab = document.querySelector("#music-tab");

const card = document.createElement("div");
card.classList.add("music-component");
const audio = document.createElement("audio");
audio.src = "http://localhost:4000/api/music/image" + "";
audio.id = Math.random();
const img = document.createElement("img");
img.src = "src/disco.jpeg";
img.audioId = audio.id;
function handleSetAudio(e) {
  e.dataTransfer.setData("audioId", e.target.audioId);
  console.log(e.dataTransfer.getData("audioId"));
}
img.addEventListener("dragstart", handleSetAudio);
card.appendChild(audio);
card.appendChild(img);

tab.append(card);

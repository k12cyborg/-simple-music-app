async function setCards(songs) {
  const card = document.createElement("div");
  const audio = document.createElement("audio");
  const img = document.createElement("img");
  const title = document.createElement("p");
  const tab = document.getElementById("music-tab")

  img.src = "data:image/png;base64, " + songs.image;

  audio.id = songs.SongID;
  card.audioId = songs.SongID;
  audio.src = "data:audio;base64, " + songs.audio;
  title.innerText = songs.SongName;

  card.classList.add("music-component");

  card.addEventListener("dragstart", (songs) => {
    songs.dataTransfer.setData("audioId", songs.target.audioId);
    console.log(songs.dataTransfer.getData("audioId"));
  });
  img.draggable=false
  card.appendChild(audio);
  card.appendChild(img);
  card.appendChild(title);
  tab.append(card);
  card.draggable = true
}

export default setCards
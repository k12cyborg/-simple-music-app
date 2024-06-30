import { getMusic, getGenres, getSingers, getSongs } from "../utils/getData";
import { postGenre } from "../utils/postData";

async function mediaControlPage() {
  document.getElementById("app").innerHTML = `
    <nav>
      <h3 class="post-title">Data</h3>
    </nav>    
    <main>
    </main>
  `;

  await postGenreComponent();
  await postSingerComponent();
  await postSongComponent();
  await postMusicCardComponent();
  await data();
}

async function postGenreComponent() {
  const form = document.createElement("form");
  const input = document.createElement("input");
  const btn = document.createElement("button");
  const title = document.createElement("h3");

  form.className = "genreForm";

  title.innerText = "Genres";

  input.type = "text";
  input.name = "GenreName";
  input.required = true;

  btn.type = "submit";
  btn.innerText = "Submit";

  form.appendChild(title);
  form.appendChild(input);
  form.appendChild(btn);

  document.getElementsByTagName("main")[0].appendChild(form);
  const reg = await getGenres();

  form.addEventListener("submit", (e) => {
    e.preventDefault();
    const formData = new FormData(e.target);
    const formProps = Object.fromEntries(formData);

    postGenre(formProps);
  });
}

async function postSingerComponent() {
  const form = document.createElement("form");
  const input = document.createElement("input");
  const btn = document.createElement("button");
  const title = document.createElement("h3");

  form.className = "singerForm";

  title.innerText = "Singers";

  input.type = "text";
  input.name = "SingerName";
  input.required = true;

  btn.type = "submit";
  btn.innerText = "Submit";

  form.appendChild(title);
  form.appendChild(input);
  form.appendChild(btn);

  document.getElementsByTagName("main")[0].appendChild(form);
  const reg = await getSingers();
  console.log(reg);
}

async function postSongComponent() {
  const form = document.createElement("form");
  const input = document.createElement("input");
  const btn = document.createElement("button");
  const title = document.createElement("h3");

  form.className = "songForm";

  input.type = "text";
  input.name = "SingerName";
  input.required = true;

  btn.type = "submit";
  btn.innerText = "Submit";
  form.appendChild(input);
  form.appendChild(btn);

  document.getElementsByTagName("main")[0].appendChild(form);
  const reg = await getSongs();
  console.log(reg);
}

async function postMusicCardComponent() {
  const form = document.createElement("form");
  const input = document.createElement("input");
  const btn = document.createElement("button");
  const title = document.createElement("h3");

  form.className = "musicCardForm";

  input.type = "text";
  input.name = "SingerName";
  input.required = true;

  btn.type = "submit";
  btn.innerText = "Submit";
  form.appendChild(input);
  form.appendChild(btn);

  document.getElementsByTagName("main")[0].appendChild(form);
  const reg = await getSongs();
  console.log(reg);
  // document.getElementById("form").innerHTML = `
  //   <input type="number" name="SongID" id="songid-upload" required readonly>
  //   <input type="file" name="image" id="image-upload" accept=".jpg,.jpeg,.png" required />
  //   <input type="file" name="song" id="song-upload" accept=".mp3" required/>
  //   <label class="image-label" for="image-upload">Image</label>
  //   <label class="song-label" for="song-upload">Song</label>
  //   <button type="submit">Submit</button>
  //   `
}

async function data() {
  const section = document.createElement("section");
  section.setAttribute("datatype", "");

  const btn = document.createElement("button");
  btn.type = "button";
  btn.name = "negro";

  const nav = document.createElement("div");

  async function update(data) {
    const content = document.querySelector(".data-content");
    content.innerHTML = ""
    data.registers.forEach((e) => {
      let maria = document.createElement("li");
      Object.entries(e).forEach(a=>{
        maria.innerText += (a.join(": "))
        maria.innerText += "; "
      })
      content.appendChild(maria)
    });
  }

  nav.addEventListener("click", async (e) => {
    const data = document.querySelector("#data");
    e.stopPropagation();
    switch (e.target.name) {
      case "genres":
        if (data.datatype != "genres") {
          update(await getGenres());
          data.datatype = "genres";
        }
        break
      case "singers":
        if (data.datatype != "singers") {
          update(await getSingers());
          data.datatype = "singers";
        }
        break
      case "songs":
        if (data.datatype != "songs") {
          update(await getSongs());
          data.datatype = "songs";
        }
        break
      case "musiccards":
        if (data.datatype != "songs") {
          update(await getMusic());
          data.datatype = "songs";
        }
        break
    }
  });

  nav.className = "data-nav";
  nav.innerHTML = `
  <ul>
    <li><button type="button" name="genres">Genres</button></li>
    <li><button type="button" name="singers">Singers</button></li>
    <li><button type="button" name="songs">Songs</button></li>
    <li><button type="button" name="musiccards">Music Cards</button></li>
  </ul>
  `;

  section.id = "data";
  section.appendChild(nav);

  const content = document.createElement("div");
  content.className = "data-content";
  section.appendChild(content);
  document.getElementsByTagName("main")[0].appendChild(section);
}

export default mediaControlPage;

import {getMusic} from "../utils/getData.js";
import setAudioPlayer from "../utils/setAudioPlayer.js";
import setCards from '../utils/setCards.js'


async function playerPage() {
  
  const music = await getMusic()
  // console.log(music)
  
  document.getElementById("app").innerHTML = `
    <div id="music-tab"></div>
    <!-- main content -->
    <main id="main-player">
      <div id="container">
      </div>
    </main>
    <footer id="play-bar">
      <div id="sound">
        
        <div id="sound-level-control">
          <button id="mute"></button>
          <input id="level" type="range" />
        </div>
        
        <div id="play-control">
          <button id="play"></button>
        </div>

      </div>
      
      <div id="music-progress">
        <input id="music-progress-input" min="0" max="1000" type="range" />
      </div>
    </footer>
    `;

  setCards(music)
  setAudioPlayer()





}
export default playerPage;

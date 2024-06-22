class AudioPlayer {
  constructor(config) {
    this.media = config.el;
    this.plugins = config.plugins || [];
    this._initPlugins();
  }
}

AudioPlayer.prototype._initPlugins = function () {
  const player = {
    play: () => this.play(),
    pause: () => this.pause(),
    media: this.media,
    get muted() {
      return this.media.muted;
    },
    set muted(value) {
      this.media.value = value;
    },
  };

  this.plugins.forEach((plugin) => {
    plugin.run(player);
  });
};

AudioPlayer.prototype.play = function () {
  this.media.play();
};

AudioPlayer.prototype.load = function () {
  this.media.load();
};

AudioPlayer.prototype.pause = function () {
  this.media.pause();
};

AudioPlayer.prototype.togglePlay = function () {
  if (this.media.paused) {
    this.play();
  } else {
    this.pause();
  }
};

AudioPlayer.prototype.toggleMute = function () {
  if (this.media.muted) {
    this.media.muted = false;
  } else {
    this.media.muted = true;
  }
};

AudioPlayer.prototype.changeVolume = function (e) {
  this.media.volume = e / 100;
};

AudioPlayer.prototype.setProgressBar = function (barElement) {
  // barElement: input min=0 max=1000
  this.media.addEventListener("timeupdate", (e) => {
    barElement.value = (this.media.currentTime * 1000 / this.media.duration) ;
  });
  
  barElement.addEventListener("change", (e)=>{
    this.media.currentTime = barElement.value * this.media.duration / 1000
  })

};

export class AutoPlay {
  constructor() {}
}

AutoPlay.prototype.run = function (player) {
  if (!player.muted) {
    player.muted = true;
  }
  player.play();
};

export default AudioPlayer;

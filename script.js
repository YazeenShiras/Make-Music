setTimeout(() => {
  document.getElementById("loading").style.display = "none";
}, 8000);

let beats = {
  a: {
    beat: "./assets/Piano Chord 331.mp3",
  },
  s: {
    beat: "./assets/Piano Chord 209.mp3",
  },
  d: {
    beat: "./assets/Piano Chord 208.mp3",
  },
  f: {
    beat: "./assets/Drum Snicks Hit 3.mp3",
  },
  g: {
    beat: "./assets/Cymbal Suspended 2.mp3",
  },
  h: {
    beat: "./assets/PREL Musical 57.mp3",
  },
  j: {
    beat: "./assets/Musical Orches 4.mp3",
  },
  k: {
    beat: "./assets/Drum Snare Roll.mp3",
  },
  l: {
    beat: "./assets/Musical Compos 33.mp3",
  },
};

const playMusic = (buttonKey) => {
  let audioSrc = beats[buttonKey].beat;
  let audio = new Audio(audioSrc);
  audio.currentTime = 0;
  audio.play();
};

document.addEventListener("click", (e) => {
  playMusic(e.target.id);
});

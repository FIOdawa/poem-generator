function generateSong(event) {
  event.preventDefault();

  new Typewriter(".lyrics", {
    strings: " Surprise 모두 기립 박수 (hala hala) Suicide squad 현실판에 ",
    autoStart: true,
    delay: 0,
    cursor: "",
  });
}

let songFormElement = document.querySelector(".song-generator-form");
songFormElement.addEventListener("submit", generateSong);

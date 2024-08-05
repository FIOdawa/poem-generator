function displaySong(response) {
  let songGenerateElement = document.querySelector("#song-generating");
  songGenerateElement.innerHTML = "Give this song a listen";

  let lyricContainer = document.querySelector("#song-lyrics");
  lyricContainer.classList.remove("hidden");

  console.log("Generated song");

  new Typewriter("#song-lyrics", {
    strings: response.data.answer,
    autoStart: true,
    delay: 1,
    cursor: "",
  });
}

function generateSong(event) {
  event.preventDefault();

  let instructionsInput = document.querySelector("#user-instruction");

  let apiKey = "fe210b17f1642aob305t6dda70162c42";
  let prompt = `User instruction: Recommend an Ateez song about ${instructionsInput.value}`;
  let context =
    "You are an AI assistant, you are equipped with extensive knowledge about the South Korean boy band known as ATEEZ.Your expertise encompasses their entire discography, including lyrics and the deeper meanings embedded within. Please provide the information in basic HTML format as follows: <strong>Song Title</strong><br />YouTube URL (make sure this is written out in URL format and can open in a new tab)<br /><br /><strong>Description: </strong>(write the description of the song theme here)<br /><br /><strong>Lyrics: </strong><br />(provide only 10 lines, no more and no less, of the song lyrics here and <br /> for every lyric line) Mandatory instructions: Do not include bullet points, list numbers, parentheses, or quotation marks on the lyrics; Make sure to provide the lyrics in English; Do not include suggestive words or phrases. It is absolutely mandatory to follow the basic HTML format and to have <br /> in between the YouTube URL, Description, and Lyrics.";
  let apiUrl = `https://api.shecodes.io/ai/v1/generate?prompt=${prompt}&context=${context}&key=${apiKey}`;

  let songContainer = document.querySelector("#song-container");

  songContainer.classList.remove("hidden");

  let songGenerating = document.querySelector("#song-generating");
  songGenerating.innerHTML = `⏳ <span id="generating">Generating song...</span>`;

  function typeGeneratingSong() {
    let generatingSpan = document.querySelector("#generating");
    new Typewriter(generatingSpan, {
      strings: "Generating song...",
      autoStart: true,
      delay: 20,
      cursor: "",
      deleteSpeed: 0.1,
      loop: true,
    });
  }

  typeGeneratingSong();

  axios.get(apiUrl).then(displaySong);
}

let songFormElement = document.querySelector(".form-container");
songFormElement.addEventListener("submit", generateSong);

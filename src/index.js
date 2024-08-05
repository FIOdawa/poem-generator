function displaySong(response) {
  console.log("Generated song");
  new Typewriter(".lyrics", {
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
  let prompt = `User instruction: Generate an Ateez song about ${instructionsInput.value}`;
  let context =
    "You are an AI assistant, you are equipped with extensive knowledge about the South Korean boy band known as ATEEZ.Your expertise encompasses their entire discography, including lyrics and the deeper meanings embedded within. Please provide the information in basic HTML format as follows: <strong>Song Title</strong><br />YouTube URL (make sure this is written out in URL format and can open in a new tab)<br /><br /><strong>Description: </strong>(write the description of the song theme here)<br /><br /><strong>Lyrics: </strong><br />(provide only 10 lines, no more and no less, of the song lyrics here and <br /> for every lyric line) Mandatory instructions: Do not include bullet points, list numbers, parentheses, or quotation marks on the lyrics; Make sure to provide the lyrics in English; Do not include suggestive words or phrases. It is absolutely mandatory to follow the basic HTML format and to have <br /> in between the YouTube URL, Description, and Lyrics.";
  let apiUrl = `https://api.shecodes.io/ai/v1/generate?prompt=${prompt}&context=${context}&key=${apiKey}`;

  console.log("Generating song");
  console.log(`Prompt: ${prompt}`);
  console.log(`Context: ${context}`);

  axios.get(apiUrl).then(displaySong);
}

let songFormElement = document.querySelector(".song-generator-form");
songFormElement.addEventListener("submit", generateSong);

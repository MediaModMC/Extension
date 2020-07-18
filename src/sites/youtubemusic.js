import { sockethandler } from "../app/app.js";

function getMetadata() {
  const title = document
    .querySelector(".title.style-scope.ytmusic-player-bar")
    .getAttribute("title");

  const bylineElement = document.querySelector(
    "yt-formatted-string.byline.style-scope.ytmusic-player-bar.complex-string"
  );
  const artist = bylineElement.title.split(" • ", 1)[0];

  const albumArt = document
    .querySelector("img.image.style-scope.ytmusic-player-bar")
    .getAttribute("src");

  const progressBarElement = document.querySelector(
    "#progress-bar.style-scope.ytmusic-player-bar"
  );

  const progress = Number(progressBarElement.getAttribute("value")) * 1000;
  const duration =
    Number(progressBarElement.getAttribute("aria-valuemax")) * 1000;

  const moviePlayerElement = document.getElementById("movie_player");
  const paused = moviePlayerElement
    ? moviePlayerElement.classList.contains("paused-mode")
    : true;

  if (!title || title.trim().length === 0) {
    return;
  }

  return {
    progress_ms: progress,
    is_playing: !paused,
    item: {
      album: {
        artists: [
          {
            name: artist,
          },
        ],
        images: [
          {
            url: albumArt,
          },
        ],
      },
      artists: [
        {
          name: artist,
        },
      ],
      duration_ms: duration,
      name: title,
    },
  };
}

setInterval(() => {
  sockethandler.send(JSON.stringify(getMetadata()));
}, 3000);

import { sockethandler } from "../app/app.js";

function getMetadata() {
  const title = document
    .querySelector("a.playbackSoundBadge__titleLink.sc-truncate")
    .getAttribute("title");

  const artist = document
    .querySelector("a.playbackSoundBadge__lightLink.sc-truncate")
    .getAttribute("title");

  const playControl = document.querySelector("button.playControls__play");
  const paused = playControl
    ? !playControl.classList.contains("playing")
    : true;

  const artworkElement = document.querySelector(
    "a.sc-media-image div.image span.sc-artwork"
  );

  const albumArt = artworkElement.style["background-image"]
    .slice(4, -1)
    .replace(/"/g, "")
    .replace("50x50", "500x500");

  const progressBarElement = document.querySelector(
    "div.playbackTimeline__progressWrapper"
  );

  const progress =
    Number(progressBarElement.getAttribute("aria-valuenow")) * 1000;
  const duration =
    Number(progressBarElement.getAttribute("aria-valuemax")) * 1000;

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

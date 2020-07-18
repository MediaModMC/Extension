import { sockethandler } from "../app/app.js";

class YouTubeService {
  getMetadata() {
    const url = new URL(window.location.href);
    const videoId = url.searchParams.get("v");

    if (!videoId) {
      return;
    }

    const player = document.getElementById("movie_player");
    const paused = player ? player.classList.contains("paused-mode") : true;

    const titleElement = document.querySelector(
      "h1.title > .ytd-video-primary-info-renderer"
    );
    const titleElementOld = document.querySelector("#eow-title");
    const title = (titleElement
      ? titleElement
      : titleElementOld
    ).textContent.trim();

    const artistElement = document.querySelector(
      "#upload-info div#text-container.ytd-channel-name a"
    );
    const artistElementOld = document.querySelector(
      "#watch7-user-header .yt-user-info a"
    );
    const artist = (artistElement
      ? artistElement
      : artistElementOld
    ).textContent.trim();
    const videoElement = /** @type {HTMLVideoElement} */ (document.querySelector(
      "video.video-stream.html5-main-video"
    ));

    const albumArt = "https://img.youtube.com/vi/" + videoId + "/0.jpg";
    const progress = Math.floor(videoElement.currentTime) * 1000;
    const duration = Math.floor(videoElement.duration) * 1000;

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
}

sockethandler.setService(new YouTubeService())

setInterval(() => {
  title = $("h1")
    .filter(".title")
    .filter(".style-scope")
    .filter(".ytd-video-primary-info-renderer")
    .text();
  artist = $("#upload-info .ytd-channel-name")[0].innerText;
  albumart =
    "https://img.youtube.com/vi/" +
    $("iframe:first")[0].baseURI.replace(
      "https://www.youtube.com/watch?v=",
      ""
    ) +
    "/0.jpg";

  timestampSeconds = Math.floor($(".video-stream")[0].currentTime);
  lengthSeconds = Math.floor($(".video-stream")[0].duration);
  timestamp = timestampSeconds * 1000;
  length = lengthSeconds * 1000;

  if (title == "") {
    return;
  }

  data = {
    progress_ms: timestamp,
    item: {
      album: {
        artists: [
          {
            name: artist
          }
        ],
        images: [
          {
            height: 100,
            width: 100,
            url: albumart
          }
        ]
      },
      duration_ms: length,
      name: title
    }
  };

  fetch("http://localhost:9102/", {
    method: "post",
    headers: {
      "Content-Type": "application/json"
    },
    body: JSON.stringify(data)
  })
    .then(response => console.log(response))
    .catch(error =>
      console.error("[MediaMod] Error when sending request", error)
    );
}, 3000);

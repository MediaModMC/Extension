setInterval(() => {
  function youtube_parser(url) {
    var regExp = /^.*((youtu.be\/)|(v\/)|(\/u\/\w\/)|(embed\/)|(watch\?))\??v?=?([^#\&\?]*).*/;
    var match = url.match(regExp);
    return match && match[7].length == 11 ? match[7] : false;
  }

  let title = $("h1")
    .filter(".title")
    .filter(".style-scope")
    .filter(".ytd-video-primary-info-renderer")
    .text();
  let artist = $("#upload-info .ytd-channel-name")[0].innerText;
  let albumart =
    "https://img.youtube.com/vi/" +
    youtube_parser($("iframe:first")[0].baseURI) +
    "/0.jpg";

  console.log(albumart);

  let timestampSeconds = Math.floor($(".video-stream")[0].currentTime);
  let lengthSeconds = Math.floor($(".video-stream")[0].duration);
  let timestamp = timestampSeconds * 1000;
  let length = lengthSeconds * 1000;

  if (title === "") {
    return;
  }

  let data = {
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

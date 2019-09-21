setInterval(() => {
  title = $("#currently-playing-title").text();
  artist = $("#player-artist").text();
  albumart = $("#playerBarArt").attr("src");
  albumname = $(".player-album").text();
  timestamp = $("#material-player-progress").attr("value");
  length = $("#material-player-progress").attr("aria-valuemax");

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

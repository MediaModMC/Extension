setInterval(() => {
  title = $(".title")
    .filter(".style-scope")
    .filter(".ytmusic-player-bar")
    .attr("title");
  data = $(".byline")
    .filter(".style-scope")
    .filter(".ytmusic-player-bar")
    .attr("title");
  var [artist, albumname, releaseDate] = data.split(" • ");
  albumart = $(".image")
    .filter(".style-scope")
    .filter(".ytmusic-player-bar")
    .attr("src");
  timestampSeconds = data = $("#progress-bar")
    .filter(".style-scope")
    .filter(".ytmusic-player-bar")
    .attr("value");
  lengthSeconds = data = $("#progress-bar")
    .filter(".style-scope")
    .filter(".ytmusic-player-bar")
    .attr("aria-valuemax");
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

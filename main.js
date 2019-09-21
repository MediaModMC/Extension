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
    songTitle: title,
    songArtist: artist,
    albumURL: albumart,
    songAlbum: albumname,
    currentTimestamp: timestamp,
    songLength: length
  };

  console.log("Sending post request");

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

  console.log("ae");
}, 3000);

setInterval(() => {
    let title = $("#currently-playing-title").text();
    let artist = $("#player-artist").text();
    let albumart = $("#playerBarArt").attr("src");
    let timestamp = $("#material-player-progress").attr("value");
    let length = $("#material-player-progress").attr("aria-valuemax");

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

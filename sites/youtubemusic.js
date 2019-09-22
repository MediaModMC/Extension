setInterval(() => {
    let title = $(".title")
        .filter(".style-scope")
        .filter(".ytmusic-player-bar")
        .attr("title");
    let data = $(".byline")
        .filter(".style-scope")
        .filter(".ytmusic-player-bar")
        .attr("title");
    let [artist, albumname, releaseDate] = data.split(" • ");
    let albumart = $(".image")
        .filter(".style-scope")
        .filter(".ytmusic-player-bar")
        .attr("src");
    let timestampSeconds = data = $("#progress-bar")
        .filter(".style-scope")
        .filter(".ytmusic-player-bar")
        .attr("value");
    let lengthSeconds = data = $("#progress-bar")
        .filter(".style-scope")
        .filter(".ytmusic-player-bar")
        .attr("aria-valuemax");
    let timestamp = timestampSeconds * 1000;
    length = lengthSeconds * 1000;

    if (title === "") {
        return;
    }

    let json = {
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
        body: JSON.stringify(json)
    })
        .then(response => console.log(response))
        .catch(error =>
            console.error("[MediaMod] Error when sending request", error)
        );
}, 3000);

setInterval(() => {
    let title = document
        .querySelector("#currently-playing-title")
        .getAttribute("title");
    let artist = document
        .querySelector("#player-artist").innerText
    let albumart = document
        .querySelector("#playerBarArt").getAttribute("src");
    let timestamp = document
        .querySelector("#material-player-progress").getAttribute("value");
    let length = document
        .querySelector("#material-player-progress").getAttribute("aria-valuemax");

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
            artists: [
                {
                    name: artist
                }
            ],
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

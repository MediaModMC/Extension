window.addEventListener(
    "unload",
    function (event) {
        fetch("http://localhost:9102/disconnect", {
            method: "get"
        })
            .then(response => console.log(response))
            .catch(error =>
                console.error("[MediaMod] Error when sending request", error)
            );
    },
    false
);

document.addEventListener('visibilitychange', function () {
    fetch("http://localhost:9102/disconnect", {
        method: "get"
    })
        .then(response => console.log(response))
        .catch(error =>
            console.error("[MediaMod] Error when sending request", error)
        );
})

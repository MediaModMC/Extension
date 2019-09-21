window.onbeforeunload = function(e) {
  fetch("http://localhost:9102/disconnect", {
    method: "post"
  })
    .then(response => console.log(response))
    .catch(error =>
      console.error("[MediaMod] Error when sending request", error)
    );
};

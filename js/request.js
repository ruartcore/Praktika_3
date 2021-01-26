function request(cb) {
  var xhr = new XMLHttpRequest();
  xhr.open("GET", `https://api.unsplash.com/search/photos?query=drone-view&color=blue&client_id=NNZvAlEVWvuXSGCaySBSFHQ5WBtp3_5HGNAeBCqKTic&page=${page}}`, true);
  xhr.onload = function(e) {
    if(xhr.readyState === 4) {
      if(xhr.status === 200) {
        try {
          return cb(JSON.parse(xhr.responseText));
        } catch {}
      }
    }
  };
  xhr.send(null);
}
mainFn = (data) => new Promise((resolve) => {
  request((_data) => {
    resolve(_data);
  });
});
function storeVariable() {
    sessionStorage.setItem("URL", document.getElementById("url").value);
    sessionStorage.setItem("START", document.getElementById("startDate").value.toString().replace('-',''));
    sessionStorage.setItem("END", document.getElementById("endDate").value.toString().replace("-", ""));
    sessionStorage.setItem("KEYWORD", document.getElementById("keyword").value);
    sessionStorage.setItem("DEPTH", document.getElementById("depthOfSearch").value);
    return true;
  }
  function getJson() {
    var myJSON = JSON.stringify({'url': document.getElementById("url"), 'startDate': document.getElementById("startDate").value, 'endDate': document.getElementById("endDate").value, 'keyword': document.getElementById("keyword").value, 'depth': document.getElementById("depth").value});
    return myJSON;
  }

function ajax(url, callback) {
    var xmlhttp = new XMLHttpRequest();
    xmlhttp.onreadystatechange = function(){
        if (xmlhttp.readyState == 4 && xmlhttp.status == 200){
            callback(xmlhttp.responseText);
        }
    }
    xmlhttp.open("GET", url, true);
    xmlhttp.send();
}

function requestData(endpoint) {
    var root = 'http://jsonplaceholder.typicode.com/';
    ajax(root + endpoint, function(data) {
        var json = JSON.parse(data);
        console.log(json.data.title);
    });
}

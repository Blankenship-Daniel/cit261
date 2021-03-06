function ajax(url, callback) {
    var xmlhttp = new XMLHttpRequest();
    xmlhttp.onreadystatechange = function(){
        if (xmlhttp.readyState == 4 && xmlhttp.status == 200){
            callback(xmlhttp.responseText);
        } else {
            // handle the request
        }
    }
    xmlhttp.open("GET", url, true);
    xmlhttp.send();
}

function requestData(endpoint) {
    var root = 'https://api.github.com';
    ajax(root + endpoint, function(data) {
        document.getElementById('output').innerHTML = data;
    });
}

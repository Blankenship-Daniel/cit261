function ajax(url, callback) {
    var xmlhttp = new XMLHttpRequest();
    xmlhttp.onreadystatechange = function(){
        if (xmlhttp.readyState == 4 && xmlhttp.status == 200){
            callback(xmlhttp.responseText);
        } else if (xmlhttp.status === 404) {
            callback(404);
        }
    }
    xmlhttp.open("GET", url, true);
    xmlhttp.send();
}

function requestData(endpoint) {
    var root = 'https://api.github.com';
    console.log(endpoint);
    ajax(root + endpoint, function(data) {
        var output = document.getElementById('output').innerHTML;
        if (data === 404) {
            output = 'Sorry! We couldn\'t find that repo';
        } else {
            output = data;
        }
    });
}

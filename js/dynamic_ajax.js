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
    ajax(root + endpoint, function(data) {
        document.getElementById('output').innerHTML = data;
    });
}

function populateDropdown() {
    ajax('http://api.github.com/users/Blankenship-Daniel/repos', function(data) {
        var select = document.getElementById('repos');
        for (var i = 0; i < data.length; i++) {
            console.log(data[i].name);
        }
    });
}

window.onload = function() {
    populateDropdown();
};

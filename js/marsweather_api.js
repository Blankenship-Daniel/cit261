(function () {
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

    function getLatestWeather() {
        ajax('http://marsweather.ingenology.com/v1/latest/', function(data) {
            console.log(data);
        });
    }
})();

function addToCart() {
    var output = document.getElementById("storage_code_snippet");
    var key = document.getElementById("product_name").value;
    var val = document.getElementById("product_price").value;

    localStorage.setItem(key, val);
    populateShoppingCart(localStorage);

    output.innerHTML = JSON.stringify(localStorage);
}

function populateShoppingCart(json) {
    var tbody = document.getElementById('shopping_cart_data');
    tbody.innerHTML = "";
    
    for (var prop in json) {
        var tr = document.createElement('tr');
        var td1 = document.createElement('td');
        var td2 = document.createElement('td');

        td1.appendChild(document.createTextNode(prop));
        td2.appendChild(document.createTextNode(json[prop]));

        tr.appendChild(td1);
        tr.appendChild(td2);

        tbody.appendChild(tr);
    }
}

populateShoppingCart(localStorage);

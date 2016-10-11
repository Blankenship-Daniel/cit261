function toggleClass(elem, cls) {
    if (elem.classList.contains(cls)) {
        elem.classList.remove(cls);
    } else {
        elem.classList.add(cls);
    }
}

document.getElementById("red_box_button").onclick = function() {
    var redBox = document.getElementById("red_box");
    toggleClass(redBox, "change_box");
};

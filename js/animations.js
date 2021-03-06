function toggleClass(elem, cls) {
    if (elem.classList.contains(cls)) {
        elem.classList.remove(cls);
    } else {
        elem.classList.add(cls);
    }
}

function invertSite(elem, cls) {
    toggleClass(elem, cls);
}

function squareToCircle(elem, cls) {
    toggleClass(elem, cls);
}

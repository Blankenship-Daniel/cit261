function toggleClass(elem, cls) {
    if (elem.classList.contains(cls)) {
        elem.classList.remove(cls);
    } else {
        elem.classList.add(cls);
    }
}

function changeBackground(elem, cls) {
    toggleClass(elem, cls);
}

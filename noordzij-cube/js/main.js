function togglePopover() {
    var popup = document.getElementById("infoPopover");
    popup.classList.toggle("visible");
    var hider = document.getElementById("info");
    if (hider.innerHTML === "Info") {
        hider.innerHTML = "Hide Info";
    } else {
        hider.innerHTML = "Info";
    }
}
function upSize() {
    console.log("upSize function accessed");
    let width = document.getElementById("giants").getAttribute("width");
    document.getElementById("giants").setAttribute("width", width + 5);
}

function downSize() {
    console.log("upSize function accessed");
    let width = document.getElementById("giants").getAttribute("width");
    document.getElementById("giants").setAttribute("width", width - 5);
}
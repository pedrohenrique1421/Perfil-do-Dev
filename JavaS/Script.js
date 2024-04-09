function copyToClipBoard() {
    navigator.clipboard.writeText("phenriquelins1@Gmail.com").then(() => {
        alert("Copiado para área de transferência.")
    })
}

let posX = window.scrollX;
let posY = window.scrollY;

let a = posX;
let b = posY;

setInterval(() => {
    console.clear()
    posX = window.scrollX;
    posY = window.scrollY;

    console.log("X: " + posX);
    console.log("Y: " + posY);
}, 500);
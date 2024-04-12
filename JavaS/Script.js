function copyToClipBoard() {
    navigator.clipboard.writeText("phenriquelins1@Gmail.com").then(() => {
        alert("Copiado para área de transferência.")
    })
}

let posX = window.scrollX;
let posY = window.scrollY;

let posXRef = posX;
let posYref = posY;

let mouseOn = false;

const navbar = document.getElementById("NavBar");

setInterval(() => {


    posX = window.scrollX;
    posY = window.scrollY;

    if (posX !== posXRef | posY !== posYref) {
        console.clear()
        console.log("X: " + posX);
        console.log("Y: " + posY);
        posXRef = posX;
        posYref = posY;
    }
    navbar.addEventListener("mouseover", () => {
        console.log("Mouse on");
        navbar.style.opacity = "1";
        mouseOn = true;
        setTimeout(() => {
            mouseOn = false;
        }, 5000)
    })
    if (posY == 0 && !mouseOn) {
        navbar.style.opacity = "0";
    } else {
        navbar.style.opacity = "1";
    }
}, 800);



//Carrosel===============================

const boxDeAcao = document.getElementById("first").style;
const tempo = 5
boxDeAcao.transition = String(tempo + "s linear")
boxDeAcao.marginLeft = "-150vw"

setInterval(()=>{
    boxDeAcao.transition = null
    boxDeAcao.marginLeft = null
    setTimeout(()=>{
        boxDeAcao.transition = String(tempo + "s linear")
        boxDeAcao.marginLeft = "-150vw"
    }, 10)

}, (tempo * 1000))
function copyToClipBoard() {
    navigator.clipboard.writeText("phenriquelins1@Gmail.com").then(() => {
        alert("Copiado para área de transferência.");
    });
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

    if ((posX !== posXRef) | (posY !== posYref)) {
        console.clear();
        console.log("X: " + posX);
        console.log("Y: " + posY);
        posXRef = posX;
        posYref = posY;
    }
    navbar.addEventListener("mouseenter", () => {
        navbar.style.opacity = "1";
        mouseOn = true;
    });
    navbar.addEventListener("mouseleave", () => {
        if (posY == 0) {
            navbar.style.opacity = "0";
        }
        mouseOn = false;
    });
    if (posY == 0 && !mouseOn) {
        navbar.style.opacity = "0";
    } else {
        navbar.style.opacity = "1";
    }
}, 800);


const setElement = (element) =>{
    console.log(element)
    localStorage.setItem("elementForDescription", element);
    localStorage.setItem("from", "certificados");
}

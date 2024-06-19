function copyToClipBoard() {
    navigator.clipboard.writeText("phenriquelins1@Gmail.com").then(() => {
        alert("Copiado para área de transferência.");
    });
}

let posX = window.scrollX;
let posY = window.scrollY;

let posXRef = posX;
let posYref = posY;

let widthDaWindow = window.innerWidth;

let mouseOn = false;

const navbar = document.getElementById("NavBar");
const menu = document.getElementById("Menu");

setInterval(() => {
    posX = window.scrollX;
    posY = window.scrollY;

    if ((posX !== posXRef) | (posY !== posYref)) {
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
        if (widthDaWindow <= 450) {
            menu.style.opacity = "0.1";
        }
    } else {
        navbar.style.opacity = "1";
        if (widthDaWindow <= 450) {
            menu.style.opacity = "1";
        }
    }
}, 800);

const setElement = (element, from) => {
    localStorage.setItem("elementForDescription", element);
    localStorage.setItem("from", from);
};



const setNavBar = () => {
    const boxes = document.getElementsByClassName("boxNavBar");
    const header = document.getElementsByTagName("header");
    const imgs = document.getElementsByClassName("imgNavBar");

    header[0].style.width = "30vw";
    header[0].style.pointerEvents = "all"

    for (let i = 0; i < boxes.length;) {
        const boxDaVez = boxes[i];
        boxDaVez.style.width = "30vw";

        i++;
    }

    for (let a = 0; a < imgs.length;) {
        const boxDaVez = imgs[a];
        boxDaVez.style.width = "10vw";

        a++;
    }
};

const clearNavBar = () => {
    if (widthDaWindow <= 450) {
        const header = document.getElementsByTagName("header");
        const boxes = document.getElementsByClassName("boxNavBar");
        const imgs = document.getElementsByClassName("imgNavBar");

        header[0].style.width = "0";
        header[0].style.pointerEvents = "none"

        for (let i = 0; i < boxes.length;) {
            const boxDaVez = boxes[i];
            boxDaVez.style.width = "0";

            i++;
        }

        for (let a = 0; a < imgs.length;) {
            const boxDaVez = imgs[a];
            boxDaVez.style.width = "0";

            a++;
        }
    }
};

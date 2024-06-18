const element = document.getElementById("textprinc")
const cursor = document.getElementById("cursor")
let count = 0


function sleep(ms) {
    return new Promise(resolve => setTimeout(resolve, ms));
}

const mudarTexto = async (palavra) => {
    let tempo = 300
    let texto = element.outerText
    let tamanho = texto.length
    let palavraTamanho = palavra.length

    cursor.style.animation = "none"

    for (let i = 0; i < tamanho; i++) {
        if (i > 10) {
            texto = texto.substring(0, texto.length - 1)
            element.innerText = texto
            await sleep(tempo);
        }
    }
    for (let i = 0; i < palavraTamanho; i++) {
        texto += palavra[i]
        element.innerText = texto
        await sleep(tempo);
    }
    cursor.style.animation = "infinite alternate-reverse 0.5s piscar"
}

mudarTexto("aprendiz...").then(async () => {
    await sleep(3000)
    mudarTexto("pensador...").then(async () => {
        await sleep(3000)
        mudarTexto("atencioso...").then(async () => {
            mudarTexto("sonhador...")
        })
    })
})
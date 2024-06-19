const element = document.getElementById("textprinc")
const cursor = document.getElementById("cursor")
let count = 0


function sleep(ms) {
    return new Promise(resolve => setTimeout(resolve, ms));
}

const mudarTexto = async (palavra) => {
    let tempo = 250
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

const loopMudarTexto = async () => {
    const awaitTime = 5000
    mudarTexto("aprendiz...").then(async () => {
        await sleep(awaitTime)
        mudarTexto("pensador...").then(async () => {
            await sleep(awaitTime)
            mudarTexto("proativo...").then(async () => {
                await sleep(awaitTime)
                mudarTexto("sonhador...").then(async () => {
                    await sleep(awaitTime)
                    mudarTexto("apaixonado...").then(async () => {
                        await sleep(awaitTime)
                        loopMudarTexto()
                    })
                })
            })
        })
    })
}

loopMudarTexto()
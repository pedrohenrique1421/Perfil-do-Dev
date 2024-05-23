let elementSelected = localStorage.getItem("elementForDescription")
let from = localStorage.getItem("from")

console.log(from)


console.log(elementSelected)


const title = document.getElementById('title')
const subTitle = document.getElementById('subTitle')
const logoImage = document.getElementById('logoImage')
const linkRepo = document.getElementById("linkRepo")
const linkSite = document.getElementById("linkSite")
const data = document.getElementById("data")
const equipe = document.getElementById("equipe")
const ferramentas = document.getElementById("ferramentas")
const finalidade = document.getElementById("finalidade")
const divDeImagens = document.getElementById("images")



if (elementSelected) {

    if (from == "certificados") {
        switch (elementSelected) {
            case "declaracao":
                title.innerText = "Declaração de participação"
                subTitle.innerText = "Declaração de participação do projeto LevantaAE"
                logoImage.src = "../../Media/DECLARACAO_PEDRO_assinado_assinado (1)-1.png"
                logoImage.style.width = "600px"
                linkRepo.outerHTML = "<h6>Link para ver imagem no drive: <a href='https://drive.google.com/file/d/1-p2RX26sYynZoh51-H7JieJBc_hePfgF/view'>Clique aqui para ser redirecionado</a><h6>"
                linkSite.innerHTML = ""
                linkRepo.style.margin = "0"
                linkSite.style.marginBottom = "0"
                data.innerText = "Data de desenvolvimento: 01/10/2023 - 01/03/2024"
                ferramentas.innerText = "Ferramentas: HTML, CSS, JavaScript, React Native, Firebase Firestore, Firebase Hosting, Firebase SDK"
                finalidade.innerText = ""
                break;
            case "hackatonETEPD":
                title.innerText = "Certificado de participação"
                subTitle.innerText = "Certificado de participação do Hackton ETPD"
                logoImage.src = "../../Media/HackatonETEPD-1.png"
                logoImage.style.width = "600px"
                linkRepo.outerHTML = "<h6>Link para ver imagem no drive: <a href='https://drive.google.com/file/d/1e4B8zaUGMLmXqDBNaTMIQtttbyAhumQD/view'>Clique aqui para ser redirecionado</a><h6>"
                linkSite.innerHTML = ""
                linkRepo.style.margin = "0"
                linkSite.style.marginBottom = "0"
                data.innerText = "Data: 01/07/2023 - 03/03/2023"
                equipe.innerText = ""
                ferramentas.innerText = "Ferramentas: HTML, CSS, JavaScript, Figma"
                finalidade.innerText = ""
                break;
            case "juventudeCode":
                title.innerText = "Certificado de participação"
                subTitle.innerText = "Certificado de participação do Juventude Code"
                logoImage.src = "../../Media/JuventudeCode-1.png"
                logoImage.style.width = "600px"
                linkRepo.outerHTML = "<h6>Link para ver imagem no drive: <a href='https://drive.google.com/file/d/1h442jnaTrKG5-wnEzblQad3z_dJUgzCo/view'>Clique aqui para ser redirecionado</a><h6>"
                linkSite.outerHTML = "<h6>Link para saber mais sobre o projeto: <a href='https://jornaldigital.recife.br/2023/05/29/projeto-juventude-code-une-educacao-tecnologia-e-transformacao-social/'>Clique aqui para ser redirecionado</a></h6>"
                linkRepo.style.margin = "0"
                linkSite.style.marginBottom = "0"
                data.innerText = "Data: 05/09/2022 - 24/11/2022"
                equipe.innerText = ""
                ferramentas.innerText = "Ferramentas: HTML, CSS, JavaScript, Figma"
                finalidade.innerText = ""
                break;
            case "codeCombat":
                title.innerText = "Certificado de conclusão"
                subTitle.innerText = "Certificado de conclusão da plataforma de ensino Code Combate"
                logoImage.src = "../../Media/CodeCombat-1.png"
                logoImage.style.width = "700px"
                linkRepo.outerHTML = "<h6>Link para ver imagem no drive: <a href='https://drive.google.com/file/d/1kGXNueFlPG7exOyYF3gEh4YGGAcxveZp/view'>Clique aqui para ser redirecionado</a><h6>"
                linkSite.outerHTML = "<h6>Link para a plataforma: <a href='https://codecombat.com'>Clique aqui para ser redirecionado</a></h6>"
                linkRepo.style.margin = "0"
                linkSite.style.marginBottom = "0"
                data.innerText = "Data: 10/03/2021 - 24/03/2021"
                equipe.innerText = ""
                ferramentas.innerText = "Ferramentas: Python"
                finalidade.innerText = ""
                break;
            case "jsFuncoes":
                title.innerText = "Certificado de conclusão"
                subTitle.innerText = "Certificado de conclusão de curso da plataforma de ensino Alura"
                logoImage.src = "../../Media/JS_Funcoes-1.png"
                logoImage.style.width = "700px"
                linkRepo.outerHTML = "<h6>Link para ver imagem no drive: <a href='https://drive.google.com/file/d/1XoM1ALu-BJtQBoUiEeEoNuSZRweFVdjN/view'>Clique aqui para ser redirecionado</a><h6>"
                linkSite.outerHTML = "<h6>Link para a plataforma: <a href='https://www.alura.com.br'>Clique aqui para ser redirecionado</a></h6>"
                linkRepo.style.margin = "0"
                linkSite.style.marginBottom = "0"
                data.innerText = "Data: 12/04/2024"
                equipe.innerText = ""
                ferramentas.innerText = "Ferramentas: JavaScript"
                finalidade.innerText = ""
                break;
            case "logicaP":
                title.innerText = "Certificado de conclusão"
                subTitle.innerText = "Certificado de conclusão de curso da plataforma de ensino Alura"
                logoImage.src = "../../Media/JavaScript-1.png"
                logoImage.style.width = "700px"
                linkRepo.outerHTML = "<h6>Link para ver imagem no drive: <a href='https://drive.google.com/file/d/1XoM1ALu-BJtQBoUiEeEoNuSZRweFVdjN/view'>Clique aqui para ser redirecionado</a><h6>"
                linkSite.outerHTML = "<h6>Link para a plataforma: <a href='https://www.alura.com.br'>Clique aqui para ser redirecionado</a></h6>"
                linkRepo.style.margin = "0"
                linkSite.style.marginBottom = "0"
                data.innerText = "Data: 12/04/2024"
                equipe.innerText = ""
                ferramentas.innerText = "Ferramentas: JavaScript"
                finalidade.innerText = ""
                break;  
                //falta colocar o link do drive
            case "htmlCssAmbiente":
                title.innerText = "Certificado de conclusão"
                subTitle.innerText = "Certificado de conclusão de curso da plataforma de ensino Alura"
                logoImage.src = "../../Media/HTML_CSS_ambiente.png"
                logoImage.style.width = "700px"
                logoImage.style.backgroundColor = "#f1f1f1"
                linkRepo.outerHTML = "<h6>Link para ver imagem no drive: <a href='https://drive.google.com/file/d/1cMnT8u17NHUHqtrXUgpJY_GWBFT7_x6h/view'>Clique aqui para ser redirecionado</a><h6>"
                linkSite.outerHTML = "<h6>Link para a plataforma: <a href='https://www.alura.com.br'>Clique aqui para ser redirecionado</a></h6>"
                linkRepo.style.margin = "0"
                linkSite.style.marginBottom = "0"
                data.innerText = "Data: 26/04/2024"
                equipe.innerText = ""
                ferramentas.innerText = "Ferramentas: HTML, CSS"
                finalidade.innerText = ""
                break;
            case "htmlCssflexbox":
                title.innerText = "Certificado de conclusão"
                subTitle.innerText = "Certificado de conclusão de curso da plataforma de ensino Alura"
                logoImage.src = "../../Media/HTML_CSS_flexbox.png"
                logoImage.style.width = "700px"
                logoImage.style.backgroundColor = "#f1f1f1"
                linkRepo.outerHTML = "<h6>Link para ver imagem no drive: <a href='https://drive.google.com/file/d/1cMnT8u17NHUHqtrXUgpJY_GWBFT7_x6h/view'>Clique aqui para ser redirecionado</a><h6>"
                linkSite.outerHTML = "<h6>Link para a plataforma: <a href='https://www.alura.com.br'>Clique aqui para ser redirecionado</a></h6>"
                linkRepo.style.margin = "0"
                linkSite.style.marginBottom = "0"
                data.innerText = "Data: 26/04/2024"
                equipe.innerText = ""
                ferramentas.innerText = "Ferramentas: HTML, CSS"
                finalidade.innerText = ""
                break;
            case "htmlCssVar":
                title.innerText = "Certificado de conclusão"
                subTitle.innerText = "Certificado de conclusão de curso da plataforma de ensino Alura"
                logoImage.src = "../../Media/HTML_CSS_variaveis.png"
                logoImage.style.width = "700px"
                logoImage.style.backgroundColor = "#f1f1f1"
                linkRepo.outerHTML = "<h6>Link para ver imagem no drive: <a href='https://drive.google.com/file/d/18Gnws4Gvlm17Ca_pVNyUxdOGmonTSN_W/view'>Clique aqui para ser redirecionado</a><h6>"
                linkSite.outerHTML = "<h6>Link para a plataforma: <a href='https://www.alura.com.br'>Clique aqui para ser redirecionado</a></h6>"
                linkRepo.style.margin = "0"
                linkSite.style.marginBottom = "0"
                data.innerText = "Data: 26/04/2024"
                equipe.innerText = ""
                ferramentas.innerText = "Ferramentas: HTML, CSS"
                finalidade.innerText = ""
                break;
            case "lpLacos":
                title.innerText = "Certificado de conclusão"
                subTitle.innerText = "Certificado de conclusão de curso da plataforma de ensino Alura"
                logoImage.src = "../../Media/LP_lacos.png"
                logoImage.style.width = "700px"
                logoImage.style.backgroundColor = "#f1f1f1"
                linkRepo.outerHTML = "<h6>Link para ver imagem no drive: <a href='https://drive.google.com/file/d/17d_li23SvDb4XxLfdLl0UJ3BUPCkNKpO/view'>Clique aqui para ser redirecionado</a><h6>"
                linkSite.outerHTML = "<h6>Link para a plataforma: <a href='https://www.alura.com.br'>Clique aqui para ser redirecionado</a></h6>"
                linkRepo.style.margin = "0"
                linkSite.style.marginBottom = "0"
                data.innerText = "Data: 24/04/2024"
                equipe.innerText = ""
                ferramentas.innerText = "Ferramentas: JavaScript"
                finalidade.innerText = ""
                break;
            case "lpPong":
                title.innerText = "Certificado de conclusão"
                subTitle.innerText = "Certificado de conclusão de curso da plataforma de ensino Alura"
                logoImage.src = "../../Media/LP_pong.png"
                logoImage.style.width = "700px"
                logoImage.style.backgroundColor = "#f1f1f1"
                linkRepo.outerHTML = "<h6>Link para ver imagem no drive: <a href='https://drive.google.com/file/d/16sMlqgd3E_PPotXWqKwzby6l0a1bkAwZ/view'>Clique aqui para ser redirecionado</a><h6>"
                linkSite.outerHTML = "<h6>Link para a plataforma: <a href='https://www.alura.com.br'>Clique aqui para ser redirecionado</a></h6>"
                linkRepo.style.margin = "0"
                linkSite.style.marginBottom = "0"
                data.innerText = "Data: 26/04/2024"
                equipe.innerText = ""
                ferramentas.innerText = "Ferramentas: JavaScript"
                finalidade.innerText = ""
                break;
            default:
                title.innerText = "Error 404"
                subTitle.innerText = ""
                logoImage.src = "../../Media/ImagesDescription/error404.svg"
                logoImage.style.width = "200px"
                linkRepo.innerText = "Não achamos a página requisitada"
                linkSite.innerText = "Tente em outro momento ou me contate "
                data.innerText = "E-mail: Phenriquelins1@gmail.com"
                equipe.innerText = "Github: pedrohenrique1421"
                ferramentas.innerText = "Agradeço a consideração 🙂"
                finalidade.innerText = ""
                break;
        }
    }

} else {
    console.log("Error: elementSelected isen't defined")
}


let elementSelected = localStorage.getItem("elementForDescription");

console.log(elementSelected)


const title = document.getElementById('title')

const subTitle = document.getElementById('subTitle')

const logoImage = document.getElementById('logoImage')

const hs6 = document.getElementsByTagName("h6")

console.log(hs6[0])

if(elementSelected){
    console.log("ta tudo certinho")
} else {
    console.log("Error: elementSelected isen't defined")
}


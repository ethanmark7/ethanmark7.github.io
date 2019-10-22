const firstYear = 2012
const lastYear = 2019

document.querySelector('.years-pannel').innerHTML += `<div style="width: calc(50vw - 7.75rem); background: red;"></div>`

for (let year = firstYear; year <= lastYear; year++) {
    document.querySelector('.years-pannel').innerHTML += `<div style="background-image: url('My Journey/${year}/main.png')">${year}</div>`
}

document.querySelector('.years-pannel').innerHTML += `<div style="width: calc(50vw - 7.75rem); background: red;"></div>`

document.querySelector('.years-pannel').scrollTo({left: ((lastYear-firstYear)*convertRemToPixels(14.75)/2) + convertRemToPixels(.75)})

function convertRemToPixels(rem) {    
    return rem * parseFloat(getComputedStyle(document.documentElement).fontSize);
}

getInstructions(2012)

async function getInstructions(year) {
    var yearHTML = ''
    var finding = true
    var i = 1
    while (finding) {
        let instructions = await fetch(`My Journey/${year}/section_${i}/instructions.txt`).then(function (responce){
            if (responce.status == 404) {
                finding = false
            } else {
                return responce.text()
            }
        })
        console.log(instructions)
        if (instructions) {
            eval('(async function(){ yearHTML +=await ' + instructions.split('\n').join('+ await ') + '})()')
        }
        i++
    }
    document.querySelector('.years-sections').innerHTML += yearHTML
    console.log(yearHTML)
} 

async function createImageWithText(year, section, img, txt) {
    var text = await fetch(`My Journey/${year}/section_${section}/text/${txt}.txt`).then(r=>r.text())
    return `<section class="imageWithText"><img src="My Journey/${year}/section_${section}/images/${img}.png"><p>${text}</p></section>`
}
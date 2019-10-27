const firstYear = 2012
const lastYear = 2019
var previousYear = 0

//Scroll to select year - listener
document.querySelector('.years-pannel').addEventListener('scroll', selectYearFromScroll)

//Load the 'before' space
document.querySelector('.years-pannel').innerHTML += `<div style="width: calc(50vw - 7.75rem); background: red;"></div>`

//Load the images
for (let year = firstYear; year <= lastYear; year++) {
    document.querySelector('.years-pannel').innerHTML += `<div style="background-image: url('My Journey/${year}/main.png')">${year}</div>`
}

//Load the 'after' space
document.querySelector('.years-pannel').innerHTML += `<div style="width: calc(50vw - 7.75rem); background: red;"></div>`

//Center the scroller
document.querySelector('.years-pannel').scrollTo({left: ((lastYear-firstYear)*convertRemToPixels(14.75)/2) + convertRemToPixels(.75)})

//Convert rem to pixels
function convertRemToPixels(rem) {    
    return rem * parseFloat(getComputedStyle(document.documentElement).fontSize);
}

//Select year from scroll
function selectYearFromScroll(event) {
    if (2012 + event.target.scrollLeft/236 == Math.round(2012 + event.target.scrollLeft/236)) {
        console.log(previousYear)
        if (previousYear != parseInt(2012 + event.target.scrollLeft/236)) {
            //Hide the previous page
            document.querySelector('.years-sections').innerHTML = null
            
            //Add Sections
            getInstructions(parseInt(2012 + event.target.scrollLeft/236))
            previousYear = parseInt(2012 + event.target.scrollLeft/236)
        }
    }
}

async function getInstructions(year) {
    getSection(1, year, '')
} 

async function getSection(sectionNumber, year, yearHTML) {
    let instructions = await fetch(`My Journey/${year}/section_${sectionNumber}/instructions.txt`).then(function (responce){
        if (responce.status == 404) {
        } else {
            return responce.text()
        }
    })
    console.log(instructions)
    if (instructions) {
        eval('(async function(){ yearHTML +=await ' + instructions.split('\n').filter(x=>x).join('+ await ') + '; getSection(sectionNumber+1, year, yearHTML)})()')
    } else {
        document.querySelector('.years-sections').innerHTML += `<section class="year-sections" id="${year}">
        ${yearHTML}</section>`
    }
    return 
}

async function create_ImageWithText(year, section, img, txt) {
    var text = await fetch(`My Journey/${year}/section_${section}/text/${txt}.txt`).then(r=>r.text())
    return `<section class="imageWithText"><img src="My Journey/${year}/section_${section}/images/${img}.png"><p>${text}</p></section>`
}
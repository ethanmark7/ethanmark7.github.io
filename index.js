window.addEventListener('scroll', scrollListener)
var covered = false

function mainTitleClick() {
    window.scrollTo({
        left: 0,
        top: 0,
        behavior: 'smooth'
    }) 
    //()=>document.querySelector('.transparent-cover').classList.add('open')    Short hand for function
    setTimeout(()=>document.querySelector('.transparent-cover').classList.add('open'), 150)
    covered = true
}

function removeTransparentCover() {
    document.querySelector('.transparent-cover').classList.remove('open')   
    covered = false
}

function scrollListener() {
    const rect = document.querySelector('.main-title').getBoundingClientRect()
    if (rect.top < -50 && covered) {
        removeTransparentCover()
        console.log("removed")
    }
}
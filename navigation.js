window.addEventListener('scroll', scrollListener)

function removeTransparentCover() {
    document.querySelector('.transparent-cover').classList.remove('open')   
    covered = false
}

function scrollListener() {
    const rect = document.querySelector('.page-title').getBoundingClientRect()
    if (rect.top < -8.75) {
        document.querySelector('.navigation-bar').classList.add('appear')   
    } else {
        document.querySelector('.navigation-bar').classList.remove('appear')
    }

    if (rect.bottom > -550) {
        document.querySelector('.bottom-bar').classList.remove('appear')
    } else {
        document.querySelector('.bottom-bar').classList.add('appear')
    }
}
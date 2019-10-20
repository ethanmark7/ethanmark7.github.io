window.addEventListener('scroll', scrollListener)

function scrollListener() {
    const rect = document.querySelector('.page-title').getBoundingClientRect()
    if (rect.top < -8.75) {
        document.querySelector('.navigation-bar').classList.add('appear')   
    } else {
        document.querySelector('.navigation-bar').classList.remove('appear')
    }
}
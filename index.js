function mainTitleClick() {
    window.scrollTo({
        left: 0,
        top: 0,
        behavior: 'smooth'
    }) 
    //()=>document.querySelector('.transparent-cover').classList.add('open')    Short hand for function
    setTimeout(()=>document.querySelector('.transparent-cover').classList.add('open'), 150)
}

function removeTransparentCover() {
    document.querySelector('.transparent-cover').classList.remove('open')   
}
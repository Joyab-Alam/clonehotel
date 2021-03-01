window.addEventListener('scroll', function(){
    var scroll = document.querySelector('.scroll__top');
    scroll.classList.toggle("active", window.scrollY >500)
})
function scrollToTop(){
    window.scrollTo({
        top:0,
        behavior:'smooth'
    })
}
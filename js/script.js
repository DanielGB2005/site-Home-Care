const target = document.querySelectorAll('[data-animation]');
const animationClass = 'animate';

function animationScroll(){
    const windowTop = window.pageYOffset + ((window.innerHeight*3)/4);
    target.forEach(function(element){
    if((windowTop)> element.offsetTop){
        element.classList.add(animationClass);
    }

    })
}

window.addEventListener('scroll', function(){
    animationScroll();
})
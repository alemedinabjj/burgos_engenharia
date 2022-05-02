// Abre e fecha quando clicar no icone Hamburguer.!
const nav = document.querySelector('.header nav')
const toggle = document.querySelectorAll('nav .toggle')


for(const element of toggle) {
    element.addEventListener('click', function() {
        nav.classList.toggle('show')
    })
}

//  Quando clicar em um Item do menu,Esconder o menu!

const links = document.querySelectorAll('nav ul li a')

for(const link of links) {
    link.addEventListener('click', function() {
        nav.classList.remove('show')
    })
}

//adicionar sombra ao header da página quando dar scroll

const header = document.querySelector('.header')
const navHeight = header.offsetHeight;

window.addEventListener('scroll', function() {
    if(window.scrollY >= navHeight){
        // scroll é maior que a altura do header
        header.classList.add('scroll')
    }else {
        // se for menor que a altura do header
        header.classList.remove('scroll')
    }
})

//  testimonials slider --- ! 

const swiper = new Swiper('.swiper', {
    slidesPerview: 1,
    pagination: {
        el: '.swiper-pagination'
    },
    mousewheel: true,
    keyboard: true,
  });

//   scroll review: mostrar elementos quando der scroll

const scrollReveal = ScrollReveal({
    origin: 'top',
    distance: '30px',
    duration: 700,
    reset: true
})


scrollReveal.reveal(`
#home .text, #home .image,
#about .image, #about .text,
#services header, #services .card,
#testimonials header, #testimonials .testimonials,
#contact .text, #contact .links
`,


{interval: 100})
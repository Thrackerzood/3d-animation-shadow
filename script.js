let card = document.querySelector('.sub-section_content')
let subCart = document.querySelector('.sub-sub-section_content')

card.addEventListener('mousemove', e => {
   let xA = (window.innerWidth / 2 - e.pageX) / 20;
   let yA = (window.innerHeight / 2 - e.pageY) / 20;
   subCart.style.transform = `rotateY(${xA}deg) rotateX(${yA}deg)`;
   subCart.style.boxShadow = `rgba(24, 24, 112, 0.8) ${xA * 3}px ${yA * 3}px 20px`
})
card.addEventListener('mouseenter', event => {
   subCart.style.transition = 'all .3s ease'
})
card.addEventListener('mouseleave', event => {
   subCart.style.transition = 'all .3s ease'
   subCart.style.transform = `rotateY(0deg) rotateX(0deg)`
   subCart.style.transform = 'translateZ(0px)'
   subCart.style.boxShadow = `20px 20px 20px rgba(24, 24, 112, 0.8)`
})
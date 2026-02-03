const especialidades = document.querySelector('#especialidades')

especialidades.addEventListener('click', () =>{
    window.scrollTo({top: 590, left:0, behavior: 'smooth'})
})


const portifolio = document.querySelector('#portifolio')

portifolio.addEventListener('click', () =>{
    window.scrollTo({top: 1600, left:0, behavior: 'smooth'})
})




const especialidades_mobile = document.querySelector('#especialidades_mobile')

especialidades_mobile.addEventListener('click', () =>{
    window.scrollTo({top: 1400, left:0, behavior: 'smooth'})
})



const portifolio_mobile = document.querySelector('#portifolio_mobile')

portifolio_mobile.addEventListener('click', () =>{
    window.scrollTo({top: 3800, left:0, behavior: 'smooth'})
})






let btnMenu = document.getElementById('btn-menu')
let menu = document.getElementById('menu-mobile')
let overlay = document.getElementById('overlay')


btnMenu.addEventListener('click', ()=>{
    menu.classList.add('abrir-menu')
})


menu.addEventListener('click', ()=>{
    menu.classList.remove('abrir-menu')
})


overlay.addEventListener('click', ()=>{
    menu.classList.remove('abrir-menu')
})
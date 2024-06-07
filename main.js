import './css/style.css'
const d = document
const $ = s => d.querySelector(s)
const $$ = s => d.querySelectorAll(s)


let bt = $('.header__button')
let dv = $$('.d')
let nv = $('.header__nav')
let ul = $('.nav__ul')

bt.addEventListener('click', updateStates)

function updateStates() {
    
    dv.forEach(dd => {
        dd.classList.toggle("div")
    })
    
    nv.classList.toggle("header__nav--state-active")
    ul.classList.toggle("nav__ul--state-active")
}
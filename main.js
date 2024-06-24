const d = document
const $ = s => d.querySelector(s)
const $$ = s => d.querySelectorAll(s)

let bt = $('.header__button')
let theme = $('.header__theme')
let dv = $$('.header__button-line')
let nv = $('.header__nav')
let ul = $('.nav')
let html = $('html')

bt.addEventListener('click', updateStates)

function updateStates() { 
    dv.forEach(dd => {
        dd.classList.toggle("header__button-active")
    })
    nv.classList.toggle("header__nav__state-active")
    ul.classList.toggle("nav__ul__state-active")
}

const getColorScheme = () => {
  const localTheme = localStorage.getItem("theme");
  if (localTheme) {
    return localTheme;
  }else if (window.matchMedia && window.matchMedia('(prefers-color-scheme: dark)').matches){
    return "dark";
  }else {
    return "light";
  }
}

function setTheme(newThema) {
    // html.classList.toggle(newThema)
    html.setAttribute('data-tema',newThema)
}

theme.addEventListener('click', () => {
    const actualTheme = getColorScheme();
    const newTheme = actualTheme == "light" ? "dark" : "light";
    localStorage.setItem("theme", newTheme);
    setTheme(newTheme);
})

//cambio el theme si detecta un cambio de tema en el sistema
window.matchMedia('(prefers-color-scheme: dark)').addEventListener('change', () => setTheme(getColorScheme()));

//ejecuta el thema al inicio
setTheme(getColorScheme());
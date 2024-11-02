const ppersonalizada = document.getElementById('ppersonalizada')
const dcompletos = document.getElementById('dcompletos')

ppersonalizada.addEventListener('click',()=>{
    window.location.href = 'model.html'
})

dcompletos.addEventListener('click',()=>{
    window.location.href = 'example.html'
})

const red = document.getElementById('red')
const purple = document.getElementById('purple')
const green = document.getElementById('green')
const placa = document.getElementById('placa')

red.addEventListener('click',()=>{
    placa.style.border = '7px solid red'
})

purple.addEventListener('click',()=>{
    placa.style.border = '7px solid purple'
})

green.addEventListener('click',()=>{
    placa.style.border = '7px solid green'
})
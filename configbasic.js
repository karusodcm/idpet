const ftriangle = document.getElementById('ftriangle')
const ttriangle = document.getElementById('ttriangle')
const hubplan = document.getElementById('hubplan')

ftriangle.addEventListener("click", () => {
    hubplan.classList.add('active')
    ftriangle.style.display = "none"
    ttriangle.style.display = "flex"
})

ttriangle.addEventListener("click", () => {
    hubplan.classList.remove('active')
    ftriangle.style.display = "flex"
    ttriangle.style.display = "none"
})
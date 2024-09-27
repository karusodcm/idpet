const scroll = () => innerWidth - document.documentElement.clientWidth

document.documentElement.style.setProperty('--scroll-bar',scroll())

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

const returnstart = document.getElementById('returnstart')

returnstart.addEventListener("click", () => {
    window.location.href = "index.html"
})


const btnnext = document.getElementById('btnnext')
const btnbefore = document.getElementById('btnbefore')
const btncc = document.getElementById('btncc')
const steepone = document.getElementById('steepone')
const steeptwo = document.getElementById('steeptwo')
const boxsteepo = document.getElementById('boxsteepo')
const boxsteeps = document.getElementById('boxsteeps')
const icoclose = document.getElementById('icoclose')
const formbuysend = document.getElementById('formbuysend')
const btnaddam = document.getElementById('btnaddam')
const btnadda = document.getElementById('btnadda')
const btnaddi = document.getElementById('btnaddi')

const planes = document.getElementById('planes')

btnaddam.addEventListener("click", () => {
   formbuysend.style.display = "flex"
   planes.value = 'Amigo'
   planes.style.border = '1px solid #a200ff'
   planes.style.color = '#a200ff'
})

btnadda.addEventListener("click", () => {
    formbuysend.style.display = "flex"
    planes.value = 'Amoroso'
    planes.style.border = '1px solid #ff0080'
   planes.style.color = '#ff0080'
 })

 btnaddi.addEventListener("click", () => {
    formbuysend.style.display = "flex"
    planes.value = 'Incondicional'
    planes.style.border = '1px solid #c300ff'
   planes.style.color = '#c300ff'
 })

btnnext.addEventListener("click", unirTexto)

btnbefore.addEventListener("click", () => {
    steepone.style.display = "block"
    steeptwo.style.display = "none"
    boxsteeps.style.display = "none"
    boxsteepo.style.display = "block"
})


btncc.addEventListener("click", closeForm)
icoclose.addEventListener("click", closeForm)

function closeForm () {
formbuysend.style.display = "none"
}

const messageplan = document.getElementById('messageplan')


function unirTexto() {

    let mplaceplan = document.getElementById('mplaceplan')
    let madressplan = document.getElementById('madressplan')

    let fname = document.getElementById('fname').value;
    let fphone = document.getElementById('fphone').value;

    let fregion = document.getElementById('fregion').value;
    let fprovincia = document.getElementById('fprovincia').value;
    let fdistrito = document.getElementById('fdistrito').value;
    let fdireccion = document.getElementById('fdireccion').value;
    let freferencia = document.getElementById('freferencia').value;

    let fubicacion = document.getElementById('fubicacion').value;

    let cfname = document.getElementById('fname')
    let cfphone = document.getElementById('fphone')

    let cfregion = document.getElementById('fregion')
    let cfprovincia = document.getElementById('fprovincia')
    let cfdistrito = document.getElementById('fdistrito')
    let cfdireccion = document.getElementById('fdireccion')
    let cfreferencia = document.getElementById('freferencia')

    let cfubicacion = document.getElementById('fubicacion')

    let arrayPalabras = fregion + '/' + fprovincia + '/' + fdistrito
    let arrayAdress = fdireccion + '/' + freferencia

    if(fname === '' || fphone === '' ||  fregion === '' || fprovincia === '' || fdistrito === '' || fdireccion === '' || freferencia === '' || fubicacion === ''){
        cfname.style.border = '1px solid red';
        cfphone.style.border = '1px solid red';
        cfregion.style.border = '1px solid red';
        cfprovincia.style.border = '1px solid red';
        cfdistrito.style.border = '1px solid red';
        cfdireccion.style.border = '1px solid red';
        cfreferencia.style.border = '1px solid red';
        cfubicacion.style.border = '1px solid red';
        messageplan.style.display="flex";
        setTimeout(() => {messageplan.style.display="none"},2000)

    }else{
    mplaceplan.value = arrayPalabras.toUpperCase()
    madressplan.value = arrayAdress.toUpperCase()

    mplaceplan.style.display = "none"
    madressplan.style.display = "none"

    steepone.style.display = "none"
    steeptwo.style.display = "block"
    boxsteeps.style.display = "block"
    boxsteepo.style.display = "none"

    }

    

}

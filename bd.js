const scroll = () => innerWidth - document.documentElement.clientWidth

document.documentElement.style.setProperty('--scroll-bar', scroll())

//page index

const returnstart = document.getElementById('returnstart')

returnstart.addEventListener("click", () => {
    window.location.href = "index.html"
})

//options triangule

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

//open form

const boxform = document.getElementById('boxform')

const steepone = document.getElementById('steepone')
const steeptwo = document.getElementById('steeptwo')

const boxsteepo = document.getElementById('boxsteepo')
const boxsteeps = document.getElementById('boxsteeps')

//buttons

const btnaddam = document.getElementById('btnaddam')
const btnadda = document.getElementById('btnadda')
const btnaddi = document.getElementById('btnaddi')

const icoclose = document.getElementById('icoclose')
const btncc = document.getElementById('btncc')

const btnnext = document.getElementById('btnnext')
const btnbefore = document.getElementById('btnbefore')

const btnadd = document.getElementById('btnadd')

//conten-form input

const planes = document.getElementById('planes')

const pricefirst = document.getElementById('pricefirst').textContent
const pricesecond = document.getElementById('pricesecond').textContent
const pricethree = document.getElementById('pricethree').textContent

//open form for plans

const priceselect = document.getElementById('priceselect')

btnaddam.addEventListener("click", () => {
    boxform.style.display = "flex"
    planes.value = 'Amigo'
    planes.style.border = '1px solid #a200ff'
    planes.style.color = '#a200ff'
    priceselect.value = pricefirst
})

btnadda.addEventListener("click", () => {
    boxform.style.display = "flex"
    planes.value = 'Amoroso'
    planes.style.border = '1px solid #ff0080'
    planes.style.color = '#ff0080'
    priceselect.value = pricesecond
})

btnaddi.addEventListener("click", () => {
    boxform.style.display = "flex"
    planes.value = 'Incondicional'
    planes.style.border = '1px solid #c300ff'
    planes.style.color = '#c300ff'
    priceselect.value = pricethree
})

btnbefore.addEventListener("click", () => {
    steepone.style.display = "block"
    steeptwo.style.display = "none"
    boxsteeps.style.display = "none"
    boxsteepo.style.display = "block"
})

//close form

btncc.addEventListener("click", closeForm)
icoclose.addEventListener("click", closeForm)

function closeForm() {
    boxform.style.display = "none"
}

//invalid message

const messageplan = document.getElementById('messageplan')

//conten-form input
const fname = document.getElementById('fname')
const gender = document.getElementById('gender')
const fphone = document.getElementById('fphone')
const fregion = document.getElementById('fregion')
const fprovincia = document.getElementById('fprovincia')
const fdistrito = document.getElementById('fdistrito')
const fdireccion = document.getElementById('fdireccion')
const freferencia = document.getElementById('freferencia')
const fubicacion = document.getElementById('fubicacion')
const valueselect = document.getElementById('valueselect')

//conten-form second input

const csdni = document.getElementById('csdni')
const csname = document.getElementById('csname')
const cspname = document.getElementById('cspname')
const csmname = document.getElementById('csmname')
const csemail = document.getElementById('csemail')
const csphone = document.getElementById('csphone')
const mplaceplan = document.getElementById('mplaceplan')
const madressplan = document.getElementById('madressplan')


//conten-order form

const completebuy = document.getElementById('completebuy')

const orderid = document.getElementById('orderid')
const planid = document.getElementById('planid')
const nameid = document.getElementById('nameid')
const fullnameid = document.getElementById('fullnameid')
const phoneid = document.getElementById('phoneid')
const emailid = document.getElementById('emailid')
const addressid = document.getElementById('addressid')

const endbtnbuy = document.getElementById('endbtnbuy')
const printbtnbuy = document.getElementById('printbtnbuy')

endbtnbuy.addEventListener("click", closePrint)

function closePrint (){
    completebuy.style.display = "none"
}

//complete fields

btnnext.addEventListener("click", unirTexto)

// Función "añadir cero".
function addZero(x, n) {
    while (x.toString().length < n) {
      x = "0" + x;
    }
    return x;
  }
  
  // Añadir control al elemento "p" principal de la página.
  function addControl() {
    var d = new Date();
    var x = document.getElementById("demo");
    const pjorderid = document.getElementById('orderid')
    var h = addZero(d.getHours(), 2);
    var m = addZero(d.getMinutes(), 2);
    var s = addZero(d.getSeconds(), 2);
    var ms = addZero(d.getMilliseconds(), 3);
    x.value = h + m + s + ms;
    pjorderid.value = h + m + s + ms;
    pjorderid.disabled = true;
  }

function unirTexto() {
    const jplanes = document.getElementById('planes').value
    const jfname = document.getElementById('fname').value
    const jgender = document.getElementById('gender').value
    const jfphone = document.getElementById('fphone').value
    const jfregion = document.getElementById('fregion').value
    const jfprovincia = document.getElementById('fprovincia').value
    const jfdistrito = document.getElementById('fdistrito').value
    const jfdireccion = document.getElementById('fdireccion').value
    const jfreferencia = document.getElementById('freferencia').value
    const jfubicacion = document.getElementById('fubicacion').value

    let arrayPalabras = jfregion + '/' + jfprovincia + '/' + jfdistrito
    let arrayAdress = jfdireccion + '/' + jfreferencia

    if (jfname === '' || jfphone === '' || jfregion === '' || jfprovincia === '' || jfdistrito === '' || jfdireccion === '' || jfreferencia === '' || jfubicacion === '') {
        fname.style.border = '1px solid red';
        fphone.style.border = '1px solid red';
        fregion.style.border = '1px solid red';
        fprovincia.style.border = '1px solid red';
        fdistrito.style.border = '1px solid red';
        fdireccion.style.border = '1px solid red';
        freferencia.style.border = '1px solid red';
        fubicacion.style.border = '1px solid red';
        gender.style.border = '1px solid red';
        messageplan.style.display = "flex";
        setTimeout(() => {
            messageplan.style.display = "none";
            fname.style.border = '1px solid rgb(0, 255, 170)';
            fphone.style.border = '1px solid rgb(0, 255, 170)';
            fregion.style.border = '1px solid rgb(0, 255, 170)';
            fprovincia.style.border = '1px solid rgb(0, 255, 170)';
            fdistrito.style.border = '1px solid rgb(0, 255, 170)';
            fdireccion.style.border = '1px solid rgb(0, 255, 170)';
            freferencia.style.border = '1px solid rgb(0, 255, 170)';
            fubicacion.style.border = '1px solid rgb(0, 255, 170)';
            gender.style.border = '1px solid rgb(0, 255, 170)';
        }, 2000)

    } else {
        addControl();
        valueselect.value = jplanes

        mplaceplan.value = arrayPalabras.toUpperCase()
        madressplan.value = arrayAdress.toUpperCase()
        csphone.value = jfphone

        mplaceplan.style.display = "none"
        madressplan.style.display = "none"
        csphone.style.display = "none"

        steepone.style.display = "none"
        steeptwo.style.display = "block"
        boxsteeps.style.display = "block"
        boxsteepo.style.display = "none"
        
    }

}

//change address

const cdfo = document.getElementById('cdfo')

cdfo.addEventListener("change", () => {
    if (!cdfo.checked) {
        mplaceplan.style.display = "flex"
        madressplan.style.display = "flex"
        csphone.style.display = "flex"
    } else {
        mplaceplan.style.display = "none"
        madressplan.style.display = "none"
        csphone.style.display = "none"
    }

})





//send form for whatsapp

const frm = document.querySelector("#frm")

frm.addEventListener("submit", event => {
    event.preventDefault();
    const frm = event.target;
    const formData = {
        phone: frm.fphone.value,
        name: frm.csname.value,
        namefriend: frm.fname.value,
        plan: frm.valueselect.value,
        pricev: frm.priceselect.value,
        id: frm.demo.value

    };

    const URL = `https://api.whatsapp.com/send?phone=51${formData.phone}&text=Bienvenido%20${formData.name}%20%F0%9F%91%8B%F0%9F%8F%BC%2C%20a%20un%20paso%20de%20proteger%20tu%20mascota%20%F0%9F%90%B6%F0%9F%90%B1%F0%9F%90%B0${formData.namefriend}%2C%20finaliza%20el%20pago%20del%20plan%20elegido%20${formData.plan}%20%28${formData.pricev}%29%20y%20envia%20la%20fotito%20de%20tu%20mascota%20junto%20al%20pago%2C%20al%20correo%20idpet.soporte%40gmail.com%20o%20simplemente%20subelo%20por%20aqu%C3%AD%2C%20te%20esperamos%20con%20ansias%20de%20que%20formes%20parte%20de%20las%20familias%20que%20tienen%20a%20su%20mascotita%20protegida%20%E2%98%BA%EF%B8%8F%0A%0AOrden%3A${formData.id}%20%0A%0AOpciones%20de%20pago%3A%20%0A-%20YAPE%2FPLIN%20%3D%20982067675%20-%20KARLS%20CARRION%0A-%20TRANSFERENCIA%20BBVA%20%3D%20%200011-0814-0256551093%20%2F%20CCI%3A%2001181400025655109316`;

    window.open(URL, "_blank");
    closeForm();
    completebuy.style.display = "flex"

})
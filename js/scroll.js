let ubi = window.scrollY

window.onscroll = ()=>{
    let desplazar = window.scrollY;
    if(ubi >= desplazar){
        document.querySelector('.i-head').style.top = '0';
    }
    else{
        document.querySelector('.i-head').style.top = '-100px';
    }
    ubi = desplazar
}
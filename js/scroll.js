let ubi = window.scrollY

window.onscroll = ()=>{
    let desplazar = window.scrollY;
    if(ubi >= desplazar){
        document.querySelector('.i-header').style.top = '0px';
    }
    else{
        document.querySelector('.i-header').style.top = '-100px';
        document.querySelector('.i-message-fundation').style.display = 'none'
    }
    ubi = desplazar
}
let found = document.querySelectorAll(".found");
const errorpage = document.querySelector(".errorpage");
let closebtn = document.querySelector(".close-pre");

found.forEach(function (e) {
    e.addEventListener('click', function () {
        errorpage.style.display = 'block';
        setTimeout(()=> {errorpage.style.display = 'none'},2000);
    });
})







const bar = document.getElementById("bar")
const nav = document.getElementById("navbar")
const close = document.getElementById("close")

if(bar){
    bar.addEventListener("click",function(){
        nav.classList.add("active")
    })
}
if(close){
    close.addEventListener("click",function(){
        nav.classList.remove("active")
    })
}

// ---------------------s-product---------------

const mainImg = document.getElementById("MainImg");
const smallImg = document.getElementsByClassName("small-img");

for (let img of smallImg) {
    img.addEventListener("click", function() {
        mainImg.src = img.src;
    });
}

// loader---------------------------

const loader = document.querySelector(".loader")
window.addEventListener("load",function(){
    loader.style.display = "none"
})












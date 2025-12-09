const btncolor = document.querySelector("#btncolor");
const colorcarree = document.querySelector("#carree");
const Survol = document.querySelector("#Survol");
const deplacement = document.querySelector('#deplacement')

btncolor.addEventListener('click',() => {
     colorcarree.style.backgroundColor = "red"
});


Survol.addEventListener("mouseenter", () => {
    Survol.style.width = "50px";
});

Survol.addEventListener("mouseleave", () => {
    Survol.style.width = "100px";
});

deplacement.addEventListener("mouseleave", () => {
     deplacement.style.transform = "translateX(10000%)"
});


const darkbtn = document.querySelector("#darkbtn");
const allelement = document.querySelector("body")
darkbtn.addEventListener('click',() => {
    allelement.classList.toggle('switch')     
});


const spaceship = document.querySelector("#ship")

let topposition = 0;
let leftposition = 0;


window.addEventListener('keydown', (event) => { 
  if (event.key === "w") {
        topposition -= 10;
    }
    if (event.key === "s") {
        topposition += 10;
    }
    if (event.key ===  "a") {
        leftposition -= 10;
    }
    if (event.key === "d") {
        leftposition += 10;
    }
    spaceship.style.transform = `translate(${leftposition}px, ${topposition}px)`;
});

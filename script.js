const sketchpad = document.querySelector('.sketchpad');
const button = document.querySelector('button');
let dimension = 16;
getSketchProperty = window.getComputedStyle(sketchpad).getPropertyValue("width");
sketchpadWidth = parseInt( getSketchProperty, 10);

//create pixel dimension * dimension times
for (let i = 0; i < (dimension**2); i++) {
    const pixel = document.createElement('div'); 
    sketchpad.appendChild(pixel);
    pixel.style.width = `${(sketchpadWidth-2)/dimension}px`;
}

//when mouse hovers, change color of pixel
//event listener mouseover and mouseout for each div

const pixels = document.querySelectorAll(".sketchpad div")

pixels.forEach(pixel => {
    pixel.addEventListener("mouseover", function (e) {
        e.target.classList.add("colored")
    })
})




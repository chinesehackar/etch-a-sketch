const sketchpad = document.querySelector('.sketchpad');
let dimension = 16;

//create pixel dimension * dimension times
for (let i = 0; i < (dimension**2); i++) {
    const pixel = document.createElement('div');
    sketchpad.appendChild(pixel);
    getSketchProperty = window.getComputedStyle(sketchpad).getPropertyValue("width");
    sketchpadWidth = parseInt( getSketchProperty, 10);
    pixel.style.width = `${(sketchpadWidth-2)/dimension}px`;
}


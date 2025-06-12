const sketchpad = document.querySelector('.sketchpad');
const button = document.querySelector('button');
getSketchProperty = window.getComputedStyle(sketchpad).getPropertyValue("width");
sketchpadWidth = parseInt( getSketchProperty, 10);

//create pixel dimension * dimension times
function createPixel(dimension) {
    for (let i = 0; i < (dimension**2); i++) {
        const pixel = document.createElement('div'); 
        pixel.classList.add("pixel");
        sketchpad.appendChild(pixel);
        pixel.style.width = `${(sketchpadWidth-2)/dimension}px`;
    }
}

createPixel(16);

//when mouse hovers, change color of pixel
//event listener mouseover and mouseout for each div

const pixels = document.querySelectorAll(".sketchpad div")

document.addEventListener("mouseover", function (e) {
    if (e.target.matches(".pixel")) {
        e.target.classList.add("colored");
    }
})
//event listner on button click, get input from user
//if input <= 100, delete all divs and replace new ones with callback function
//else if input === 0 or above 100, alert user: please select valid input (1-100);

button.addEventListener("click", () => {
    const userPrompt = parseInt(prompt("Please select size of sketchpad (e.g. 16 = 16 x 16). Cannot be 0 or more than 100. Recommended: 32.", 16))
    if (userPrompt !== 0 && userPrompt <= 100) {
        sketchpad.innerHTML = "";
        createPixel(userPrompt);
    }  else {
        alert('Please select a valid input (1 - 100)')
    }
})
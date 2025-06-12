const sketchpad = document.querySelector('.sketchpad');
const button = document.querySelector('.size-setter');
getSketchProperty = window.getComputedStyle(sketchpad).getPropertyValue("width");
sketchpadWidth = parseInt( getSketchProperty, 10);

//create pixel dimension * dimension times
function createPixel(dimension) {
    for (let i = 0; i < (dimension**2); i++) {
        const pixel = document.createElement('div'); 
        pixel.classList.add("pixel");
        pixel.setAttribute("data-opacity", 0.1)
        sketchpad.appendChild(pixel);
        pixel.style.width = `${(sketchpadWidth-2)/dimension}px`;
    }
}

createPixel(16);

//when mouse hovers, change color of pixel
//event listener mouseover for each div

const pixels = document.querySelectorAll(".sketchpad div")

//create toggle that changes return of colorRandomizer function
const toggle = document.querySelector('.color-theme');
toggle.addEventListener('click', toggleColor);

let coloredTheme = "Theme: Colored";
let blackTheme = "Theme: Black and White";
let userPromptDimensions = 16;

function toggleColor(e) {
    if (e.target.textContent === coloredTheme) {
        e.target.textContent = blackTheme;
        sketchpad.innerHTML = "";
        createPixel(userPromptDimensions);
    } else if (e.target.textContent === blackTheme) {
        e.target.textContent = coloredTheme;
        sketchpad.innerHTML = "";
        createPixel(userPromptDimensions);
    }
    return e.target.textContent
}

document.addEventListener("mouseover", function (e) {

    //randomize rgb. rgb accepts from 0 to 255
    function colorRandomizer() {
        let rgbArgs = [];

        if (toggle.textContent === coloredTheme) {
            for (let i = 0; i < 3; i++) {
                let randomNumber = Math.floor(Math.random() * 257);
                rgbArgs.push(randomNumber);
            }
        } else if (toggle.textContent === blackTheme) {
            rgbArgs = [0, 0, 0];
        }
        return `${rgbArgs[0]}, ${rgbArgs[1]}, ${rgbArgs[2]}`
    }
    
    if (e.target.matches(".pixel")) {
        //every time e.target is a pixel, get data-opacity attribute
        //set opacity
        //update that e.target's data-opacity attribute
        let opacity = Number(e.target.dataset.opacity);
        const rgb = colorRandomizer();

        if (opacity < 1) {
            e.target.setAttribute('data-opacity', Math.round((Number(opacity) + 0.1) * 10) / 10);
            opacity = Math.round((opacity) * 10) / 10
        }

        e.target.style.backgroundColor = `rgba(${rgb}, ${opacity})`
        console.log(opacity);
    }
})
//event listner on button click, get input from user
//if input <= 100, delete all divs and replace new ones with callback function
//else if input === 0 or above 100, alert user: please select valid input (1-100);

button.addEventListener("click", getSketchpadDimensions)

function getSketchpadDimensions (e) {
    const userPrompt = parseInt(prompt("Please select size of sketchpad (e.g. 16 = 16 x 16). Cannot be 0 or more than 100. Recommended: 32.", 16))
    if (userPrompt !== 0 && userPrompt <= 100) {
        sketchpad.innerHTML = "";
        createPixel(userPrompt);
    }  else {
        alert('Please select a valid input (1 - 100)')
    }
    userPromptDimensions = userPrompt;
}
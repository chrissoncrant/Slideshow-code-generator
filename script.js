const imageCount = document.querySelector('#img-count');
const fadeTime = document.querySelector('#fade-time');
const holdTime = document.querySelector('#hold-time');
const codeButton = document.querySelector('#code-btn');
const codeContainer = document.querySelectorAll('.code-container')[2];
const codeDisplay = document.createElement('div');
const previewButton = document.querySelector('#preview-btn');
const errorDiv = document.querySelector("#error");



const keyframesRules = findKeyframesRule("slideshow");

function findKeyframesRule(rule) {
    let ss = document.styleSheets;
    let cssRules;
    for (let i = 0; i < ss.length; i++) {
        cssRules = Array.from(ss[i].cssRules);
        for (let j = 0; j < cssRules.length; j++) {
            if (cssRules[j].cssText.includes('@keyframes') && cssRules[j].name == rule) {
                return cssRules[j];
            }
        }
    }
    return null;
}

function createSlideString(imageCountValue, animationDelay) {
    let finalStr = '';
    for (let i = 1; i < imageCountValue + 1; i++) {
        if (i === 1) {
            finalStr += `
.slide-1 {
    animation-delay: 0s;
}
`;
        } else {
            finalStr += `
.slide-${i} {
    animation-delay: ${(animationDelay*i) - animationDelay}s;
}
` 
        }
    };
    return finalStr;
};

document.querySelector('.white-space.css-code').textContent = `CSS:

    .frame {
        position: relative;
        border: 20px solid white;
        background-color: white;
        border-radius: 12px;
        width: 600px;
        height: 340px;
        
    }

    .slides {
        position: absolute;
        opacity: 0;
        border-radius: 5px;
        height: 300px;
        width: 100%;
    }`;

document.querySelector('.white-space.html-code').textContent = `HTML:

    <div class="frame">
        <img class="slides slide-1 slideshow" 
        src="#"  alt="...">
        <img class="slides slide-2 slideshow" 
        src="#" alt="...">
    </div>`;

previewButton.addEventListener('click', () => {
    if (fadeTime.value === '' || fadeTime.value <= 0) {
        fadeTime.style.border = "red solid 1px";
        fadeTime.style.boxShadow = "0px 0px 8px red";
        errorDiv.style.opacity = "1";
        return;
    } else {
        fadeTime.style.border = "1px solid hsl(var(--shadow-color) / 0.34)";
        fadeTime.style.boxShadow = "0px 0px 0px red";
    }

    if (holdTime.value === '' || holdTime.value <= 0) {
        holdTime.style.border = "red solid 1px";
        holdTime.style.boxShadow = "0px 0px 8px red";
        errorDiv.style.display = "block";
        return;
    } else {
        holdTime.style.border = "1px solid hsl(var(--shadow-color) / 0.34)";
        holdTime.style.boxShadow = "0px 0px 0px red";
    }

    errorDiv.style.opacity = "0";

    
    let fadeTimeValue = Number(fadeTime.value);
    let holdTimeValue = Number(holdTime.value);
    let animationDuration = 4 * (fadeTimeValue + holdTimeValue);
    let animationDelay = fadeTimeValue + holdTimeValue;
    let k2 = 25;
    let k1 = (fadeTimeValue/animationDelay)* k2;
    k1 = Number(k1.toFixed(2));
    let k3 = (k1 + k2).toFixed(2);

    let delayCalc = 0;
    function calcDelay() {
        return `${delayCalc + animationDelay - animationDelay}`
    };

    let slides = document.querySelectorAll('.slides');
    for (let i = 0; i < slides.length; i++) {
        slides[i].style.animationDuration = `${animationDuration}s`;
        slides[i].style.animationDelay = `${calcDelay()}s`;
        delayCalc += animationDelay;
    }

    document.querySelector('.current-settings').style.color = "#e0fffa";

    // console.log(keyframesRules);
    keyframesRules.deleteRule(`${keyframesRules[0].keyText}`);
    keyframesRules.deleteRule(`${keyframesRules[0].keyText}`);
    keyframesRules.deleteRule(`${keyframesRules[0].keyText}`);
    keyframesRules.appendRule(`${k1}% {opacity: 1;}`);
    keyframesRules.appendRule(`${k2}% {opacity: 1;}`);
    keyframesRules.appendRule(`${k3}% {opacity: 0;}`);
    // console.log(keyframesRules);
})


codeButton.addEventListener('click', () => {
    if (fadeTime.value === '' || holdTime.value === '') {
        errorDiv.textContent = "Please enter Fade and Hold values.";
        errorDiv.style.opacity = "1";
        fadeTime.style.border = "red solid 1px";
        fadeTime.style.boxShadow = "0px 0px 8px red";
        holdTime.style.border = "red solid 1px";
        holdTime.style.boxShadow = "0px 0px 8px red";
        return;
    } else {
        errorDiv.textContent = "Only numbers above zero will work.";
        fadeTime.style.border = "1px solid hsl(var(--shadow-color) / 0.34)";
        fadeTime.style.boxShadow = "0px 0px 0px red";
        holdTime.style.border = "1px solid hsl(var(--shadow-color) / 0.34)";
        holdTime.style.boxShadow = "0px 0px 0px red";

    }
    
    if (imageCount.value === ''  || imageCount.value <= 0) {
        imageCount.style.border = "red solid 1px";
        imageCount.style.boxShadow = "0px 0px 8px red";
        errorDiv.style.opacity = "1";
        return;
    } else {
        imageCount.style.border = "1px solid hsl(var(--shadow-color) / 0.34)";
        imageCount.style.boxShadow = "0px 0px 0px red";
    }

    errorDiv.style.opacity = "0";
    
    let imageCountValue = Number(imageCount.value);
    let fadeTimeValue = Number(fadeTime.value);
    let holdTimeValue = Number(holdTime.value);

    let animationDuration = imageCountValue * (fadeTimeValue + holdTimeValue);
    let animationDelay = fadeTimeValue + holdTimeValue;
    let k2 = Number((100/imageCountValue).toFixed(2));
    console.log("k2: ", k2);
    let k1 = (fadeTimeValue/animationDelay)* k2;
    k1 = Number(k1.toFixed(2));
    console.log("k1: ", k1);

    let k3 = Number((k1 + k2).toFixed(2));

   
    let firstHalf = `
.slideshow { 
    animation: slideshow ${animationDuration}s infinite linear;
}

@keyframes slideshow {
    ${k1}% {
        opacity: 1;
    }
    ${k2}% {
        opacity: 1;
    }
    ${k3}% {
        opacity: 0;
    }
}
    `;

    let secondHalf = `${createSlideString(imageCountValue, animationDelay)}`;

    codeDisplay.classList.add('white-space');
    codeContainer.textContent = "Here's your code!";
    codeDisplay.textContent = firstHalf + secondHalf;
    codeContainer.appendChild(codeDisplay);
})


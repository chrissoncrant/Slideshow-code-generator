const imageCount = document.querySelector('#img-count');
const fadeTime = document.querySelector('#fade-time');
const holdTime = document.querySelector('#hold-time');
const resultsDisplay = document.createElement('div');

const previewButton = document.querySelector('#preview-btn');
const codeButton = document.querySelector('#code-btn');
const keyframesRules = document.styleSheets[0].cssRules[12];

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
}

previewButton.addEventListener('click', () => {
    let fadeTimeValue = Number(fadeTime.value);
    let holdTimeValue = Number(holdTime.value);
    let animationDuration = 4 * (fadeTimeValue + holdTimeValue);
    let animationDelay = fadeTimeValue + holdTimeValue;
    console.log(animationDelay);
    let k2 = 25;
    let k1 = (fadeTimeValue/animationDelay)* k2;
    k1 = Number(k1.toFixed(2));
    let k3 = k1 + k2;

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

    keyframesRules.deleteRule('20%');
    keyframesRules.deleteRule('25%');
    keyframesRules.deleteRule('45%');
    keyframesRules.appendRule(`${k1}% {opacity: 1;}`);
    keyframesRules.appendRule(`${k2}% {opacity: 1;}`);
    keyframesRules.appendRule(`${k3}% {opacity: 0;}`);
    console.log(keyframesRules);
})


codeButton.addEventListener('click', () => {
    let imageCountValue = Number(imageCount.value);
    let fadeTimeValue = Number(fadeTime.value);
    let holdTimeValue = Number(holdTime.value);

    let animationDuration = imageCountValue * (fadeTimeValue + holdTimeValue);
    let animationDelay = fadeTimeValue + holdTimeValue;
    let k2 = Number((100/imageCountValue).toFixed(2));
    let k1 = (fadeTimeValue/animationDelay)* k2;
    k1 = Number(k1.toFixed(2));
    let k3 = k1 + k2;

   
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

    let secondHalf = `${createSlideString(imageCountValue, animationDelay)}
    `
    resultsDisplay.setAttribute('style', 'white-space: pre;');
    resultsDisplay.classList.add('results-display');
    let span = document.createElement('span');
    document.querySelector('.results-container').textContent = "Here's your code!"
    resultsDisplay.textContent = firstHalf + secondHalf;
    document.querySelector(".results-container").appendChild(resultsDisplay);
})

//keyframe rule:
console.log(document.styleSheets[0].cssRules);

console.log(document.styleSheets[0].cssRules[12][0]);

console.log(document.styleSheets[0].cssRules[12]);

console.log(keyframesRules)

// keyframesRules.deleteRule('20%');

// keyframesRules.appendRule(`50% {opacity: 3}`)

// console.log(keyframesRules)

function findKeyframesRule(rule) {
    let ss = document.styleSheets;
    for (let i = 0; i < ss.length; i++) {
        for (let j = 0; j < ss[i].cssRules.length; j++) {
            if (ss[i].cssRules[j].name === 0) {}
        }
        
        
    }
}
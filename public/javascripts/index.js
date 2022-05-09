"use strict";
var _a;
const mainTitle = document.getElementById("main-title");
const paragraph = document.getElementById("paragraph");
const originalTitle = mainTitle.textContent;
let switcher = false;
const originalText = (_a = paragraph.textContent) === null || _a === void 0 ? void 0 : _a.split(" ");
let wordCount = originalText.length;
const myCar = "🚙";
setInterval(() => {
    if (wordCount === 0)
        wordCount = originalText.length;
    let newText = [...originalText];
    newText[wordCount - 1] = myCar;
    paragraph.textContent = newText.join(" ");
    wordCount--;
}, 1250);
setInterval(() => {
    if ((switcher = !switcher)) {
        mainTitle.textContent = "TS is love!";
    }
    else {
        mainTitle.textContent = originalTitle;
    }
}, 2000);

// Example code featuring TS; delete for your project.

const mainTitle = document.getElementById("main-title") as HTMLHeadingElement;
const paragraph = document.getElementById("paragraph") as HTMLParagraphElement;
const originalTitle: string = mainTitle.textContent!; // The exclamation mark is the non-null assertion operator in TypeScript. It removes null and undefined from a type without doing any explicit type checking.
let switcher: boolean = false;
const originalText: string[] = paragraph.textContent?.split(" ")!;
let wordCount: number = originalText.length;

type Car = "🚗" | "🚘" | "🚙" | "🚕" | "🚖"; // Union type : https://www.typescriptlang.org/docs/handbook/unions-and-intersections.html
const myCar: Car = "🚙";
// const notCar: Car = "🚍"; // This is not a Car

setInterval(() => {
    if (wordCount === 0) wordCount = originalText.length;
    let newText = [...originalText];
    newText[wordCount - 1] = myCar;
    paragraph.textContent = newText.join(" ");
    wordCount--;
}, 1250);

setInterval(() => {
    if ((switcher = !switcher)) {
        mainTitle.textContent = "TS is love!";
    } else {
        mainTitle.textContent = originalTitle;
    }
}, 2000);

let tokenData = genTokenData(123);
console.log('TOKEN: ', tokenData);
// tokenData = {hash: '0x8b6f0c97934935e7bb149c274f0f9032b0352517e8d1db5b456e0454e942849b', tokenId: '123000531'};
// tokenData = {hash: '0x1c81219381920aa8e4868337e1e3ac9964fed0dfab57250c8ee55be2313d88c3', tokenId: '123000455'}
document.body.style.cursor = "default";

let sizeVibe;
let projectNumber = Math.floor(parseInt(tokenData.tokenId) / 1000000);
let mintNumber = parseInt(tokenData.tokenId) % 1000000;
let hash = tokenData.hash;

let R = new Random();
const descSizeOptions = [22, 33, 44, 55, 77, 88, 111];

const ratio = 8.5 / 11 // 9/16, 16/9, etc etc.
const w = 1000;
const h = w / ratio
// const WIDTH = window.innerWidth > window.innerHeight * ratio ? window.innerHeight * ratio : window.innerWidth;
// const HEIGHT = window.innerWidth > window.innerHeight * ratio ? window.innerHeight : window.innerWidth / ratio;

document.body.style.width = "100vw";
document.body.style.height = "100vh";
const WIDTH = document.body.clientWidth > document.body.clientHeight * ratio ? document.body.clientHeight * ratio : document.body.clientWidth;
const HEIGHT = document.body.clientWidth > document.body.clientHeight * ratio ? document.body.clientHeight : document.body.clientWidth / ratio;
const M = Math.min(WIDTH, HEIGHT) / Math.min(w, h);
const PADDING = 100 * M;
let yPos = PADDING;

let numNotes = 0;
let theme = R.random_choice(themes);
document.body.style.backgroundColor = "#FFFFFF";
theme.push("#F6FFFF");
theme.push("#FFDAEF");

let structures = reviewStructures.concat(descriptionStructures);
const fonts = ["cursive", "serif", "sans-serif"]
const fontStyles = ["italic", "none", "none", "none"];
const fontWeights = ["bold", "none", "none", "none", "none"];
let main;
let textAdded = false;
function chanceOf(chance) {
    return R.random_bool(chance);
}

function scent() {

    main = document.createElement("main");
    page = document.createElement("article");
    main.style.cursor = "context-menu";
    document.body.appendChild(main);
    main.style.background = R.random_choice(theme);
    console.log("welcome to your new signature scent <3")

    chooseBackground();

    main.style.overflow = "hidden";
    main.style.width = WIDTH + "px";
    main.style.height = HEIGHT + "px";
    sizeVibe = M;
    // main.style.position = "relative";
    main.style.position = "absolute";
    main.style.top = "50%";
    main.style.left = "50%";
    main.style.transform = "translate(-50%, -50%)";
    main.style.margin = "auto";

    const maxLastAttempts = 10;
    let lastAttempts = 0;
    while (yPos < HEIGHT - PADDING && (lastAttempts < maxLastAttempts)) { //  
        addText();
        if (!textAdded) {
            lastAttempts++;
        } else {
            numNotes++;
        }
    }
}

function chooseBackground() {
    const color1 = R.random_choice(theme);
    theme.splice(theme.indexOf(color1), 1);



    const color2 = R.random_choice(theme);
    theme.splice(theme.indexOf(color2), 1);

    if (chanceOf(0.44)) {
        // Two color gradient, bottom to top
        main.style.background = "linear-gradient(to top, " + color1 + " 0%, " + color2 + " 100%)";
    } else if (chanceOf(0.26)) {
        // Two color radial gradient ellipse
        main.style.background = "radial-gradient(" + color1 + " 0%, " + color2 + " 100%)";
    } else if (chanceOf(0.26)) {
        // Two color radial gradient circle
        const color3 = R.random_choice(theme);
        theme.splice(theme.indexOf(color3), 1);
        main.style.background = "radial-gradient(circle, " + color1 + " 0%, " + color2 + " 50%, " + color3 + " 100%)";
    } else {
        // Three color radial gradient ellipse
        const color3 = R.random_choice(theme);
        theme.splice(theme.indexOf(color3), 1);
        main.style.background = "radial-gradient(" + color1 + " 0%, " + color2 + " 50%, " + color3 + " 100%)";
    }
}

function addText() {
    textAdded = false;
    // addNote();
    if (chanceOf(0.77)) {
        addNote();
    } else {
        addDescription();
    }
}

function findLongestLine(lines) {
    let longestLine = lines[0];
    for (let l = 0; l < lines.length; l++) {
        if (longestLine.length < lines[l].length) {
            longestLine = lines[l];
        }
    }

    return longestLine;

}
function addDescription() {
    let newFontSize = R.random_choice(descSizeOptions);

    let newDescriptionText = generateDescription();
    let lines = phraseSplitter(newDescriptionText);
    console.log(lines)
    const numLines = lines.length;
    const descFont = R.random_choice(fonts);
    const descStyle = R.random_choice(fontStyles);
    const descWeight = R.random_choice(fontWeights);
    const descColor = R.random_choice(theme);

    let testLine = document.createElement("span");
    main.appendChild(testLine);
    testLine.innerText = findLongestLine(lines);
    testLine.style.fontFamily = descFont;
    testLine.style.fontStyle = descStyle;
    testLine.style.fontWeight = descWeight;
    testLine.style.whiteSpace = 'nowrap';
    testLine.style.lineHeight = (newFontSize * sizeVibe * 1.2) + "px";
    testLine.style.fontSize = (newFontSize * sizeVibe) + "px";
    let testBoundingBox = testLine.getBoundingClientRect();
    let testHeight = testBoundingBox.height;
    testLine.remove();

    console.log("************");
    console.log("note: ", newDescriptionText);
    console.log("yPos + (numLines * testHeight) < (HEIGHT - PADDING)", yPos + (numLines * testHeight * 1.25) < (HEIGHT - PADDING));
    console.log("testBoundingBox.width <= (WIDTH - PADDING * 2) ", testBoundingBox.width <= (WIDTH - PADDING * 2));

    if (yPos + (numLines * (newFontSize * sizeVibe * 1.2)) < (HEIGHT - PADDING) && testBoundingBox.width <= (WIDTH - PADDING * 2)) { // (yPos + (numLines * (newFontSize * 1.4))) < (100 - PADDING)

        textAdded = true;

        let descShadow = "0 0 " + (newFontSize / 11) + "px" + descColor + ", 0 0 " + (newFontSize / 22) + "px" + descColor;

        for (let l = 0; l < lines.length; l++) {
            let currentLine = lines[l];
            let newLine = document.createElement("span");
            main.appendChild(newLine);
            // newLine.addEventListener("mouseover", () => {
            //     newLine.style.textShadow = "0 0 " + (newFontSize / 3) + "px white, 0 0 " + (newFontSize * 2) + "px white";
            // });

            newLine.innerText = currentLine;
            newLine.style.position = "absolute";
            newLine.style.top = yPos + "px";
            // newLine.style.fontSize = (newFontSize / 100 * sizeVibe) + "px";
            newLine.style.fontSize = (newFontSize * sizeVibe) + "px";
            newLine.style.lineHeight = (newFontSize * sizeVibe * 1.2) + "px";
            newLine.style.maxWidth = WIDTH - PADDING * 2;
            newLine.style.color = descColor;

            // Font
            newLine.style.fontFamily = descFont;
            newLine.style.fontStyle = descStyle;
            newLine.style.fontWeight = descWeight;
            newLine.style.textShadow = descShadow;


            let lineBoundingBox = newLine.getBoundingClientRect();
            let lineWidthPX = lineBoundingBox.width;
            let lineHeightPX = lineBoundingBox.height;
            let leftMax = WIDTH - lineWidthPX - PADDING;
            if (leftMax < PADDING) {
                newLine.style.left = PADDING + "px";
            } else {
                newLine.style.left = R.random_num(PADDING, leftMax) + "px";
            }

            lineBoundingBox = newLine.getBoundingClientRect();
            lineWidthPX = lineBoundingBox.width;
            lineHeightPX = lineBoundingBox.height;


            if (l == lines.length - 1) {
                // Last one
                yPos += ((newFontSize * sizeVibe * 1.47));
            } else {
                yPos += ((newFontSize * sizeVibe * 1.2));
            }
        }
    } else {
        textAdded = false;
    }
}

function addNote() {
    // Create Notes
    let newNote = document.createElement("span");

    // Set Text
    let newNoteText, newFontSize;
    const noteSizeOptions = [22, 44, 55, 66, 77, 88, 99, 126, 111, 222, 247];

    if (chanceOf(0.7)) {
        newNoteText = R.random_choice(notes);
        notes.splice(notes.indexOf(newNoteText), 1);
        newFontSize = R.random_choice(noteSizeOptions);
    } else {
        newNoteText = generateDescription();
        newFontSize = R.random_choice(descSizeOptions);
    }

    newNote.innerText = newNoteText;

    // Font Size
    newNote.style.fontSize = (newFontSize * sizeVibe) + "px";
    newNote.style.lineHeight = (newFontSize * sizeVibe * 1.2) + "px";

    // Font
    newNote.style.fontFamily = R.random_choice(fonts);

    // Style    
    newNote.style.fontStyle = R.random_choice(fontStyles);
    newNote.style.fontStyle = newNote.style.fontStyle;

    // Weight
    newNote.style.fontWeight = R.random_choice(fontWeights);
    newNote.style.visibility = "hidden";
    main.appendChild(newNote);

    const noteColor = R.random_choice(theme);
    newNote.style.color = noteColor;

    newNote.style.position = "absolute";
    newNote.style.top = yPos + "px";
    newNote.style.maxWidth = WIDTH - PADDING * 2;

    let noteBoundingBox = newNote.getBoundingClientRect();
    let noteWidthPx = noteBoundingBox.width;
    let noteHeightPx = noteBoundingBox.height;
    newNote.style.position = "absolute";
    newNote.style.textShadow = "0 0 " + (newFontSize / 11) + "px" + noteColor + ", 0 0 " + (newFontSize / 22) + "px" + noteColor;

    let leftMax = WIDTH - noteWidthPx - (PADDING);
    if (leftMax < PADDING) {
        newNote.style.left = PADDING + "px";
    } else {
        newNote.style.left = R.random_num(PADDING, leftMax) + "px";
    }

    console.log("************");
    console.log("note: ", newNoteText);
    console.log("noteWidthPx > (WIDTH - PADDING * 2) ", noteWidthPx > (WIDTH - PADDING * 2));
    console.log("yPos + noteHeightPx > (HEIGHT - PADDING) ", yPos + noteHeightPx > (HEIGHT - PADDING));
    if (noteWidthPx > (WIDTH - PADDING * 2) || yPos + (noteHeightPx) >= (HEIGHT - PADDING)) { // yPos + noteHeightP > 100 - PADDING || newFontSize < 2 // 
        newNote.remove();
    } else {
        textAdded = true;
        newNote.style.visibility = "visible";
        yPos += (noteHeightPx * R.random_num(1, 2)); // 

        // newNote.addEventListener("mouseover", () => {
        //     newNote.style.textShadow = "0 0 " + (newFontSize / 11) + "px white, 0 0 " + (newFontSize / 2) + "px white";
        // });

        main.appendChild(newNote);
    }
}

scent();
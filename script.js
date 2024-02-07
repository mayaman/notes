let tokenData = genTokenData(123);
console.log('TOKEN: ', tokenData);
// tokenData = {hash: '0xb218cb43bb03fb33ab26f6a5a094aeaead457f16ab45acd32b8a7f1949170832', tokenId: '123000166'};
document.title = "𝒩𝑜𝓉𝑒𝓈";
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
const WIDTH = window.innerWidth > window.innerHeight * ratio ? window.innerHeight * ratio : window.innerWidth
const HEIGHT = window.innerWidth > window.innerHeight * ratio ? window.innerHeight : window.innerWidth / ratio
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
const fontStyles = ["italic", "none", "none"];
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

    main.style.position = "relative";
    main.style.margin = "auto";

    const maxLastAttempts = 10;
    let lastAttempts = 0;
    while (yPos < HEIGHT - PADDING && (lastAttempts < maxLastAttempts)) {
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

    // else if (chanceOf(0.26)) {
    //     // Diagonal gradient
    //     main.style.background = "linear-gradient(to bottom left, " + color1 + " 0%, " + color1 + " 1%, " + color2 + " 100%)";
    // } else {
    //     // Stacked gradient
    //     const color3 = R.random_choice(theme);
    //     theme.splice(theme.indexOf(color3), 1);
    //     main.style.background = "linear-gradient(217deg," + (color1 + "CC") + "," + (color1 + "00") + " 70.71%), linear-gradient(127deg, " + (color2 + "CC") + ", " + (color2 + "00") + " 70.71%),linear-gradient(336deg, " + (color3 + "CC") + ", " + (color3 + "00") + " 70.71%)";
    // }
}

function addText() {
    textAdded = false;
    if (chanceOf(0.77)) {
        addNote();
    } else {
        addDescription();
    }
}

scent();

function addDescription() {
    let newFontSize = R.random_choice(descSizeOptions);

    let newDescriptionText = generateDescription();
    let lines = phraseSplitter(newDescriptionText);
    const numLines = lines.length;
    const descFont = R.random_choice(fonts);
    const descStyle = R.random_choice(fontStyles);
    const descWeight = R.random_choice(fontWeights);
    const descColor = R.random_choice(theme);

    let testLine = document.createElement("span");
    main.appendChild(testLine);
    testLine.innerText = 'groundbreaking';
    testLine.style.fontFamily = descFont;
    testLine.style.fontStyle = descStyle;
    testLine.style.fontWeight = descWeight;
    testLine.style.whiteSpace = 'nowrap';
    testLine.style.fontSize = (newFontSize * sizeVibe) + "px";
    let testBoundingBox = testLine.getBoundingClientRect();
    let testHeight = testBoundingBox.height;
    testLine.remove();

    // console.log('*********************: ');
    // console.log('newDescriptionText: ', newDescriptionText);
    // console.log(lines);
    // console.log(testBoundingBox)
    // console.log('testHeight: ', testHeight);
    // console.log('testHeight/HEIGHT: ', testHeight/HEIGHT);
    // console.log('numLines: ', numLines);
    // console.log('+++');

    // console.log('yPos: ', yPos);
    // console.log('(numLines*testHeight): ', (numLines*testHeight));
    // console.log('HEIGHT - PADDING: ', HEIGHT - PADDING);

    if (yPos + (numLines * testHeight * 1.25) < (HEIGHT - PADDING) && testBoundingBox.width < (WIDTH - PADDING * 2)) { // (yPos + (numLines * (newFontSize * 1.4))) < (100 - PADDING)

        textAdded = true;

        let descShadow = "0 0 " + (newFontSize / 8) + "px" + descColor + ", 0 0 " + (newFontSize) + "px" + descColor;

        for (let l = 0; l < lines.length; l++) {
            let currentLine = lines[l];
            let newLine = document.createElement("span");
            main.appendChild(newLine);
            newLine.addEventListener("mouseover", () => {
                newLine.style.textShadow = "0 0 " + (newFontSize / 3) + "px white, 0 0 " + (newFontSize * 2) + "px white";
            });

            newLine.innerText = currentLine;
            newLine.style.position = "absolute";
            newLine.style.top = yPos + "px";
            // newLine.style.fontSize = (newFontSize / 100 * sizeVibe) + "px";
            newLine.style.fontSize = (newFontSize * sizeVibe) + "px";

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
            yPos += (lineHeightPX * 1.25);
        }
    } else {
        textAdded = false;
    }
}

function addNote() {
    // Create Notes
    let newNote = document.createElement("span");
    // let testNote = document.createElement("span");

    // Set Text
    let newNoteText, newFontSize;
    // const noteSizeOptions = [4, 5, 6, 7, 11, 15, 22, 44];
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
    // newNote.style.whiteSpace = 'nowrap';
    // testNote.innerText = newNoteText;

    // Font Size
    console.log('newFontSize: ', newFontSize);
    console.log('newNote.style.fontSize: ', (newFontSize / 100 * sizeVibe));

    // newNote.style.fontSize = (newFontSize / 100 * sizeVibe) + "px";
    newNote.style.fontSize = (newFontSize * sizeVibe) + "px";
    // testNote.style.fontSize = (newFontSize / 100 * sizeVibe) + "px";

    // Max Width
    let paddingInPx = (PADDING / 100) * WIDTH;

    // Font
    newNote.style.fontFamily = R.random_choice(fonts);
    // testNote.style.fontFamily = newNote.style.fontFamily;

    // Style    
    newNote.style.fontStyle = R.random_choice(fontStyles);
    newNote.style.fontStyle = newNote.style.fontStyle;

    // Weight
    newNote.style.fontWeight = R.random_choice(fontWeights);
    // testNote.style.fontWeight = newNote.style.fontWeight;

    // Hide Test Note
    // testNote.style.visibility = "hidden";
    // main.appendChild(testNote);

    newNote.style.visibility = "hidden";
    main.appendChild(newNote);

    const noteColor = R.random_choice(theme);
    newNote.style.color = noteColor;

    newNote.style.position = "absolute";
    newNote.style.top = yPos + "px";

    newNote.style.maxWidth = WIDTH - paddingInPx * 2;

    let noteBoundingBox = newNote.getBoundingClientRect();
    let noteWidthPx = noteBoundingBox.width;
    let noteHeightPx = noteBoundingBox.height;
    let noteWidthP = (noteWidthPx / WIDTH) * 100;
    let noteHeightP = (noteHeightPx / HEIGHT) * 100;
    newNote.style.position = "absolute";

    // while (newFontSize > 24 && (((noteWidthPx > (WIDTH - PADDING * 2)) || yPos + noteHeightPx < HEIGHT ()))) {
    //     newFontSize--;
    //     // newNote.style.fontSize = (newFontSize / 100 * sizeVibe) + "px";
    //     newNote.style.fontSize = (newFontSize * sizeVibe) + "px";

    //     // testNote.style.fontSize = (newFontSize / 100 * sizeVibe) + "px";
    //     noteBoundingBox = newNote.getBoundingClientRect();
    //     noteWidthPx = noteBoundingBox.width;
    //     noteWidthP = (noteWidthPx / WIDTH) * 100;
    //     noteHeightPx = noteBoundingBox.height;
    //     noteHeightP = ((noteHeightPx) / HEIGHT) * 100;
    // }

    newNote.style.textShadow = "0 0 " + (newFontSize / 11) + "px" + noteColor + ", 0 0 " + (newFontSize / 22) + "px" + noteColor;

    let leftMax = WIDTH - noteWidthPx - (PADDING);
    if (leftMax < PADDING) {
        newNote.style.left = PADDING + "px";
    } else {
        newNote.style.left = R.random_num(PADDING, leftMax) + "px";
    }

    // newNote.style.left = PADDING + "px";
    console.log('')
    console.log(newNote);
    if (noteWidthPx > (WIDTH - PADDING * 2) || yPos + noteHeightPx > (HEIGHT - PADDING)) { // yPos + noteHeightP > 100 - PADDING || newFontSize < 2
        newNote.remove();
        // console.log('not adding text');
    } else {
        textAdded = true;
        newNote.style.visibility = "visible";
        // if (chanceOf(0.8) || yPos > (HEIGHT - PADDING) || numNotes < 2) { // 
        //     yPos += (noteHeightPx);
        // } else {
        //     yPos += (noteHeightPx * R.random_num(1, 2));
        //     // console.log('adding extra yPos');
        // }

        yPos += (noteHeightPx * R.random_num(1, 2));

        newNote.addEventListener("mouseover", () => {
            // newNote.style.textShadow = "0 0 " + (newFontSize / 3) + "px white, 0 0 " + (newFontSize * 2) + "px white";
            newNote.style.textShadow = "0 0 " + (newFontSize / 11) + "px white, 0 0 " + (newFontSize / 2) + "px white";
        });

        main.appendChild(newNote);
    }
}
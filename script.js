let tokenData = genTokenData(123);
// console.log('TOKEN: ', tokenData);
tokenData = {
    hash:
    "0xc736a5cff18d8a0f94aea2c0a368fa37d5557ac3e2d9989ad647b14a7fa67244", tokenId: "123000885"
};

document.title = "𝒩𝑜𝓉𝑒𝓈";
document.body.style.cursor = "default";


let projectNumber = Math.floor(parseInt(tokenData.tokenId) / 1000000);
let mintNumber = parseInt(tokenData.tokenId) % 1000000;
let hash = tokenData.hash;
const PADDING = 13;
let WIDTH, HEIGHT;
let yPos = PADDING;
let R = new Random();
const descSizeOptions = [3, 4, 5, 6, 7, 8];

let numNotes = 0;
let theme = R.random_choice(themes);
// console.log(theme);
// theme = themes[0];
document.body.style.backgroundColor = R.random_choice(theme);

theme.push("#F6FFFF");
theme.push("#FFDAEF");
// console.log('Number of Notes: ', notes.length);


// Library
let structures = reviewStructures.concat(descriptionStructures);
console.log("NUMBER OF STRUCTURES: ", structures.length);
let fonts = ["cursive", "serif", "sans-serif"]
let fontStyles = ["italic", "none", "none"];
let fontWeights = ["bold", "none", "none", "none", "none"];
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




    chooseBackground();
    main.style.overflow = "hidden";

    // main.style.width = 85 * 0.9 + "vh";
    // main.style.height = 110 * 0.9 + "vh";

    const windowWidth = window.innerWidth;
    const windowHeight = window.innerHeight;

    if (windowWidth > windowHeight) {
        // Landscape
        main.style.width = (85 * 100 / 110) + "vh";
        main.style.height = 100 + "vh";

        WIDTH = windowHeight * (85 * 100 / 110) / 100;
        HEIGHT = windowHeight;
    } else {
        // Portrait
        main.style.width = 100 + "vw";
        main.style.height = (100 * 110 / 85) + "vw";

        WIDTH = windowWidth;
        HEIGHT = windowWidth * (100 * 110 / 85) / 100;
    }

    // WIDTH = window.innerHeight * (.85 * 0.9);
    // HEIGHT = window.innerHeight * (1.1 * 0.9);






        main.style.position = "relative";
    main.style.margin = "auto";

    document.body.style.fontFamily = "cursive";
    document.body.style.fontSize = "100px";

    const maxLastAttempts = 10;
    let lastAttempts = 0;
    while (yPos < 100 - PADDING && (lastAttempts < maxLastAttempts)) {
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

    if (chanceOf(0.22)) {
        // Two color gradient, bottom to top
        // console.log('GRADIENT 1');
        main.style.background = "linear-gradient(to top, " + color1 + " 0%, " + color2 + " 100%)";
    } else if (chanceOf(0.22)) {
        // Three color gradient, bottom to top
        // console.log('GRADIENT 2');
        const color3 = R.random_choice(theme);
        theme.splice(theme.indexOf(color3), 1);
        main.style.background = "linear-gradient(to top, " + color1 + " 0%, " + color2 + " 33%, " + color2 + " 66%, " + color3 + " 100%)";
    } else if (chanceOf(0.22)) {
        // Two color radial gradient ellipse
        // console.log('GRADIENT 3');
        main.style.background = "radial-gradient(" + color1 + " 0%, " + color2 + " 100%)";
    } else if (chanceOf(0.44)) {
        // Two color radial gradient circle
        // console.log('GRADIENT 4');
        const color3 = R.random_choice(theme);
        theme.splice(theme.indexOf(color3), 1);
        main.style.background = "radial-gradient(circle, " + color1 + " 0%, " + color2 + " 50%, " + color3 + " 100%)";
    } else if (chanceOf(0.44)) {
        // Three color radial gradient ellipse
        // console.log('GRADIENT 5');
        const color3 = R.random_choice(theme);
        theme.splice(theme.indexOf(color3), 1);
        main.style.background = "radial-gradient(" + color1 + " 0%, " + color2 + " 50%, " + color3 + " 100%)";
    } else if (chanceOf(0.22)) {
        // 50% one color, then second color
        // console.log('GRADIENT 6');
        main.style.background = "linear-gradient(to top, " + color1 + " 50%, " + color2 + " 100%)";
    } else if (chanceOf(0.22)) {
        // Diagonal gradient
        // console.log('GRADIENT 7');
        main.style.background = "linear-gradient(to bottom left, " + color1 + " 0%, " + color1 + " 1%, " + color2 + " 100%)";
    } else {
        // Stacked gradient
        // console.log('GRADIENT 8');
        const color3 = R.random_choice(theme);
        theme.splice(theme.indexOf(color3), 1);
        main.style.background = "linear-gradient(217deg," + (color1 + "CC") + "," + (color1 + "00") + " 70.71%), linear-gradient(127deg, " + (color2 + "CC") + ", " + (color2 + "00") + " 70.71%),linear-gradient(336deg, " + (color3 + "CC") + ", " + (color3 + "00") + " 70.71%)";
    }
}

function addText() {
    textAdded = false;
    if (chanceOf(0.88)) {
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

    let attemptCounter = 5;

    // console.log("***************************")
    // console.log('new note: ', newDescriptionText);
    while (attemptCounter > 0 && (yPos + (numLines * (newFontSize * 1.2))) > (100 - PADDING)) {
        newFontSize--;
        attemptCounter--;
    }

    if (attemptCounter > 0 && newFontSize > 1) {
        textAdded = true;
        const descFont = R.random_choice(fonts);
        const descStyle = R.random_choice(fontStyles);
        const descWeight = R.random_choice(fontWeights);
        const descColor = R.random_choice(theme);
        const maxSize = WIDTH / 2;
        let descShadow;

        // Glow
        // if (chanceOf(0.5)) {
        //     descShadow = "0 0 " + (newFontSize * 2) + "px #fff";
        // } else if (chanceOf(0.5)) {
        //     descShadow = "1px 1px " + (newFontSize / 3) + "px black, 0 0 " + (newFontSize * 2) + "px " + descColor;
        // } else {
        //     descShadow = "0 0 " + (newFontSize * 1.1) + "px" + descColor; //  + ", 1px 1px 10px" + noteColor
        // }

        // if (chanceOf(0.5)) {
        //     descShadow = "0 0 " + (newFontSize * 2) + "px #fff";
        // } else {
        //     descShadow = "1px 1px " + (newFontSize / 3) + "px black, 0 0 " + (newFontSize * 2) + "px " + descColor;
        // }

        descShadow = "1px 1px " + (newFontSize / 3) + "px black, 0 0 " + (newFontSize * 2) + "px " + descColor;


        for (let l = 0; l < lines.length; l++) {
            let currentLine = lines[l];
            let newLine = document.createElement("span");
            main.appendChild(newLine);
            newLine.addEventListener("mouseover", () => {
                newLine.style.textShadow = "1px 1px " + (newFontSize / 3) + "px white, 0 0 " + (newFontSize * 2) + "px " + descColor;
            });

            newLine.innerText = currentLine;
            newLine.style.position = "absolute";
            newLine.style.top = yPos + "%";
            newLine.style.fontSize = newFontSize + "vh";
            newLine.style.color = descColor;

            // Font
            newLine.style.fontFamily = descFont;
            newLine.style.fontStyle = descStyle;
            newLine.style.fontWeight = descWeight;
            newLine.style.textShadow = descShadow;


            let lineBoundingBox = newLine.getBoundingClientRect();
            let lineWidthPX = lineBoundingBox.width;
            let lineHeightPX = lineBoundingBox.height;

            // let lineXPos = lineBoundingBox.x;
            // let lineYPos = lineBoundingBox.y;
            let lineWidthP = (lineWidthPX / WIDTH) * 100;

            // console.log('test note width percentage: ', testNoteWidthP);
            let leftMax = 100 - lineWidthP - PADDING;
            if (leftMax < PADDING) {
                newLine.style.left = PADDING + "%";
            } else {
                newLine.style.left = R.random_num(PADDING, leftMax) + "%";
            }

            lineBoundingBox = newLine.getBoundingClientRect();
            lineWidthPX = lineBoundingBox.width;
            lineHeightPX = lineBoundingBox.height;
            // console.log('lineHeightPX: ', lineHeightPX);
            // console.log('lineHeightPX 2: ', lineHeightPX);
            // console.log("line: ", currentLine);
            let lineHeightP = ((lineHeightPX) / HEIGHT * 100);
            // console.log('lineHeightP: ', lineHeightP);

            yPos += lineHeightP;
        }
    } else {
        textAdded = false;
    }
}

function addNote() {
    // Create Notes
    let newNote = document.createElement("span");
    let testNote = document.createElement("span");

    // Set Text
    let newNoteText, newFontSize;
    const noteSizeOptions = [4, 5, 6, 7, 11, 15, 22, 44, 55];

    let mode;
    if (chanceOf(0.7)) {
        newNoteText = R.random_choice(notes);
        notes.splice(notes.indexOf(newNoteText), 1);
        newFontSize = R.random_choice(noteSizeOptions);
        mode = "note";
    } else {
        newNoteText = generateDescription();
        mode = "phrase";
        newFontSize = R.random_choice(descSizeOptions);
    }


    // if (chanceOf(0.2)) {
    //     newNoteText = R.random_choice(chars);
    //     newFontSize = R.random_choice(noteSizeOptions);
    //     isChar = true;
    //     mode = "char";
    // }

    newNote.innerText = newNoteText;
    testNote.innerText = newNoteText;

    // Font Size
    newNote.style.fontSize = newFontSize + "vh";
    testNote.style.fontSize = newFontSize + "vh";

    // Max Width
    let paddingInPx = (PADDING / 100) * WIDTH;

    // Font
    newNote.style.fontFamily = R.random_choice(fonts);
    testNote.style.fontFamily = newNote.style.fontFamily;

    // Style    
    if (mode != "char") {
        newNote.style.fontStyle = R.random_choice(fontStyles);
        newNote.style.fontStyle = newNote.style.fontStyle;
    }

    // Weight
    newNote.style.fontWeight = R.random_choice(fontWeights);
    testNote.style.fontWeight = newNote.style.fontWeight;

    // Hide Test Note
    testNote.style.visibility = "hidden";
    main.appendChild(testNote);
    const noteColor = R.random_choice(theme);
    newNote.style.color = noteColor;

    let testNoteBoundingBox = testNote.getBoundingClientRect();
    let testNoteWidthPX = testNoteBoundingBox.width;
    let testNoteHeightPX = testNoteBoundingBox.height;
    let testNoteWidthP = (testNoteWidthPX / WIDTH) * 100;
    testNote.style.position = "absolute";
    // console.log("***************************")
    // console.log('new note: ', newNoteText);
    // console.log('FONT SIZE: ', newFontSize);

    while (testNoteWidthPX > (WIDTH - paddingInPx * 2)) {
        newFontSize--;
        newNote.style.fontSize = newFontSize + "vh";
        testNote.style.fontSize = newFontSize + "vh";
        testNoteBoundingBox = testNote.getBoundingClientRect();
        testNoteWidthPX = testNoteBoundingBox.width;
        testNoteHeightPX = testNoteBoundingBox.height;
    }

    // Glow
    // if (chanceOf(0.5)) {
    //     newNote.style.textShadow = "0 0 " + (newFontSize * 2) + "px #fff";
    // } else {
    //     newNote.style.textShadow = "1px 1px " + (newFontSize / 3) + "px black, 0 0 " + (newFontSize * 2) + "px " + noteColor;
    // }

    // newNote.style.textShadow = "1px 1px " + (newFontSize / 3) + "px black, 0 0 " + (newFontSize * 2) + "px " + noteColor;

    newNote.style.textShadow = "1px 1px " + (newFontSize / 3) + "px black, 0 0 " + (newFontSize) + "px" + noteColor;
    // newNote.style.textShadow = "0 0 " + (newFontSize * 2) + "px #fff";
    // else {
    //     newNote.style.textShadow = "0 0 " + (newFontSize * 1.1) + "px" + noteColor; //  + ", 1px 1px 10px" + noteColor
    // }


    // newNote.style.textShadow = "0 0 5px " + R.random_choice(theme) + ", 1px 1px 10px #fff";



    let testNoteHeightP = ((testNoteHeightPX) / HEIGHT) * 100;
    newNote.style.position = "absolute";
    newNote.style.top = yPos + "%";
    testNote.remove();
    // if (R.random_bool(0.26)) {
    //     newNote.style.rotate = R.random_num(-7, 7) + "deg"
    // }



    if (yPos + testNoteHeightP > 100 - PADDING || newFontSize < 2) {
        textAdded = false;
    } else {
        textAdded = true;

        if (chanceOf(0.8) || yPos > 80 || numNotes < 2) {
            yPos += (testNoteHeightP);
        } else {
            yPos += (testNoteHeightP * 1.7);
        }

        // console.log('test note width percentage: ', testNoteWidthP);
        let leftMax = 100 - testNoteWidthP - PADDING;
        if (leftMax < PADDING) {
            newNote.style.left = PADDING + "%";
        } else {
            newNote.style.left = R.random_num(PADDING, leftMax) + "%";
        }
        newNote.addEventListener("mouseover", () => {
            newNote.style.textShadow = "1px 1px " + (newFontSize / 3) + "px white, 0 0 " + (newFontSize * 2) + "px " + noteColor;
        });

        main.appendChild(newNote);


    }
}

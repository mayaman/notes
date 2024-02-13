// R.random_dec(); // Random decimal [0-1)
// R.random_num(0, 10); // Random decimal [0-10)
// R.random_int(0, 10); // Random integer [0-10]
// R.random_bool(0.5); // Random boolean with probability 0.5
// R.random_choice([1, 2, 3]); // Random choice from a given list. Great for getting a random color from a discrete color palette

class Random {
    constructor() {
        this.useA = false;
        let sfc32 = function (uint128Hex) {
            let a = parseInt(uint128Hex.substring(0, 8), 16);
            let b = parseInt(uint128Hex.substring(8, 16), 16);
            let c = parseInt(uint128Hex.substring(16, 24), 16);
            let d = parseInt(uint128Hex.substring(24, 32), 16);
            return function () {
                a |= 0;
                b |= 0;
                c |= 0;
                d |= 0;
                let t = (((a + b) | 0) + d) | 0;
                d = (d + 1) | 0;
                a = b ^ (b >>> 9);
                b = (c + (c << 3)) | 0;
                c = (c << 21) | (c >>> 11);
                c = (c + t) | 0;
                return (t >>> 0) / 4294967296;
            };
        };
        // seed prngA with first half of tokenData.hash
        this.prngA = new sfc32(tokenData.hash.substring(2, 34));
        // seed prngB with second half of tokenData.hash
        this.prngB = new sfc32(tokenData.hash.substring(34, 66));
        for (let i = 0; i < 1e6; i += 2) {
            this.prngA();
            this.prngB();
        }
    }
    // random number between 0 (inclusive) and 1 (exclusive)
    random_dec() {
        this.useA = !this.useA;
        return this.useA ? this.prngA() : this.prngB();
    }
    // random number between a (inclusive) and b (exclusive)
    random_num(a, b) {
        return a + (b - a) * this.random_dec();
    }
    // random integer between a (inclusive) and b (inclusive)
    // requires a < b for proper probability distribution
    random_int(a, b) {
        return Math.floor(this.random_num(a, b + 1));
    }
    // random boolean with p as percent liklihood of true
    random_bool(p) {
        return this.random_dec() < p;
    }
    // random value in an array of items
    random_choice(list) {
        const randomIndex = this.random_int(0, list.length - 1);
        console.log('RANDOM INDEX: ', randomIndex)
        return list[randomIndex];
    }
}

function genTokenData(projectNum) {
    let data = {};
    let hash = "0x";
    for (var i = 0; i < 64; i++) {
        hash += Math.floor(Math.random() * 16).toString(16);
    }
    data.hash = hash;
    data.tokenId = (
        projectNum * 1000000 +
        Math.floor(Math.random() * 1000)
    ).toString();
    return data;
}

function randomChoice(arr) {
    return R.random_choice(arr);
}

function phraseSplitter(longString) {
    let splitByWord = longString.split(" ");
    let phraseChunks = [];
    let wordCounter = 0;

    while (wordCounter < splitByWord.length) {
        let chunkSize = R.random_int(1, 3);
        let currentChunk = [];

        while (currentChunk.length < chunkSize && wordCounter < splitByWord.length) {
            currentChunk.push(splitByWord[wordCounter]);
            wordCounter++;
        }

        let lineString = "";
        for (let w = 0; w < currentChunk.length; w++) {
            let currentWord = currentChunk[w];
            if (w < currentChunk.length - 1) {
                lineString += currentWord + " ";
            } else {
                lineString += currentWord;
            }
        }
        phraseChunks.push(lineString);
    }
    return phraseChunks;
}

function generateDescription() {
    let newString = "";
    let structure = randomChoice(structures);
    console.log('ALL STRUCTURES');
    console.log(structures);
    console.log('structure');
    console.log(structure)
    structures.splice(structures.indexOf(structure), 1);
    for (let i = 0; i < structure.length; i++) {
        let addSpace = true;
        let w = "";
        switch (structure[i]) {
            case "noun":
                w = randomChoice(noun);
                noun.splice(noun.indexOf(w), 1);
                break;
            case "thing":
                w = randomChoice(thing);
                thing.splice(thing.indexOf(w), 1);
                break;
            case "adj":
                w = randomChoice(adj);
                adj.splice(adj.indexOf(w), 1);
                break;
            case "adj_an":
                w = randomChoice(adj_an);
                adj_an.splice(adj_an.indexOf(w), 1);
                break;
            case "adj_mixed":
                w = randomChoice(adj_mixed);
                adj_mixed.splice(adj_mixed.indexOf(w), 1);
                break;
            case "adverb":
                w = randomChoice(adverb);
                adverb.splice(adverb.indexOf(w), 1);
                break;
            case "notes":
                w = randomChoice(notes).toLowerCase();
                break;
            case "desc":
                w = randomChoice(desc);
                break;
            case "season":
                w = randomChoice(season);
                break;
            case "hour":
                w = randomChoice(hour);
                break;
            case "activity":
                w = randomChoice(activity);
                activity.splice(activity.indexOf(w), 1);
                break;
            default:
                w = structure[i];
        }

        newString = newString + w;

        if (nspc && nspc.indexOf(structure[i + 1]) >= 0) {
            addSpace = false;
        }

        if (i < structure.length - 1 && addSpace) {
            newString += " ";
        }
    }

    if (chanceOf(0.17)) {
        const happyEnding = randomChoice(punctuation);
        newString += happyEnding;
        punctuation.splice(punctuation.indexOf(happyEnding), 1);

        // console.log('newDescriptionText: ', newDescriptionText);
    }

    return newString;
}
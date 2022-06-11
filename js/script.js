// Set Up Variable
let txt = "";

// Function to Calculate Name Score
function nameScoreCalc(word) {
    return [...word].reduce((sum,c) => sum += c.charCodeAt() - 64, 0);
}

// Function to Calculate All Name Scores in the Array
function namesScores(arr) {
    return arr.sort((a,b) => a < b ? - 1 : a>b ? 1 : 0).reduce((total,word,i) => total += nameScoreCalc(word) * (i+1), 0);
}


// Set Up Array
t = [];

// Apply Interpolation and Display Information in the Browser
txt += `Solution is ${namesScores(t)} <br>`;
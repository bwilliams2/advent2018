import fs from 'fs';

function applyShifts(freqArray) {
    var currFreq = 0;
    var i;
    for (i = 0; i < freqArray.length; i++) {
        currFreq += freqArray[i];
    }
    console.log(currFreq);
}


var text = fs.readFileSync("day1input.txt").toString();
var lines = text.split('\n');
let numberArray = lines.map(Number);
applyShifts(numberArray);
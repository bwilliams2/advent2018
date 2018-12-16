import fs from 'fs';

function applyShifts(freqArray) {
    var currFreq = 0;
    var allFreq = new Set();
    allFreq.add(0);
    var i, firstRepeat, firstRound;
    var foundRepeat = false;
    var n = 0;
    while (foundRepeat !== true) {
        for (i = 0; i < freqArray.length; i++) {
            currFreq += freqArray[i];
            if (allFreq.has(currFreq)) {
                firstRepeat = currFreq;
                foundRepeat = true;
                break;
            } else {
                allFreq.add(currFreq);
            }
        }
        if (n == 0) {
            firstRound = currFreq;
        }
        n += 1;
    }
    console.log(firstRound);
    console.log(firstRepeat);

}


var text = fs.readFileSync("day1input.txt").toString();
var lines = text.split('\n');
let numberArray = lines.map(Number);
applyShifts(numberArray);
// applyShifts([7, 7, -2, -7, -4]);
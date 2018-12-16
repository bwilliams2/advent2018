import fs from 'fs';

function filterChars(matchChar) {
    return function (letter) {
        return letter == matchChar;
    };
}

function findRepeats(words) {
    var chars, uniqueChars, matches, doubles = 0, triples = 0;
    var i, j;
    var hasDouble, hasTriple;
    for (i = 0; i < words.length; i++) {
        hasDouble = false;
        hasTriple = false;
        chars = words[i].split("");
        uniqueChars = Array.from(new Set(chars));
        for (j = 0; j < uniqueChars.length; j++) {

            matches = chars.filter(
                    filterChars(uniqueChars[j])
            );
            
            if (matches.length == 2) {
                hasDouble = true;
            }

            if (matches.length == 3) {
                hasTriple = true;
            }
        
        }

        if (hasDouble) {
            doubles += 1;
        }
        if (hasTriple) {
            triples += 1;
        }
    }
    console.log(triples * doubles);
}

function matchItems(firstWord, secondWord) {
    var j;
    var diffs = 0;
    for (j = 0; j < firstWord.length; j++) {
        if (firstWord[j] != secondWord[j]) {
            diffs += 1;
        }
    }
    if (diffs > 1) {
        return false;
    } else {
        return true;
    }
}

function findBoxes(words) {
    var i, j;
    var isBoxes;
    for (i = 0; i < words.length; i++) {
        for (j = 0; j < words.length; j++) {
            if (j !== i) {
                isBoxes = matchItems(words[i].split(""), words[j].split(""));
                if (isBoxes) {
                    console.log(words[i]);
                    console.log(words[j]);
                    return;
                }
            }
        }
    }
}


var text = fs.readFileSync("day2input.txt").toString();
var lines = text.split('\n');
findRepeats(lines);
findBoxes(lines);
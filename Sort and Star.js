var wordList = ["bitcoin", "take", "over", "the", "world", "maybe", "who", "knows", "perhaps"]


function twoSort(s) {
    var newList = [];
    s = s.sort()
    for (var i = 0; i < s[0].length; i++) {
        if (i === s[0].length -1) {
            newList.push(s[0][i].slice(0,1));
        } else {
            newList.push(s[0][i].slice(0,1) + "***");
        }
    }
    return newList.join("");
}


twoSort(wordList);



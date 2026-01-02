function strCount(str, letter){  
    let stringCount = 0;
    for (var i = 0; i < str.length; i++) {
        if (str[i] === letter) {
            stringCount ++;
        }
    }
    return stringCount;
}


strCount('Hello', 'o');
function firstNonRepeatedChar(str) {
    let Count = {};

    for (let i = 0; i < str.length; i++) {
        let char = str[i];
        Count[char] = (Count[char] || 0) + 1;
    }
    for (let i = 0; i < str.length; i++) {
        const char = str[i];
        if (Count[char] == 1) {
            return char; 
        }
    }
    return null;
}
}
const input = prompt("Enter a string");
alert(firstNonRepeatedChar(input)); 

function firstNonRepeatedChar(str) {
 // Write your code here
	let count={};
	for (let char of str) {
        Count[char] = (Count[char] || 0) + 1;
    }
	for (let char of str) {
        if (Count[char] == 1) {
            return char; 
        }
    }
    return null;
}
}
const input = prompt("Enter a string");
alert(firstNonRepeatedChar(input)); 

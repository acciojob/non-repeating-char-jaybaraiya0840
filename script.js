function firstNonRepeatedChar(str) {
    const obj = {};
for(let i=0;i<str.length;i++){
	if(obj[str[i]]==undefined){
		obj[str[i]]=1;
	}
	else{
		obj[str[i]]++;
	}
}
   

    for (let x of str) {
        if (obj[x] == 1) {
            consol.log(x)
        }
    }

    return null;
}
const input = prompt("Enter a string");
alert(firstNonRepeatedChar(input)); 

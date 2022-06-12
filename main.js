var input = 'turpentine and turtles';
const vowels = ['a', 'e', 'i', 'o', 'u'];
var resultArray = [];

for (let i = 0; i < input.length; i++) {
    const char = input[i];
    //console.log(input[i]);
    //console.log(i);
    if (char === 'e') {
        resultArray.push(char)
    }
    if (char === 'u') {
        resultArray.push(char)
    }    
    for (let j = 0; j < vowels.length; j++) {
        const letter = vowels [j];
        if (char === letter) {
            resultArray.push(letter);
        }
        //console.log(j);
    }
};
let resultString = resultArray.join('');

console.log(resultString.toLocaleUpperCase());

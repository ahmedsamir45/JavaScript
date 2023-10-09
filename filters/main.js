// Filter Words Mor Than 4 Characters
let sentence = "I Love Foood code Too Playing Much";

let smallWords = sentence.split(" ").filter(function (ele) {
    return ele.length <= 4;
}).join(" ")

console.log(smallWords)

let mix = 'A138S2ZX'

let mixedContent = mix.split('').filter(function (ele2) {
    return !isNaN(parseInt(ele2));
}).map(function (ele2){
    return ele2*ele2;
} ).join('')

console.log(mixedContent)
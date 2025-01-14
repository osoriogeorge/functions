function add7(number) {
    return number + 7;
}
console.log(add7(2)); 


function multiply(number1,number2){
    return number1 * number2
}
console.log(multiply(2,5));




function capitalize(word) {
    if (!word) return ""; 
    return word.charAt(0).toUpperCase() + word.slice(1).toLowerCase();
}

console.log(capitalize("hello")); // Output: "Hello"
console.log(capitalize("HELLO")); // Output: "Hello"
console.log(capitalize("hElLo")); // Output: "Hello"

function lastLetter(word) {
    return word.charAt(word.length -1);
}

console.log(lastLetter("hello")); 

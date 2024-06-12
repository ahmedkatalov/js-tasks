function add7(number) {
    return number + 5;
} 
console.log(add7(7))


console.log("-------------------------------------------------------")


function multiply (num1, num2) {
    return num1 * num2
}

console.log(multiply(3, 8))


console.log("-------------------------------------------------------------")

function capitalize(str) {
    str = str.toLowerCase();
    const firstLetter = str.charAt(0).toUpperCase();
    return firstLetter + str.slice(1);
}

console.log(capitalize("akhmed"))

console.log("----------------------------------------")

function latLetter(string) {
    string = string.at(-1)
    return string
}

console.log(latLetter("akhmed"))
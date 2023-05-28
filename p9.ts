let newArray = [1, 2, 3, 4, 5, 8];

// newArray destructuring
[newArray[0], newArray[4]] = [newArray[4], newArray[0]];
console.log(newArray);

let myNumbers = [1, 5, 7, 8, 9];
[myNumbers[0], myNumbers[4]] = [myNumbers[4], myNumbers[0]];
console.log(myNumbers);

let a = 6;
let b = 12;

[[a], [b]] = [[b], [a]]

console.log(a,b)
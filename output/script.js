"use strict";
document.write('Hello Tanvir Hossen Bappy' + '</br>');
function multiply(a, b) {
    return a * b;
}
document.write(String(multiply(10, 20)) + '</br>');
let fruits = ['apple', 'banana', 'orange'];
fruits.push('34');
// @ts-ignore
document.write(fruits + '</br>');
let a = [];
a.push('Bangladesh');
const additionOfTwoNumber = (m, n, x = 'true') => {
    // @ts-ignore
    return (`The result of ${m} and ${n} is: ${m + n}`);
};
document.write(additionOfTwoNumber(1, 2) + '</br>');
const userDetails = (id, user) => {
    // @ts-ignore
    return (`User id is ${id}, Name is ${user.name}, Age is ${user.age}`);
};
// @ts-ignore
// @ts-ignore
document.write(userDetails(1, { name: "Jane", age: 90, }) + '</br>');
let calculation;
// @ts-ignore
calculation = (a, b, c) => {
    if (c === 'abc') {
        return a + b;
    }
    else {
        return a - b;
    }
};
document.write(String(calculation(20, 25, 'bc')) + '</br>');
let userDetailsFun;
// @ts-ignore
userDetailsFun = (id, user) => {
    return `The user name is ${user.name} and he is ${user.age} years old`;
};
// @ts-ignore
document.write(userDetailsFun(1, { name: 'Tanjib', age: 30 }));

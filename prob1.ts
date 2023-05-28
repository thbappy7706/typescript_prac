// Remove falsy values from any array

let miscellaneous = ['🍎', false, '🍊', NaN, 0, undefined, '🌶️', null, '', '🥭'];

let fruits =  miscellaneous.filter(Boolean);
console.log(fruits)
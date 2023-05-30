//shuffling an array
const foodName = ['banana', 'cake', 'soup', 'milk'];
// const numbers = [1,2,3,4,5];
let result = foodName.sort(() => Math.random() - 0.5);
console.log(result);
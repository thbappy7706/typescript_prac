//remove duplicates from array
const arr = [1,2,4,5,6,7,8,9,5,6,3];

let res = [...new Set(arr)];

// let newSet =  new Set;
//
// let result = [...newSet.add({a:4})];
console.log(res);
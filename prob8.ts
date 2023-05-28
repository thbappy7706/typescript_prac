const startTime = performance.now();
for (let i: number = 0; i <= 50; i++) {
    console.log(i)
}
const endTime = performance.now();
console.log(endTime - startTime + `millisec`);

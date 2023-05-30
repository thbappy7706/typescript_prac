// compare two array by value

const hasSameElements = (a, b) => {
    return a.length === b.length && a.every((value, index) =>
        value === a[index]
    )
}

console.log(hasSameElements([1,2],[1,5,6]))
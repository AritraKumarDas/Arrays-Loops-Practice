
// 6. From an array of numbers find the biggest.

const arr = [25, 63, 42, -69, 0, -3, 85, 31]

console.log("Entered Array: \n" + arr)

const biggest = arr.reduce((acc, next) => {
    if (next > acc) {
        return next
    }
    return acc
})

console.log("Biggest Number: " + biggest)
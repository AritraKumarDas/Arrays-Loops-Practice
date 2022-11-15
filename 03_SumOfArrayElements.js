
// 3. Using forEach (in javascript), print the sum of all the array elements.

const arr = [56, 23, -89, 120, 69, 87, 0, 66]

console.log("Entered Array:\n" + arr)

let sum = 0

arr.forEach(item => sum += item)

console.log("Sum of all numbers: " + sum)
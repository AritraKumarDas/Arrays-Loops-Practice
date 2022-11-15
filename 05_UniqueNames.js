
// 5. Take two arrays similar to qs (11) and create a new array with the unique names from both the arrays. (The new array should consist unique names from both the arrays)



const arr1 = ["SAM", "VIKRAM", "VENUS"]

const arr2 = ["WATSON", "RAM", "SAM"]

const unique1 = arr1.filter(item => !arr2.includes(item))
const unique2 = arr2.filter(item => !arr1.includes(item))

const unique = unique1.concat(unique2)

console.log("Unique Names:\n" + unique)
// 1. Take an array. Iterate over each element and add 1 if the item is odd and add 2 if the item is even and print the new array.

const arr = [45, 78, -89, 0, 65, 78, 41, 69, 32]   // Take input from keyboard

console.log("Entered Array:\n" + arr)


// ***************** Using Conventional Array method ****************

// const newArr = [];
// for (let i = 0; i < arr.length; i++) {
//     if (arr[i] % 2 === 0) {
//         newArr.push(arr[i] + 2)
//     } else {
//         newArr.push(arr[i] + 1)
//     }
// }


// ****************** Using Array "map" method *********************

const newArr = arr.map(item => item % 2 === 0 ? item + 2 : item + 1)

console.log("New Array:\n" + newArr)


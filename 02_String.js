
// 2. Take an array of strings (example: “RAM”, “SHAYAM”) and print a new array having only names whose length is below 5.


const arr = ["Ram", "Shyam", "Om", "Nick", "Sandip", "Shivam", "Aritra", "Max", "Rohit", "Amir", "Suraj"]

// ***************** Using Array "filter" method ******************

const newArr = arr.filter(name => name.length < 5)
console.log("Filtered Array:\n" + newArr);

// **************** Using Traditional Method ********************

// const newArr = []
// for (let name of arr) {
//     if (name.length < 5) {
//         newArr.push(name)
//     }
// }
// console.log("New Array:\n" + newArr)

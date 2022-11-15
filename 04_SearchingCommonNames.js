
// 4. Take two arrays arr1 = [“SAM”, “VIKRAM”, “VENUS”] and arr2 = [“WATSON”, “RAM”, “SAM”] use a for loop to find out the names common in both the arrays.

const arr1 = ["SAM", "VIKRAM", "VENUS"]

const arr2 = ["WATSON", "RAM", "SAM"]


const common = []
for (let name of arr1) {
    for (let name2 of arr2) {
        if (name == name2) {
            common.push(name)

        }
    }
}

console.log(unique)

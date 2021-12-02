const fs = require("fs");
fs.readFile(__dirname + "/numbers.txt", (error, data) => {
    if (error) {
        throw error;
    }
    //console.log(data.toString());
    const numbers = (data.toString()).split("\n").map(n => parseInt(n));
    //console.log(numbers.length)
    
    let increased = 0;
    let decreased = 0;
    numbers.forEach((element, i, arr) => {
        if (i) {
            if (arr[i] > arr[i-1]) {
                increased++
                console.log("from:", arr[i-1], " - to: ", arr[i], " increased " ,i)
            } else {
                decreased++
                console.log("from:", arr[i-1], " - to: ", arr[i], " decreased " ,i)

            }
        } 
    });

    console.log(increased, decreased)
    console.log(increased + decreased)
});
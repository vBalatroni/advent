const fs = require("fs");


fs.readFile(__dirname + "/numbers.txt", (error, data) => {
    if (error) {
        throw error;
    }
    //console.log(data.toString());
    const numbers = (data.toString()).split("\n").map(n => parseInt(n));
    console.log(numbers.length);
    let count = 0;
    let temp_sum = 0;
    console.log(temp_sum);
    let new_arr = (splitToChunks(numbers, 667));
    new_arr.forEach(element => {
        let new_sum = 0;
        element.forEach(e => {
            if (element.length === 3) {
                console.log(e);
                new_sum += e;
            }
        });
        console.log(new_sum);
        console.log("\n");
        if (temp_sum != 0) {
            if (new_sum > temp_sum) {
            count++;
            console.log("new sum:", new_sum, ' > ', "old_sum: ", temp_sum, "increased", count);
            } else {
                console.log("new sum:", new_sum, ' < ', "old_sum: ", temp_sum , "decreased");
            }
        }
        temp_sum = new_sum;
    });
    console.log(count);
});

function splitToChunks(array, parts){
    let result = [];
    for (let i = parts; i > 0; i--) {
        result.push(array.splice(0, Math.ceil(array.length / i)));
    }
    return result;
}
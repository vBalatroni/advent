const fs = require("fs");
fs.readFile(__dirname + "/instructions.txt", (error, data) => {
    if(error) {
        throw error;
    }
    //console.log(data.toString());
    const commands = (data.toString()).split("\n");
    console.log(commands.length)

    let forward = 0;
    let down = 0;
    let up = 0;
    let aim = 0
    let hp = 0;
    let depth = 0;
    commands.forEach((element, i, arr) => {
        var num = parseInt(element.match(/\d+/),10)
        if (element.includes("forward")) {
            hp += num;
            depth += aim * num;
        }
        else if (element.includes("down")) {
            aim += num;
        }
        
        else if (element.includes("up")) {
            aim -= num;
        }
    });

    console.log("depth = ", depth)
    console.log("hp = ", hp)
    console.log("result = ", depth * hp)
    
    


});
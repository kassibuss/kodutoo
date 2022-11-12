const fs = require("fs");
const readline = require("readline");
const stream = fs.createReadStream("C:\\Users\\opilane\\OneDrive - Tallinn Polytechnic School\\Desktop\\orderRows.csv")
const rl = readline.createInterface({input: stream});
let data = [],

rl.on("line", (row) => {
    data.push(row.split(";"));

});

rl.on("close", () => {
    console.log(data);
    console.log (data[1][3]);

    console.log(hind);
});
console.log("Lõpp");   

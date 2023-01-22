var fs = require("fs")

const USA = "USA, 2023, 337,550,940 "
const csv_file_name = "usa.txt"
fs.writeFileSync("csv_file_name", USA)

// Convert to function if needed



var data = "\n1, USA, 2023, 337,550,940"
fs.writeFileSync(csv_file_name,data, {flag:'a'})

var data = "\n2, USA, 2023, 337,550,940"
fs.writeFileSync(csv_file_name,data, {flag:'a'})
var data = fs.readFileSync("csv_file_name")
console.log(`${data.toString()}`);

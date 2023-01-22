var fs = require("fs")

const input_countries = "input_countries.txt"
const canada = "canada.txt"

fs.readFile(input_countries, 'utf-8', (err, data) =>{
    if(err){
        console.log(err.message);
    }
    console.log(data);
})

fs.readFileSync(canada, "utf-8", (err, data) =>{
    if(err){
        console.log(err);
    }
    console.log(data);
})


// Delete usa.txt and canada.txt if exists
if (fs.existsSync('canada.txt')) {
    fs.unlinkSync('canada.txt', (err) => {
        if (err) {
            console.log(err)
            return
        }
        console.log("File deleted successfully.")
    })
}
if (fs.existsSync('usa.txt')) {
    fs.unlinkSync('usa.txt', (err) => {
        if (err) {
            console.log(err)
            return
        }
        console.log("File deleted successfully.")
    })
}

// fs.unlink("canada.txt")
// if(canadaTextDeleted){
//     console.log("File Deleted!");
// }else{
//     console.log("File still there!");
// }

// console.log(canadaTextDeleted);

// let data = fs.readFileSync(input_countries)
// console.log(data.toString());

// fs.readFile("input_countries.txt", data => {
//     if(err){
//         console.log();
//     }
//     console.log(data.toString());
// })
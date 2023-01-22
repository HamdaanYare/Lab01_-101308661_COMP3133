var fs = require("fs")

fs.open("canada.txt", 'r+', (err, fd) =>{
    if(err){
        console.log(err);
        return
    }
    var bufferData = Buffer.alloc(100)
    fs.read(fd, bufferData, 0, bufferData.length,0, (err, n,b) => {
        console.log(bufferData.toString());
        console.log(err,n, b.toString());
    })
    // Write Data

    var bufferToWrite = Buffer.from("🥰 Canada, 2023, 38,585,158 ") 
    fs.write(fd, bufferToWrite, (err, n, b) => {
        if (err) {
            console.log(err);
            return
        }
        console.log("Data Written successfully");
        fs.close(fd, () => {
            console.log("FD closed!");
        })
    })
})
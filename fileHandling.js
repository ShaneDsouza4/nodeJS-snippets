const fs = require("fs");

//Write File
//const file = fs.writeFileSync("./test.txt", "Hey There!");
// fs.writeFile("./test.txt", "Hey There!", (err, result)=>{
//     if(err) console.log(err);
//     console.log(result)
// });


//Read File
// const file = fs.readFileSync("./test.txt", "utf-8");
// console.log(file);

// fs.readFile("./test.txt", "utf-8", (err, result)=>{
//     if(err)console.log(err);
//     console.log(result);
// })

//Append
//fs.appendFileSync("./test.txt", `\n${new Date().toLocaleString()} user loggedin`);

//Copy
//fs.cpSync("./test.txt", "./copy.txt");

//Delete
//fs.rmSync("./copy.txt");

//Check File Statistics
//const stat  = fs.statSync("./test.txt");
//console.log(stat);

//Make Directories
//fs.mkdirSync("abc");
//fs.mkdirSync("abc/a/b", {recursive:true});
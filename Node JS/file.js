const fs = require("fs");

//INFO: sync -> blocking code
//INFO: async -> non blocking code

//NOTE: write

// fs.writeFileSync('./test.txt', 'Hello this is sync writing')

// fs.writeFile('./test2.txt', 'Hello this is async code', (err) => { console.log(err); })

//NOTE: read

// const res = fs.readFileSync("./test.txt", "utf-8");
// console.log(res);

// fs.readFile("./test2.txt", "utf-8", (err, res) => {
//   err ? console.log(err) : console.log(res);
// });

//NOTE: update

// fs.appendFileSync('./test.txt', new Date().toDateString())

// fs.appendFile('./test2.txt', `loged in at ${new Date().toDateString()}\n`, (err, res) => {
//     err? console.error(err) : console.info(res)
// })


//NOTE: delete

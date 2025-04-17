const fs = require('fs');

fs.writeFile("message.txt", "Hello Begüm from Node.js", (err) => {
    if (err) throw err;
    console.log("The file has been saved!");
});


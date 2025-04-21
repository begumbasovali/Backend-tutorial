import express from "express";

const app = express(); //create an instance of express

app.get("/", (req,res) => {
  res.send("Hello World!"); //send a response to the client
});

const port = 3000;
app.listen(port ,() => { //port number and callback function
    console.log(`Server is running on port ${port}`); 
})
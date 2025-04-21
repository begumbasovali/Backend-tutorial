import express from "express";

const app = express();
const port = 3000;

app.get ("/", (req, res) => {
  res.send("<h1>Hello World!</h1>"); //send a response to the client
});
app.get("/about", (req, res) => {
  res.send("<h1>About Me</h1><p>My name is Begum Basovali</p>");
});

app.get("/contact", (req, res) => {
  res.send("<h1>Contact Me</h1><a href='mailto:begum.basovali@gmail.com'>Email Me</a>");
});

app.listen(port, () => {
  console.log(`Server is running on port ${port}`);
});
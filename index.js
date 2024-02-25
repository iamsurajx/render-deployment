import express from "express";

const app = express();
const port = 8080;

app.get("/", (req, res) => {
  res.send("Hello World render");
});

app.listen(8080, () => {
  console.log("Server is running on port:", port);
});

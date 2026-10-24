import express from "express";

const app = express();
const port = 3000;
app.use(express.urlencoded());


// serve public folder files to browser
app.use(express.static("public"));

// listen for form submission
app.post("/submit", function (req, res) {
  console.log(req.body); // log the body of the request
  res.send("Got it! Look at the server terminal."); // send a response message
});

// log port in terminal
app.listen(port, function () {
  console.log("Listening on http://localhost:" + port);
});

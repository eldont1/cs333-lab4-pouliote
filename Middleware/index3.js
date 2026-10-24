import express from "express";

const app = express();
const port = 3000;

// log request method and url, then pass on the request
function logger(req, res, next) {
  console.log("Request method:", req.method);
  console.log("Request URL:", req.url);
  next();
}

// show the logger results in terminal
app.use(logger);

app.get("/", function (req, res) {
  res.send("Hello");
});

app.listen(port, function () {
  console.log("Listening on http://localhost:" + port);
});

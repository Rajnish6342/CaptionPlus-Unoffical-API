const api = require("./api");
const endpoints = require("./endpoints");
const express = require("express");
const app = express();
const port = process.env.PORT;

app.use("/api/:topic/", api);
app.use("/", endpoints);
const server = app.listen(port, () => {
  console.log(`App running on port ${port}...`);
});

const express = require("express");
const app = express();

app.get("/", (request, response) => {
  response.send(`<p>Hello world! This is being served from Docker.`);
});

app.listen(3000);

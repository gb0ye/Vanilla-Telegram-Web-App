const express = require("express");
require("dotenv").config();
const path = require("path");

const app = new express();

app.use(express.static(path.join(__dirname, "../public")));
const PORT = process.env.PORT || 4000;

app.get("/", (req, res, next) => {
   res.sendFile(path.join(__dirname, "../public/index.html"));
});

app.listen(PORT, console.log(`App listening on ${PORT}`));

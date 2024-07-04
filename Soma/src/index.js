const express = require("express");
const router = require("./soma/route")

const app = express();

app.use(express.json());

app.use("/", router)

module.exports = app;
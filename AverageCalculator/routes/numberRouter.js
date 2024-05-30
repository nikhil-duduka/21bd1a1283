const express = require("express");
const { randController } = require("../controllers/randController");

const numberRouter = express.Router();
// numberRouter.get('/p',primeController)
// numberRouter.get('/f',fiboController)
// numberRouter.get('/e',evenController)
numberRouter.get('/r',randController)
module.exports = {numberRouter}
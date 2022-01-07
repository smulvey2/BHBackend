const express = require("express");
const apiRouter = express.Router();

const barController = require("./controllers/bar.controller.js");

apiRouter.get("/bars/:location", barController.getBarsByLocation);

module.exports = apiRouter;
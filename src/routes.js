const express = require("express");
const apiRouter = express.Router();

const barController = require("./controllers/bar.controller.js");

//apiRouter.get("/barhopDB/:location", barController.getBarsByLocation);

apiRouter.get("/location/:location", barController.getBarsByLocation);
apiRouter.get("/addBarUser/:input", barController.addBarUser);
apiRouter.get("/removeBarUser/:input", barController.removeBarUser);
apiRouter.get("/writeDescription/:input", barController.writeDescription);
apiRouter.get("/writeReview/:input", barController.writeReview);
apiRouter.get("/deleteReview/:input", barController.deleteReview);


module.exports = apiRouter;
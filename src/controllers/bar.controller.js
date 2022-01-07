// import BarService from "../services/bars/bars.service.js"
// import db from "../models/db.js"
const BarService = require("../services/bars/bars.service.js");
const db = require("../models/db.js");

exports.getBarsByLocation = async (req, res, next) => {
    console.log("req: ", req.params.location);
    const service = new BarService(db.models.bar);
    const bars = await service.getAll();
    const options = {}
    res.status(200);
    return res.json(bars);
}

// export default barController;

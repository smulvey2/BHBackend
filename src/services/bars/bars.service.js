const BaseService = require("../base/base.service.js");

class BarsService extends BaseService {
    constructor(bar){
        super(bar);
        this.model = bar;
    }
}

module.exports = BarsService;
const autoBind = require("auto-bind");
const { validationResult } = require("express-validator");

module.exports = class controller {
  constructor() {
    autoBind(this);
  }

  async validationData(req) {
    const result = validationResult(req);
    if (!result.isEmpty()) {
      const errors = result.array();
      let messages = [];
      errors.forEach((err) => messages.push(err.msg));
      return { status : false , messages };
    }

    return { status : true };
  }
};

const validator = require("./validator");
const { check } = require("express-validator");

class urlValidator extends validator {
  handle() {
    return [
        check("title")
        .isLength({ min: 1 })
        .withMessage("minimum error")
    ];
  }
}

module.exports = new urlValidator();

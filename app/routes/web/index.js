const express = require("express");
const router = express.Router();

const homeController = require("app/http/controllers/homeController");

//Validators
const urlValidator = require("app/http/validators/urlValidator");
// Middlewares
const errorHandler = require("app/http/middleware/errorHandler");

router.post(
    "/",
    urlValidator.handle(),
    homeController.index
  );

// Handle Errors
router.all("*", errorHandler.error404);
router.use(errorHandler.handler);

module.exports = router;

const express = require("express");
const app = express();
const http = require("http");
const Helpers = require("./helpers");
const bodyParser = require("body-parser");

module.exports = class Application {
  constructor() {
    this.setupExpress();
    this.setConfig();
    this.setRouters();
  }

  setupExpress() {
    const server = http.createServer(app);
    server.listen(config.port, () =>
      console.log(`Listening on port ${config.port}`)
    );
  }

  setConfig() {
    app.use(bodyParser.urlencoded({ extended: false }))
    app.use(bodyParser.json())
    app.use((req, res, next) => {
      app.locals = new Helpers(req, res).getObjects();
      next();
    });
  }

  setRouters() {
    app.use(require("app/routes/web"));
  }
};

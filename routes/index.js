const express = require("express");
const router = express.Router();
const swaggerUI = require("swagger-ui-express");
const { specs } = require("../swagger/swagger");

router.get("/", (req, res) => {
  res.render("index", { layout: "layout/layout", value: 123 });
});

router.use("/api-docs", swaggerUI.serve, swaggerUI.setup(specs));

module.exports = router;

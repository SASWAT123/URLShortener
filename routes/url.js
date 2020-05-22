const express = require("express");
const router = express.Router();

const { urlShortner } = require("../controller/url");

router.post("/short", urlShortner);

module.exports = router;

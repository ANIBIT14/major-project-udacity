const express = require("express");
const { login } = require("../loginSignupFunction");
const router = express.Router();

router.post("/mentorLogin", async (req, res) => {
    const result = await login(req.body);
    res.json(result);
});

module.exports = router;
const express = require('express');
const { insertVideo } = require('../config/crudFunction');
const router = express.Router();

router.post('/insertVideo', async (req, res) => {
    const result = await insertVideo(req.body);
    res.json(result);
});

module.exports = router;
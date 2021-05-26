const express = require('express');

const router = express.Router();

router.get('/prueba', (req, res) => {
    res.status(200).json({message: 'todo ok'});
})

module.exports = router;

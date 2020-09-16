const express = require('express');
const router = express.Router();

router.get('/', (req, res) => res.json({
    username: 'Jadeeee'
}));

module.exports = router;
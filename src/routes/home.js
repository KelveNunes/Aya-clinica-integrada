const express = require('express')

const router = express.Router();

router.get('/', async (req, res)=>{
    console.log('ólá');
    res.render('../views/index');
})

module.exports = router;
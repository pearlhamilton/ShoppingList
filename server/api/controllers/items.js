const express = require('express');
const router = express.Router();
const Item = require('../models/items')

//index route
router.get('/', async(res,req) => {
    try{
        const items = await Item.all
        res.json({items})
        res.status(200)
    }

    catch{
        res.status(500).json({err})
    }
})


module.exports = router;
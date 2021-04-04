const express = require('express');
const router = express.Router();
const Item = require('../models/items')

//index route
router.get('/', async (req,res) => {
    try{
        const items = await Item.all
        console.log(items)
        res.json({items})
    }

    catch{
        res.status(500).json({err})
    }
})


module.exports = router;
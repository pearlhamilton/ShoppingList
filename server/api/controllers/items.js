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


router.get('/:id', async (req,res) => {
    try{
        const item = await Item.findById(parseInt(req.params.id))
        res.json(item)
    }

    catch(err){
        res.status(500).json({err})
}

})


router.post('/', async (req, res) => {
    try {
        const newItem = await Item.create(req.body.item_name, req.body.amount)
        res.json(newItem)
    } catch(err) {
        res.status(404).json({err})
    }
})

module.exports = router;
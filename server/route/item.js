const express = require('express')
const router = express.Router()
const Item = require('../model/Item')

//ADD
router.post('/item/add',async (req, res) => {
    
    try {
        const { item_name, time_to_buy, item_cost, item_descripition, item_bought } = req.body
        if (!item_name || !time_to_buy || !item_cost || !item_descripition) { 
            return res.status(202).json({
                 "error": "Incomplete Form"
             });
        }
        const newItem = new Item(req.body)
        await newItem.save(function(err,result){
            if (err) {
                return res.status(202).json(err);
            }
            return res.status(200).json({
                "status":200,
                "item": result
            })
        })
    } catch (e) {
        return res.status(200).json({
            "status":202,
            "message": "Unable to Create an Item.Try Again later..." 
        })
   }
})
//EDIT
router.post('/item/edit/',async(req,res)=>{
    try {
        const { id } = req.body
        await Item.findOneAndUpdate({ _id: id }, { ...req.body }, null, (err, doc) => {
        }).exec()
        return res.status(200).json({
            "status": 200,
            "message": 'Successfully Updated'
        })
    }catch(e){
        // Error Handling
        //console.error(e)
    }
})
//DELETE
router.post('/item/delete',async(req,res)=>{
    try {
        const { id } = req.body
        await Item.findOneAndDelete({ _id: id.id }, null, (err, doc) => {
            
        }).exec()
        
        return res.status(200).json({
            "status": 200,
            "message": 'Successfully Deleted'
        })
    }catch(e){
        // Error Handling
        //console.error(e)
    }
})
//GET ALL ITEM
router.get('/items',async(req,res)=>{
     try {
         await Item.find({}, function (err, items) {
             
             if (err) {
                   return res.status(402).json({
                        "error": "Error Occured"
                    });  
                }
                return res.status(200).json({
                    "status": 200,
                    "items": items,
                    "message": 'Successfully Fetched'
                })
        }).exec()
        
    }catch(e){
        // Error Handling
        //console.error(e)
    }
})
//Buy
router.get('/item/buy', async(req, res) => {
    const { id, buyStatus } = req.body
    await Item.findByIdAndUpdate(id, { $set: { item_bought: buyStatus } }, null, (err, doc) => {
        if (err) {
                   return res.status(402).json({
                        "error": "Error Occured"
                    });  
        }
        if (doc) {
            return res.status(200).json({
                    "status": 200,
                    "message": 'Successfully Updated'
                })
        }
    }).exec();
    
})
module.exports = router

const express=require('express')
const router=express.Router()

const Orders=require('../models/Orders')

router.post('/orderData',async(req,res)=>{
    let data=req.body.order_data;
    await data.splice(0,0,{Order_date:req.body.order_date})

    let eId=await Orders.findOne({'email':req.body.email})
    console.log(eId);
    if(eId===null){
        try{
            await Orders.create({
                email:req.body.email,
                order_data:[data]
            }).then(()=>{
                res.json({success:true})
            })
        }catch(err){
            console.log(err.message)
            res.send("Server Error",err.message)
        }
    }
    else{
        try{
            await Orders.findOneAndUpdate({"email": req.body.email},
            {$push:{order_data:data}} ).then(()=>{
                res.json({success:true})
            })
        }catch(err){
            res.send("Server Error",err.message)
        }
    }
})

router.post('/myorderData',async(req,res)=>{
    try {
        console.log(req.body.email)
        let eId = await Orders.findOne({ 'email': req.body.email })
        //console.log(eId)
        res.json({orderData:eId})
    } catch (error) {
        res.send("Error",error.message)
    }
})

module.exports=router;

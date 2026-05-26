const express=require("express");
const cors= require("cors");
const router=express.Router();
const {pool}=require("../utils/database")


//----------------------------POLLS----------------------------------

//GET every record from polls table
router.get("/polls", (req,res)=>{
   try{
     pool.query("SELECT * FROM polls",[], (error,results)=>{
        res.status(200).json(results);
    },req)
   }
   catch(err){res.status(500).json(err)}
})

//POST record into polls table
router.post("/polls", (req,res)=>{
    try{
    const {title}=req.body;
    
    pool.query("INSERT INTO `polls` ( `title`, `created_at`) VALUES (?, current_timestamp());",[title], (error,results)=>{
        res.status(200).json(results);
    },req)}
    catch(err){res.status(500).json(err)}
})


//DELETE record ffrom polls table
router.delete("/polls/:id", (req,res)=>{
    try{
    const id=req.params.id;
    
    pool.query("DELETE FROM polls WHERE id=?",[id], (error,results)=>{
        res.status(200).json(results);
    },req)}
    catch(err){res.status(500).json(err)}
})

//----------------------------OPTIONS----------------------------------

//POST record into options table
router.post("/options", (req,res)=>{
    try{
    const {poll_id, name}=req.body;
    
    pool.query("INSERT INTO `options` ( `poll_id`, `name`) VALUES (?, ?);",[poll_id,name], (error,results)=>{
        res.status(200).json(results);
    },req)}
    catch(err){res.status(500).json(err)}
})

//GET every option of each poll

router.get("/polls/:id/options", (req,res)=>{
   try{
    const {id}=req.params.id;
     pool.query("SELECT * FROM options WHERE poll_id=?",[id], (error,results)=>{
        res.status(200).json(results);
    },req)
   }
   catch(err){res.status(500).json(err)}
})

//DELETE record ffrom polls table
router.delete("/options/:id", (req,res)=>{
    try{
    const id=req.params.id;
    
    pool.query("DELETE FROM options WHERE id=?",[id], (error,results)=>{
        res.status(200).json(results);
    },req)}
    catch(err){res.status(500).json(err)}
})


//---------------------------VOTES-------------------------

//POST record into options table
router.post("/votes", (req,res)=>{
    try{
    const {option_id}=req.body;
    
    pool.query("INSERT INTO `votes` ( option_id, `date`) VALUES (?, current_timestamp());",[option_id], (error,results)=>{
        res.status(200).json(results);
    },req)}
    catch(err){res.status(500).json(err)}
})


module.exports=router;
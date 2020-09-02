const express = require('express')
const Users = require('../models/users');
const router = express.Router();

router.get('/', async(req,res)=> {
        Users.find({}).then(x=> res.status(200).send(x));
});

router.get('/:id', async(req,res)=> {
    Users.findById(req.params.id).then(x=> res.status(200).send(x));
});

router.post('/',(req,res)=>{
    Users.create(req.body).then(x=> res.status(201).json({insert:true})).catch(e=>res.status(500).json({insert:false}));
});

router.put('/:id',(req,res)=>{
    console.log('Entro a update');
  Users.findByIdAndUpdate(req.params.id, req.body).then(x=> res.status(204).json({update:true})).catch(e=>res.status(500).json({update:false}));
})

router.delete('/:id',(req,res)=>{
  Users.findByIdAndRemove(req.params.id).then(x=> res.status(204).json({update:true})).catch(e=>res.status(500).json({update:false}));
})
module.exports = router;
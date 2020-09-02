const express = require('express')
const Announcements = require('../models/announcements');
const router = express.Router();

router.get('/', async(req,res)=> {
        Announcements.find({}).populate('user_id').then(x=> res.status(200).send(x));
});

router.get('/:id', (req,res)=>{
    Announcements.findById(req.params.id).populate('user_id').then(x=> res.status(200).send(x)).catch(e=>res.status(500));
})

router.post('/',(req,res)=>{
    Announcements.create(req.body).then(x=> res.status(201).json({insert:true})).catch(e=>res.status(500).json({insert:false}));
})

router.put('/:id',(req,res)=>{
    console.log('Entro a update');
  Announcements.findByIdAndUpdate(req.params.id, req.body).then(x=> res.status(204).json({update:true})).catch(e=>res.status(500).json({update:false}));
})

router.delete('/:id',(req,res)=>{
  Announcements.findByIdAndRemove(req.params.id).then(x=> res.status(204).json({update:true})).catch(e=>res.status(500).json({update:false}));
})

module.exports = router;


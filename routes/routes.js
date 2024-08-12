const express = require('express');
const router = express.Router()
const Book = require('../models/books');

//Create Method
router.post('/create', async (req, res) => {
    console.log(req)
        const data = new Book({
        title: req.body.title,
        author: req.body.author,
        publisher: req.body.publisher,
        pages: req.body.pages
    })
    try{
        const dataToSave = await data.save();
        res.status(200).json(dataToSave)
    }
    catch(error){
        res.status(400).json({message: error.message})
    }
})

//Get all Method
router.get('/find', async (req, res) => {
    try{
        const data = await Book.find();
        res.json(data)
    }
    catch(error){
        res.status(500).json({message: error.message})
    }
})

//Get by ID Method
router.get('/findOne/:id', async (req, res) => {
    try{
        const data = await Book.findById(req.params.id);
        res.json(data)
    }
    catch(error){
        res.status(500).json({message: error.message})
    }
})

//Update by ID Method
router.patch('/update/:id', async (req, res) => {
    try{
        const id = req.params.id;
        const updatedData = req.body;
        const options = { new: true };

        const result = await Book.findByIdAndUpdate(
            id, updatedData, options
        )

        res.send(result)
    }
    catch(error){
        res.status(400).json({message: error.message})
    }
})

//Delete by ID Method
router.delete('/delete/:id', async (req, res) => {
    try{
        const id = req.params.id;
        const data = await Book.findByIdAndDelete(id)
        res.send(`Book with ${data.title} has been deleted.`)
    }
    catch(error){
        res.status(400).json({message: error.message})
    }
})

module.exports = router;
const router = require('express').Router();

const {
    addThought, 
    getAllThoughts,
    getThoughtById,
    updateThought
} = require('../../controllers/thought-controllers');

router      
    .route('/')
    .get(getAllThoughts)
    .post(addThought);

router  
    .route('/:id')
    .get(getThoughtById)
    .put(updateThought)
    

module.exports = router;
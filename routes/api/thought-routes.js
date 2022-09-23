const router = require('express').Router();

const {
    addThought, 
    getAllThoughts,
    getThoughtById,
    updateThought,
    deleteThought,
    addReaction
} = require('../../controllers/thought-controllers');

router      
    .route('/')
    .get(getAllThoughts)
    .post(addThought);

router  
    .route('/:id')
    .get(getThoughtById)
    .put(updateThought)
    .delete(deleteThought);

router  
    .route('/:thoughtId/reactions')
    .post(addReaction)

module.exports = router;
const router = require('express').Router();

const {
    addThought, 
    getAllThoughts
} = require('../../controllers/thought-controllers');

router      
    .route('/')
    .get(getAllThoughts)
    .post(addThought);
    
// router  
//     .route('/:userId')
//     .post(addThought);

module.exports = router;
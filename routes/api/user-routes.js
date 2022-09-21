const router = require('express').Router();

const {
    getAllUsers, 
    createUser,
    getUserById
} = require('../../controllers/user-controllers');

router
    .route('/')
    .get(getAllUsers)
    .post(createUser);

router
    .route('/:id')
    .get(getUserById);

module.exports = router;
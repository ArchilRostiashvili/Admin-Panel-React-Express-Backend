const express = require('express');
const { signupUser, loginUser,
getSingleUser,
getAllUsers,
deleteUser,
updateUser
} = require('../controllers/userController');
const router = express.Router();

// signup route
router.post('/signup', signupUser);

router.post('/login', loginUser);

///////////////////////////////////
// get single user
router.get('/:id', getSingleUser);

//get all users
router.get('/', getAllUsers);

// delete user
router.delete('/:id', deleteUser);

//Update user
router.patch('/:id', updateUser);



module.exports = router;
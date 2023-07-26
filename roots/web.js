const express = require('express')
const UserController = require('../controllers/userController');
const router = express.Router();

router.get('/', UserController.home)
router.get('/login', UserController.login)
router.post('/login',UserController.verifyUser)
router.post('/registration', UserController.createUserDoc)
router.get('/registration', UserController.registration)

module.exports = router
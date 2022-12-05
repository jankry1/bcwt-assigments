// 'use strict';
// const express = require('express');
// const router = express.Router();
// const multer = require('multer');
// const userController = require('../controllers/userController');
//
// const upload = multer({dest: 'uploads/'});
//
// router.get('/', userController.getUsers)
//     .get('/:userId', userController.getUser)
//     .post('/', upload.single('user'), userController.createUser)
//     .put('/:userId', userController.modifyUser)
//     .delete('/:userId', userController.deleteUser);
//
// module.exports = router;
'use strict';
const express = require('express');
const router = express.Router()

const userController = require('../controllers/userController');

router.get('/', userController.getUsers);

router.get('/:userId', userController.getUser);

router.post('/', userController.createUser);

router.put('/', (req, res) => {
    res.send('From this endpoint you can edit users.');
});
router.delete('/', (req, res) => {
    res.send('From this endpoint you can delete users.');
});

module.exports = router;
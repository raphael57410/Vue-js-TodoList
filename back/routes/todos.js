const express = require('express');

const router = express.Router();

const verifyJWT = require('../middleware/verifyJWT');

const todosCtrl = require('../controllers/todos');


router.get('/', [verifyJWT], todosCtrl.list);

router.post('/add', todosCtrl.add);

router.put('/edit', todosCtrl.edit);

router.delete('/delete/:id', todosCtrl.delete);


// router.get('/:id', [verifyParams], todosCtrl.getOneItem);

module.exports = router;
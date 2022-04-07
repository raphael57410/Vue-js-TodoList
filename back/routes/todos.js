const express = require('express');

const router = express.Router();

const verifyParams = require('../controllers/todos');

const todosCtrl = require('../controllers/todos');

router.get('/', todosCtrl.list);

router.post('/add', todosCtrl.add);

router.put('/edit', todosCtrl.edit);

router.delete('/delete/:id', todosCtrl.delete);


// router.get('/:id', [verifyParams], todosCtrl.getOneItem);

module.exports = router;
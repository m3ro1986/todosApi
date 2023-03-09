const { Router } = require('express');
const { createUser, updateUser, getTodos } = require('../controllers/user.controller');
const router = Router();

router.post('/api/v1/user', createUser )
router.put('/api/v1/user/:id', updateUser )
router.get('/api/v1/user/:id/todos', getTodos)

module.exports = router;
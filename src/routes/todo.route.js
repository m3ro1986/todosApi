const { Router } = require('express');
const { createTodo, changeStatus, deleteTodo } = require('../controllers/todo.controller');
const router = Router();

router.post('/api/v1/todos', createTodo );
router.put('/api/v1/todos/:id/status', changeStatus)
router.delete('/api/v1/todos/:id', deleteTodo)


module.exports = router;
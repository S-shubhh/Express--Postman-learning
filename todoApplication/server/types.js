const z = require('zod');

const todoVal = z.object({
    title: z.string(),
    description: z.string()
})

const updateTodo = z.object({
    id: z.string(),
})

module.exports = {
   addTodo:  todoVal,
    updateTodo: updateTodo
}


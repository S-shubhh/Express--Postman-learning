const express = require('express');
const { addTodo, updateTodo } = require('./types');
const { todoModel } = require('./db');
const app = express();
app.use(express.json());
const port = 3000;
const cors = require("cors");
app.use(cors());

app.post('/todo', async function(req,res){
    const payload  = req.body;
    const parsePayload  = addTodo.safeParse(payload);
    if(!parsePayload.success){
        res.status(404).json({
            msg : parsePayload.error,
            caution: "you sent the wrong input"
        })
    }
    else {
        const todoCr = await todoModel.create({
            title: payload.title,
            description: payload.description,
            completed: false
        })
        res.json({
            msg : "todo created",
            id: todoCr._id
        })
    }
})
app.get('/todos', async (req,res)=> {
    try{
        const allTodos = await todoModel.find()
        res.json({
            todos : allTodos
        }) 
    }
    catch(error){
        res.json({
            msg : "Error fetching todos",
            error : error.message
        })
    }
    
})

app.post("/completed", async (req,res)=> {
    const payload  = req.body;

    const parsePayload  = updateTodo.safeParse(payload);
    if(!parsePayload.success){
        res.status(404).json({
            msg : parsePayload.error,
            caution: "you sent the wrong input"
        })
    }
    else {
        const updateTodo = await todoModel.updateOne(
            {  _id: req.body.id},{ completed: true }
        )
        res.json({
            msg : "task is completed successfully"
        })

        if(updateTodo.modifiedCount > 0){
            const showTodo = await todoModel.findOne({
                _id: req.body.id
            })
            res.json({
                msg : "here is completed todo",
                todo : showTodo
            })
        }
        
    }
})

app.listen(port, ()=> {
    console.log(`Server connected at  ${port}`);
})

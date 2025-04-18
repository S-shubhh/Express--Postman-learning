import { useState } from "react";

export function CreateTodo(){
    const [title,setTitle] = useState("");
    const [description,setDescription] = useState("");
    const handleClick = async() => {
        const response = await fetch("http://localhost:3000/todo", {
            method :  "POST",
            headers: {
                "Content-Type" : "application/json" 
            },
            body : JSON.stringify({
                title,
                description
            })
        },
    )
        if(response.ok){
            alert("todo successfully added");
        }
        else {
            alert("there might be some error")
        }
    }
    return (
        <div>
           <input type="text" id="inp-1" placeholder="Title " onChange={(e)=> {
                setTitle(e.target.value);
           }} /> <br />
           <input type="text" id="inp-2" onChange={(e)=> {
                setDescription(e.target.value);
            }
           }     placeholder="Description"/> <br />
           <button button onClick={handleClick}>Add Todo</button>
        </div>
)
}

export function Todos({todos}) {
    return (
        <div>
        {
            todos.map((todo) => {
                return <div>
                    <p>{todo.title}</p>
                    <p>{todo.description}</p>
                    <button>{todo.completed == true ? "completed" : "Mark as completed"} </button>
                </div>
            })
        }
        </div>
    )
}
import { useState } from "react";

function TodoForm({ addTodo }) {
    const [task, setTask] = useState('')

    const handleSubmit = (e) => {
        e.preventDefault()
        if (task.trim() === "") return
        addTodo(task)
        setTask('')
    }

    return (
        <>
            <form onSubmit={handleSubmit} className="TodoForm">
                <input 
                    type="text"
                    value={task} 
                    onChange={(e) => setTask(e.target.value)}
                    placeholder="Tambahkan tugas..."
                    className="todo-input"
                />
            </form>
        </>
    )
}



export default TodoForm
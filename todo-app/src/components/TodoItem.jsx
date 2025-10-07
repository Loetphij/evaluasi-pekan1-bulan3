function TodoItem({ todo, toggleTodo, deleteTodo}) {
    return (
        <li className="todo-item">
            <input 
                type="checkbox" 
                checked={todo.completed}
                onChange={() => toggleTodo(todo.id)}
            />
            <div style={{
                textDecoration: todo.completed ? "line-through" : "none",
                marginLeft: "10px",
            }}>
                {todo.task}
            </div>
            <button onClick={() => deleteTodo(todo.id)} className="delete-btn">
                Hapus
            </button>
        </li>
    )
}

export default TodoItem
function TodoFilter({ currentFilter, setFilter }) {
    return (
        <div className="todo-filter">
            {["All", "Active", "Completed"].map(type => (
                <button
                    key={type}
                    onClick={() => setFilter(type)}
                    className={currentFilter === type ? "active" : ""}>
                        {type}
                </button>
            ))}
        </div>
    )
}

export default TodoFilter
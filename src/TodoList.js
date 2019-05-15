import React from "react";
import Todo from "./Todo";

/**
 * @return {null}
 */
function TodoList({todos, onTodoClick}) {
    return todos.length > 0 ? (<div className="ui list">
        {todos.map(todo => (
            <Todo key={todo.id} {...todo} onTodoClick={onTodoClick}/>
        ))}
    </div>) : null
}

export default TodoList;
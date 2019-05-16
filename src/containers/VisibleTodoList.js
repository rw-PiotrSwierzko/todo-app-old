import React, {useContext} from "react";
import {Store} from "../context";
import TodoList from "../components/TodoList";

const getVisibleTodos = (todos, filter) => {
    switch (filter) {
        case  "SHOW_ALL":
            return todos;
        case "SHOW_COMPLETED":
            return todos.filter(t => t.completed);
        case "SHOW_INCOMPLETED":
            return todos.filter(t => !t.completed);
        default:
            return todos;
    }
};

const getFilteredTodos = (todos, searchTerm) => {
    return todos.filter(todo => {
        return todo.text.includes(searchTerm)
    })
};

function VisibleTodoList() {
    const {state} = useContext(Store);

    const visibleTodos = getVisibleTodos(state.todos, state.filter);

    return state.todos.length > 0 ? (
        <TodoList todos={getFilteredTodos(visibleTodos, state.searchTerm)}/>
    ) : null;
}

export default VisibleTodoList;
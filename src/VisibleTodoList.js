import React, {useContext} from "react";
import {Store} from "./context";
import TodoList from "./TodoList";

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
    const {state, dispatch} = useContext(Store);

    function onTodoClick(todoId) {
        const index = state.todos.findIndex(todo => todo.id === todoId);
        const foundTodo = {...state.todos[index]};
        dispatch({type: "SET_EDIT_MODE", payload: true});
        dispatch({type: "SET_TODO", payload: foundTodo});
    }

    const visibleTodos = getVisibleTodos(state.todos, state.filter);

    return state.todos.length > 0 ? (
        <TodoList todos={getFilteredTodos(visibleTodos, state.searchTerm)} onTodoClick={onTodoClick}/>
    ) : null;
}

export default VisibleTodoList;
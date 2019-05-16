import React, {useContext} from 'react';
import {Store} from "../context";

import styles from './Todo.module.css';

function Todo({id, text, completed}) {
    const {state, dispatch} = useContext(Store);

    function onDeleteClick(todoId) {
        dispatch({type: "DELETE_TODO", payload: todoId});
        if (state.todo.id) {
            dispatch({type: "SET_TODO", payload: {id: '', text: '', completed: false}});
            dispatch({type: "SET_EDIT_MODE", payload: false});
        }
    }

    function onEditClick(todoId) {
        const foundTodo = state.todos.find(todo => todo.id === todoId);
        dispatch({type: "SET_TODO", payload: foundTodo});
        dispatch({type: "SET_EDIT_MODE", payload: true});
    }

    function onTodoClick() {
        dispatch({type: "TOGGLE_TODO", payload: id})
    }

    return (
        <div className={`${styles.todo} item`}>
            <i className={`large circle outline icon ${completed ? "check teal" : ""}`} onClick={() => onTodoClick(id)}/>
            <span className={`${styles.todoText} item ${completed ? styles.completed : ""}`}
                  onClick={() => onTodoClick(id)}>{text}</span>
            <div className="right floated content">
                <div className="circular ui icon button" onClick={() => onEditClick(id)}>
                    <i className="pencil alternate icon"/>
                </div>
                <div className="circular ui icon button" onClick={() => onDeleteClick(id)}>
                    <i className="trash icon"/>
                </div>
            </div>
        </div>
    );
}

export default Todo;
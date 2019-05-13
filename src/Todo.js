import React, {useContext, useState} from 'react';
import {Store} from "./context";

function Todo({todo, onTodoClick}) {
    const [hover, setHover] = useState(false);

    const {dispatch} = useContext(Store);

    function handleHover() {
        setHover(!hover);
    }

    function handleDeleteClick() {
        dispatch({type: "DELETE_TODO", payload: todo.id})
    }

    return (
        <div className="item" onMouseEnter={handleHover} onMouseLeave={handleHover}>
            <i className={`circle outline icon ${todo.completed ? "check" : ""}`} onClick={() => {
                dispatch({type: "TOGGLE_TODO", payload: todo.id})
            }}/>
            <div onClick={() => onTodoClick(todo.id)}>{todo.text}</div>
            {hover ? <i className="trash icon" onClick={handleDeleteClick}/> : null}
        </div>
    );
}

export default Todo;
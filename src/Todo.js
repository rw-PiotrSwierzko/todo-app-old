import React, {useContext, useState} from 'react';
import {Store} from "./context";

function Todo({id, text, completed, onTodoClick}) {
    const [hover, setHover] = useState(false);

    const {state, dispatch} = useContext(Store);

    function handleHover() {
        setHover(!hover);
    }

    function handleDeleteClick() {
        dispatch({type: "DELETE_TODO", payload: id});
        if (state.todo.id) {
            dispatch({type: "SET_TODO", payload: {id: '', text: '', completed: false}});
            dispatch({type: "SET_EDIT_MODE", payload: false});
        }
    }

    return (
        <div className="item" onMouseEnter={handleHover} onMouseLeave={handleHover}>
            <div className="middle aligned content ">
                <i className={`circle outline icon ${completed ? "check teal" : ""}`} onClick={() => {
                    dispatch({type: "TOGGLE_TODO", payload: id})
                }}/>
                <span style={{textDecoration: `${completed ? "line-through" : ""}`}} onClick={() => onTodoClick(id)}>{text}</span>
                <div className="right floated content">
                    {hover ? <i className="trash icon" onClick={handleDeleteClick}/> : null}
                </div>
            </div>
        </div>
    );
}

export default Todo;
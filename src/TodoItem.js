import React, {useContext, useState} from 'react';
import {Store} from "./context";

function TodoItem(props) {
    const [hover, setHover] = useState(false);

    const {dispatch} = useContext(Store);

    function handleHover() {
        setHover(!hover);
    }

    function handleDeleteClick() {
        dispatch({type: "DELETE_TODO", payload: props.id})
    }

    function handleEditClick() {
        props.onEdit(props.id)
    }

    return (
        <div className="item" onMouseEnter={handleHover} onMouseLeave={handleHover}>
            <div onClick={handleEditClick}>{props.text}</div>
            {hover ? <i className="trash icon" onClick={handleDeleteClick}/> : null}
        </div>
    );
}

export default TodoItem;
import React, {useState} from 'react';

function TodoItem(props) {
    const [hover, setHover] = useState(false);

    function handleHover() {
        setHover(!hover);
    }

    function handleDeleteClick() {
        props.onDelete(props.id)
    }

    function handleEditClick() {
        props.onEdit(props.id)
    }

    return (
        <div
            className="item"
            onMouseEnter={handleHover}
            onMouseLeave={handleHover}
            onClick={handleEditClick}
        >
            {props.text}
            {hover ? <i className="trash icon" onClick={handleDeleteClick}/> : null}
        </div>
    );
}

export default TodoItem;
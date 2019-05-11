import React, {useState} from 'react';

function TodoItem(props) {
    const [hover, setHover] = useState(false);

    function handleHover() {
        setHover(!hover);
    }

    function handleClick() {
        props.onDelete(props.id)
    }

    return (
        <div
            className="item"
            onMouseEnter={handleHover}
            onMouseLeave={handleHover}
        >
            {props.text}
            {hover ? <i className="trash icon" onClick={handleClick}/> : null}
        </div>
    );
}

export default TodoItem;
import React from 'react';

function NoTodo({onButtonClick}) {
    return <div className="h-100 ui middle aligned center aligned grid">
        <div className="column">
            <h1 className="ui header">No todo yet</h1>
            <div className="sub header mb-1">Add todo to get started</div>
            <button className="ui big teal button" onClick={onButtonClick}>New todo</button>
        </div>
    </div>
}

export default NoTodo;
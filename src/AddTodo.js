import React, {useContext} from 'react';
import uuid from "uuid";
import {Store} from "./context";

function AddTodo() {
    const {state, dispatch} = useContext(Store);

    function handleSubmit(e) {
        e.preventDefault();
        if (!state.todo.text.length) {
            return;
        }
        if (state.editMode) {
            dispatch({type: "EDIT_TODO", payload: {id: state.todo.id, text: state.todo.text}});
            dispatch({type: "SET_EDIT_MODE", payload: false});
        } else {
            const newTodo = {
                id: uuid.v4(),
                text: state.todo.text,
                completed: false
            };
            dispatch({type: "ADD_TODO", payload: newTodo})
        }
        dispatch({type: "SET_TODO", payload: {id: '', text: '', completed: false}})
    }

    function handleChange(e) {
        const text = e.target.value;
        dispatch({type: "SET_TODO", payload: {...state.todo, text}});
    }

    return <form className="ui form" onSubmit={handleSubmit}>
        <div className="ui action input">
            <input type="text" placeholder="New todo" value={state.todo.text} onChange={handleChange}/>
            <button className="ui button" type="submit">{state.editMode ? "Save" : "Add"}</button>
        </div>
    </form>
}

export default AddTodo;
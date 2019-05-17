import React, {useContext} from 'react';
import uuid from "uuid";
import {Store} from "../store/context";
import {addTodo, editTodo, setEditMode, setTodo} from "../actions/actions";

function AddTodo() {
    const {state, dispatch} = useContext(Store);

    function handleSubmit(e) {
        e.preventDefault();
        if (!state.todo.text.length) {
            return;
        }
        if (state.editMode) {
            dispatch(editTodo({id: state.todo.id, text: state.todo.text}));
            dispatch(setEditMode(false));
        } else {
            const newTodo = {
                id: uuid.v4(),
                text: state.todo.text,
                completed: false
            };
            dispatch(addTodo(newTodo))
        }
        dispatch(setTodo({id: '', text: '', completed: false}));
    }

    function handleChange(e) {
        const text = e.target.value;
        dispatch(setTodo({...state.todo, text}));
    }

    return <form className="ui form" onSubmit={handleSubmit}>
        <div className="ui large action input">
            <input type="text" placeholder="New todo" value={state.todo.text} onChange={handleChange}/>
            <button className="ui teal button" type="submit">{state.editMode ? "Save" : "Add"}</button>
        </div>
    </form>
}

export default AddTodo;
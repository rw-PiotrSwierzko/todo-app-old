import React, {useContext, useReducer} from "react";
import reducer from "./reducer";
import {usePersistedContext, usePersistedReducer} from "./localStorage";

const initialState = {
    todos: [],
    todo: {
        id: '',
        text: '',
        completed: false
    },
    searchTerm: ''
};

const Store = React.createContext(initialState);

function TodoProvider(props) {
    const store = usePersistedContext(useContext(Store));
    const [state, dispatch] = usePersistedReducer(useReducer(reducer, store));

    return (
        <Store.Provider value={{state, dispatch}}>
            {props.children}
        </Store.Provider>
    );
}

export {Store, TodoProvider};


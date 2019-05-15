import React, {useContext} from "react";
import {Store} from "./context";

function FilterLink({filter, children}) {
    const {state, dispatch} = useContext(Store);

    return <a href="#" className={`item ${state.filter === filter ? "active" : ""}`} onClick={e => {
        e.preventDefault();
        dispatch({
            type: "SET_VISIBILITY_FILTER",
            payload: filter
        })
    }}>
        {children}
    </a>
}

export default FilterLink;
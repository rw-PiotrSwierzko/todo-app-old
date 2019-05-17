import React, {useContext} from "react";
import {Store} from "../store/context";
import {setVisibilityFilter} from "../actions/actions";

function FilterLink({filter, children}) {
    const {state, dispatch} = useContext(Store);

    return <a href="#" className={`item ${state.filter === filter ? "active" : ""}`} onClick={e => {
        e.preventDefault();
        dispatch(setVisibilityFilter(filter))
    }}>
        {children}
    </a>
}

export default FilterLink;
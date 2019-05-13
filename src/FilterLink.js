import React, {useContext} from "react";
import {Store} from "./context";

function FilterLink({filter, children}) {
    const {dispatch} = useContext(Store);

    return <a href="#" onClick={e => {
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
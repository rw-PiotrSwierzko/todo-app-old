import React, {useContext} from "react";
import {Store} from "./context";

function SearchBar() {
    const {state, dispatch} = useContext(Store);

    return <div className="ui transparent icon input">
        <input type="text" placeholder="Search..." value={state.searchTerm} onChange={(e) => {
            dispatch({type: "SET_SEARCH_TERM", payload: e.target.value})
        }}/>
        <i className="search icon"/>
    </div>
}

export default SearchBar;



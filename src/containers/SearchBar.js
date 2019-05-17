import React, {useContext} from "react";
import {Store} from "../store/context";
import {setSearchTerm} from "../actions/actions";

function SearchBar() {
    const {state, dispatch} = useContext(Store);

    return <div className="ui transparent inverted icon input">
        <input type="text" placeholder="Search..." value={state.searchTerm} onChange={(e) => {
            dispatch(setSearchTerm(e.target.value))
        }}/>
        <i className="search inverted icon"/>
    </div>
}

export default SearchBar;



import React from "react";
import FilterLink from "./FilterLink";

function Filter() {
    return <p>
        Show:
        <FilterLink filter="SHOW_ALL">All</FilterLink>
        <FilterLink filter="SHOW_INCOMPLETED">Incomplete</FilterLink>
        <FilterLink filter="SHOW_COMPLETED">Completed</FilterLink>
    </p>
}

export default Filter;
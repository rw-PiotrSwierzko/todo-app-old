import {useEffect} from "react";

export const usePersistedContext = (context) => {
    const serializedContext = localStorage.getItem("state");
    return serializedContext ? JSON.parse(serializedContext) : context;
};

export const usePersistedReducer = ([state, dispatch]) => {
    useEffect(() => localStorage.setItem("state", JSON.stringify(state)), [state]);
    return [state, dispatch];
};
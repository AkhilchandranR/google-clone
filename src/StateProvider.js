import React,{ createContext,useContext,useReducer } from "react";
//prepare data layer
export const StateContext = createContext();

//higher order component children is app pass reducer and initialstate
export const StateProvider = ({ reducer,initialState,children }) => (
    <StateContext.Provider value={useReducer(reducer,initialState)}>
        {children}
    </StateContext.Provider>
);

//hook allows to pull info from data layer useStateValue
export const useStateValue = () => useContext(StateContext);

//initial state and reducer will be in reducer.js
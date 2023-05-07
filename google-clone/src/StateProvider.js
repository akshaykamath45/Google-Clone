import React, { createContext, useContext, useReducer } from "react";

// Preparing the data layer
export const StateContext = createContext();

export const StateProvider = ({ reducer, initialState, children }) => {
  const stateValue = useReducer(reducer, initialState);

  return (
    <StateContext.Provider value={stateValue}>{children}</StateContext.Provider>
  );
};

// Hook which allows us to pull information from the data layer
export const useStateValue = () => useContext(StateContext);

// Custom hook which allows us to pull information from the data layer
// export const useStateValue = () => {
//   const [state] = useContext(StateContext);
//   return state;
// };
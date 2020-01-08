import React, { useReducer } from "react";
const AppStateContext = React.createContext();
const AppDispatchContext = React.createContext();

const AppProvider = props => {
    const { reducer, initialState } = props;
    const [state, dispatch] = useReducer(reducer, initialState);
    return (
        <AppStateContext.Provider value={state}>
            <AppDispatchContext.Provider value={dispatch}>
                {props.children}
            </AppDispatchContext.Provider>
        </AppStateContext.Provider>
    );
};

const useAppState = () => {
    const context = React.useContext(AppStateContext);
    return context;
};

const useAppDispatch = () => {
    const context = React.useContext(AppDispatchContext);
    return context;
};

export { AppProvider, useAppState, useAppDispatch };

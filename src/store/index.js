import React from "react";

export const initialState = { CurrentStay: 0 };

export const reducer = (state, action) => {
    switch (action.type) {
        case "reset":
            return initialState;
        case 'setCurrent':
            return {CurrentStay:action.customId};
        default:
            return state;
    }
};

export const Context = React.createContext();

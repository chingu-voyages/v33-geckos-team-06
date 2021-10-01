import React, { useState, createContext } from 'react';

export const GlobalContext = createContext();

export const GlobalProvider = (props) => {
    const state = useState(
        {
            gameDescriptionModal: {
                show: false
            }, 
            filteredGames:[]

        }
    );

    return (
        <GlobalContext.Provider value={state}>
            {props.children}
        </GlobalContext.Provider>
    );
}
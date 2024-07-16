import { useState, useContext, createContext } from "react";

const AppContext = createContext();


// creo un provider per il context (che contiene il valore del context stesso e il children )
const AppProvider = ({ children }) => {

    
    return <AppContext.Provider value="hello">
        {children}
    </AppContext.Provider>;
}

// creo un custom hook per utilizzare il context
const useGlobalContext = () => {
    return useContext(AppContext);
}


export { AppProvider, useGlobalContext };
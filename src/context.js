import { useState, useContext, createContext } from "react";

const AppContext = createContext();

// Creo un provider per il context (che contiene il valore del context stesso e il children)
const AppProvider = ({ children }) => {
    const [scrollPosition, setScrollPosition] = useState(0);

    const getScrollPosition = (value) => {
        setScrollPosition(value);
    };

    const deleteScrollPosition = () => {
        setScrollPosition(0);
    };

    // Devo passare un singolo oggetto come value
    const contextValue = {
        scrollPosition,
        getScrollPosition,
        deleteScrollPosition
    };

    return <AppContext.Provider value={contextValue}>
        {children}
    </AppContext.Provider>;
};

// Creo un custom hook per utilizzare il context
const useGlobalContext = () => {
    return useContext(AppContext);
};

export { AppProvider, useGlobalContext };

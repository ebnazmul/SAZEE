import { createContext } from "react";

const Contexts = createContext(null)

const Context = ({children}) => {
    const value = {

    }
    
    return <Contexts.Provider value={value}>{children}</Contexts.Provider>
};

export default Context;
import { createContext, useState } from "react";

export const AppContext = createContext()

export const AppProvider = ({ children }) => {

    const [ShoppingBag, setShoppingBag] = useState([])

    return <AppContext.Provider value={{
        ShoppingBag,
        setShoppingBag,
    }}>
        {children}
    </AppContext.Provider>
}

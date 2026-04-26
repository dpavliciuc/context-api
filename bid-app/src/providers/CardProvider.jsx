import { createContext, useContext, useState } from "react"

const CardContext = createContext();

const CardProvider = ({children}) => {
    
    const [bidders, setBidders] = useState([]);

    return(
        <CardContext.Provider value={{bidders, setBidders}}>
        {children}
        </CardContext.Provider>
    )
}

export const useCardContext = () => useContext(CardContext);

export default CardProvider;
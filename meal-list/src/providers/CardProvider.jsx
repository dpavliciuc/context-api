import { createContext, useContext, useState } from "react";


const CardContext = createContext() 


const CardProvider = ({children}) => {

    const [meals, setMeals] = useState([])

    return (
    <CardContext.Provider value={{meals, setMeals}}>
        {children}
    </CardContext.Provider>
)
}

export const useCardContext = () => useContext(CardContext)

export default CardProvider;
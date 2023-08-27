import { createContext, useContext, useState } from "react";

export const Contexto=createContext()

export const Datos=({children})=>{
    const [cards, setCards] = useState([]);

const addCard = (newCard) => {
    setCards([...cards, newCard]);
};
const contextValues = {
    cards,
    addCard,
    setCards,
};
    return(
        <Contexto.Provider value={contextValues}>
            {children}
        </Contexto.Provider>
    )
}
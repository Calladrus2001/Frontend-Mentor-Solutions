import { useState, createContext } from "react";

const GameContext = createContext();
const GameContextProvider = ({children}) => {
    let [game, setGame] = useState({});
    return (
        <GameContext.Provider value={{game, setGame}}>
            {children}
        </GameContext.Provider>
    );
};

export {GameContext, GameContextProvider}
import React, {useState} from 'react';

const CartContext = React.createContext();
const CartContextProvider = ({children}) => {
    let [cart, setCart] = useState(null);
    return (
        <CartContext.Provider value={{cart, setCart}}>
            {children}
        </CartContext.Provider>
    );
};

export {CartContext, CartContextProvider};
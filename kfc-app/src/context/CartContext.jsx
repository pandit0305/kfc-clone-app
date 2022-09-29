import React from 'react';
import { useState } from 'react';

export const CartContext = React.createContext(null);

export const CartContextProvider = ({children})=>{
    const [data, setData] = useState([])

    const getData = (element)=>{
        setData([...data, element])
    }
    console.log(data)
    const value = {getData, data, setData}
    return (
        <CartContext.Provider value={value}>
            {children}
        </CartContext.Provider>
    )
}
import React, { createContext, useState } from "react";

export const AddContext = createContext();

export function AddCartContextProvider({ children }) {
  const [carts, setCart] = useState([]);

  function AddToCart(item) {
    console.log(carts);
    if (carts.length != 0) {
      carts.map((e) =>
        e.id === item.id ? setCart([...carts]) : setCart([...carts, item])
      );
    } else {
      setCart([...carts, item]);
    }
  }
  console.log(carts);
  return (
    <AddContext.Provider value={{ carts, setCart, AddToCart }}>
      {children}
    </AddContext.Provider>
  );
}

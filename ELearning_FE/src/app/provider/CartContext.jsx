import { cartService } from "@/features/cart/services/cart.service";
import { createContext, useEffect, useReducer, useState } from "react";

export const CartContext = createContext();

export function CartProvider({ children }) {
    const initialState = {
        items: JSON.parse(localStorage.getItem("cart")) || [],
    };

    const cartReducer = cartService.cartReducer;
    const [state, dispatch] = useReducer(cartReducer, initialState);

    useEffect(() => {
        localStorage.setItem("cart", JSON.stringify(state.items));
    }, [state.items]);

    return (
        <CartContext.Provider value={{ state, dispatch }}>
            {children}
        </CartContext.Provider>
    );
}

import { ADD_TO_CART, EMPTY_CART, REMOVE_FROM_CART } from "./constant";


export const addToCart = (data) => {
    console.warn("addToCart action is called", data)
    return {
        type: ADD_TO_CART,
        data: data
    };
}

export const removeFromCart = (data) => {
    console.warn("removeFromCart action is called", data)
    return {
        type: REMOVE_FROM_CART,
        data: data
    };
}

export const emptyCart = () => {
    console.warn("emptyCart action is called")
    return {
        type: EMPTY_CART,
    };
}
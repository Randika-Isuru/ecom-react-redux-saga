import { ADD_TO_CART, EMPTY_CART, REMOVE_FROM_CART } from "./constant";


export const cartData = (data=[], action) =>{
    console.warn(" cartData reducer called", action)
    switch(action.type){
        case ADD_TO_CART:
            console.warn("ADD TO CART condition", action)
            return [action.data, ...data];
        case REMOVE_FROM_CART:
            console.warn("Remove from CART condition", action)
            data.length = data.length ? data.length - 1 : []
            return [...data];
        case EMPTY_CART:
                console.warn("Empty CART condition", action)
                data = [];
                return [...data];
        default:
            return data
    }
}
import { atom, map } from 'nanostores';

// export const isOpen = atom(false);

export const isCartOpen = atom(false);
export const isSolution = atom(false);
export const isPrice = atom(false);

export const myProducts = map({})
export function addProduct({id,...rest}){
    myProducts.setKey(id,{id,...rest});
}

export function getUser(id){
    const user = myProducts.get()[id]
    return user
}
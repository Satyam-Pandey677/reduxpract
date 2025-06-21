import {createSlice, nanoid} from "@reduxjs/toolkit"

const initialState = {
    items: [],
}

export const shoppingCartSlice = createSlice({
    name:"saiyan",
    initialState,
    reducers:{
        addItems :(status, action) => {
            const cart = {
                id : nanoid(),
                item : action.payload
            }   
            status.items.push(cart)
            console.log(status.items)         
        },
        removeItems : (status, action) => {
            status.items = status.items.filter((item) => item.id !== action.payload)
        }
    }
})

export const {addItems, removeItems} = shoppingCartSlice.actions

export default shoppingCartSlice.reducer
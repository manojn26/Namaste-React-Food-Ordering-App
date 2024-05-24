import { configureStore } from "@reduxjs/toolkit";
import cartSlice from "./cartSlice"; // cartSlice.redcucers

const store = configureStore({
  reducer: {
    cart: cartSlice,
  },
});

export default store;

/*
    Careate Store
        - configureStore() from redux-tool-kit
    Provide my store to whole app
        - <Provide store={store}> imported from react redux
    Slice
        - createSlice() imports from redux-tool-kit
        - createSlice({
            name : ""
            initialState:
            reducers:{
                addItem : (state,action) =>{

                }
                
            }
        })

    export const {addItem} = cartSlice.actions
    export default cartSlice.reducer

    Put that Slice into the store.
        - {
            reducer :{
                cart : cartSlice,
            }
        }

*/

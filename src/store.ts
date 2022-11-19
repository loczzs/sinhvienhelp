import { configureStore } from "@reduxjs/toolkit";
import { type } from "os";
import ListCtySlice from "./modules/Home/slices/ListCtySlice";
import listSearchslice from "./modules/Home/slices/searchSlice";
const store = configureStore({
    reducer:{
        lisCty: ListCtySlice,
        search: listSearchslice,
    }
})
export type RootState = ReturnType<typeof store.getState>
export type AppDispatch = typeof store.dispatch
export default store

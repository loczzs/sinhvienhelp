import { configureStore } from "@reduxjs/toolkit";

import ListCtySlice from "./modules/Home/slices/ListCtySlice";
import listSearchslice from "./modules/Home/slices/searchSlice";
import MainSlices from "./components/MainSlices/MainSlices";
import listslice from "./modules/Listcity/slices/listslice";
const store = configureStore({
    reducer:{
        lisCty: ListCtySlice,
        search: listSearchslice,
        main : MainSlices,
        filter:listslice
    }
})
export type RootState = ReturnType<typeof store.getState>
export type AppDispatch = typeof store.dispatch
export default store

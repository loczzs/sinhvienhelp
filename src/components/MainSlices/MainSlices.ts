import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";

const initialState ={
    radius: false
}
const MainSlices = createSlice({
    name:"home/listCty",
    initialState,
    reducers:{
        showModal:(state, { payload }) => {
            state.radius = true
          },
          closeModal:(state, { payload }) => {
            state.radius = false
            console.log(state.radius);
            
          },
    },
   
    
})
export const { showModal,closeModal } = MainSlices.actions;
export default MainSlices.reducer

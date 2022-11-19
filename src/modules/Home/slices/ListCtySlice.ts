import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import ctyAPI from "../../../apis/ctyAPI";
import { Cty } from "../../../interface/data";


interface CtyState {
  listCty: Cty[];
  isLoading: boolean;
  error?: string;
  cart:[]
  
}
const initialState: CtyState = {
  listCty: [],
  isLoading: false,
  error: "",
  cart:[]
  
};
export const getList = createAsyncThunk(
    "home/listCty/list",
    async (_, { rejectWithValue }) => {
      try {
        const data = await ctyAPI.getCty();
        // console.log(data.content)
        return data 
      } catch (error) {
        return rejectWithValue(error );
      }
    }
  );
  export const upCheck = createAsyncThunk(
    "home/listCty/upCheck",
    async (payload:Cty, { rejectWithValue,dispatch }) => {
      
      
      try {
        const data = await ctyAPI.upCheckApi(payload)
        // const data = await ctyAPI.getCty();
        // console.log(data.content)
        dispatch(getList())
        // return data 
      } catch (error) {
        return rejectWithValue(error );
      }
    }

  )
const listCtySlice = createSlice({
    name:"home/listCty",
    initialState,
    reducers:{},
    extraReducers(builder) {
        builder.addCase(getList.pending, (state, { payload }) => {
          state.isLoading = true;
        });
        builder.addCase(getList.fulfilled, (state, { payload }) => {
          state.listCty = payload;
          // console.log(payload)
          state.isLoading = false;
        });
        builder.addCase(getList.rejected, (state, { payload }) => {
          state.error = payload as string;
          state.isLoading = false;
        });
      },
    
})
export default listCtySlice.reducer

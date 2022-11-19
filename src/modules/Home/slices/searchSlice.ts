import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import ctyAPI from "../../../apis/ctyAPI";
import { Cty } from "../../../interface/data";
interface CtyState {
   listSearch: Cty[] 
    isLoading: boolean;
    error?: string;
    result: Cty[] | string
    
  }
  const initialState: CtyState = {
   listSearch: [],
    isLoading: false,
    error: "",
    result :""
    
    
  };
  export const searchList = createAsyncThunk(
    "home/carousel/search",
    async (payload:string, { rejectWithValue }) => {
        try {
          const data = await ctyAPI.SearchList(payload);
          // console.log(data.content)
          return data 
        } catch (error)  {
          return rejectWithValue(error );
        }
      }
    );

    const listSearchslice = createSlice({
        name:"home/carousel",
        initialState,
        reducers:{},
        extraReducers(builder) {
            builder.addCase(searchList.pending, (state, { payload }) => {
              state.isLoading = true;
            });
            builder.addCase(searchList.fulfilled, (state, { payload }) => {
              state.listSearch = payload;
              state.result = payload;
              state.isLoading = false;
            });
            builder.addCase(searchList.rejected, (state, { payload }) => {
              state.error = payload as string;
              state.isLoading = false;
            });
          },
        
    })
    export default listSearchslice.reducer


















  
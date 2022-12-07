import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import ctyAPI from "../../../apis/ctyAPI";
import { Cty } from "../../../interface/data";
interface CtyState {
   listSearch: Cty[] 
    isLoading: boolean;
    error?: string;
    result: Cty[] | string,
    keyz:string
    
  }
  let initialState: CtyState = {
   listSearch: [],
    isLoading: false,
    error: "",
    result :"",
    keyz:""
   
    
    
  };
  
  
  
  export const searchList = createAsyncThunk(
    "home/carousel/search",
    async (payload:string, { rejectWithValue }) => {
        try {
          const data = await ctyAPI.SearchList(payload);
          // console.log(data.content)
          console.log(initialState.keyz);
          return data 
        } catch (error)  {
          return rejectWithValue(error);
        }
      }
    );
    export const upCheck = createAsyncThunk(
      "home/seacrh/upCheck",
      async (payload:Cty, { rejectWithValue,dispatch }) => {
        
        
        try {
          const data = await ctyAPI.upCheckApi(payload)
          console.log(initialState.keyz);
          
          dispatch(searchList(initialState.keyz))
          
          return data 
        } catch (error) {
          return rejectWithValue(error );
        }
      }
  
    )

    const listSearchslice = createSlice({
        name:"home/carousel",
        initialState,
        reducers:{
          keySearch:(state, { payload }) => {
            state.keyz = payload
            initialState = {...initialState,keyz :payload}
          },
        },
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
    export const { keySearch } = listSearchslice.actions;
    
    export default listSearchslice.reducer


















  
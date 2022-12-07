import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import ctyAPI from "../../../apis/ctyAPI";
import { Cty } from "../../../interface/data";
interface CtyState {
    listCty: Cty[];
    isLoading: boolean;
    error?: string;
    cart:[],
    filter:string
    
  }
  let initialState: CtyState = {
    listCty: [],
    isLoading: false,
    error: "",
    cart:[],
    filter:""
    
  };
  export const getfilterList = createAsyncThunk(
    "listcity/listCtyz/list",
    async (payload:string , { rejectWithValue }) => {
      try {
        const data = await ctyAPI.getCtyfilter(payload);
        initialState = {...initialState,filter :payload}
        return data 
      } catch (error) {
        return rejectWithValue(error );
      }
    }
  );
  export const upCheck = createAsyncThunk(
    "list/listslice/upCheck",
    async (payload:Cty, { rejectWithValue,dispatch }) => {
      
      
      try {
        const data = await ctyAPI.upCheckApi(payload)
        
        
        dispatch(getfilterList(initialState.filter))
        
        return data 
      } catch (error) {
        return rejectWithValue(error );
      }
    }

  )
  const listSlice = createSlice({
    name:"list/listCty",
    initialState,
    reducers:{
      keyFilter:(state, { payload }) => {
        state.filter = payload;
        initialState = {...initialState,filter :payload}
      },
    },
    extraReducers(builder) {
        builder.addCase(getfilterList.pending, (state, { payload }) => {
          state.isLoading = true;
        });
        builder.addCase(getfilterList.fulfilled, (state, { payload }) => {
          state.listCty = payload;
          // console.log(payload)
          state.isLoading = false;
        });
        builder.addCase(getfilterList.rejected, (state, { payload }) => {
          state.error = payload as string;
          state.isLoading = false;
        });
      },
    
})
export const { keyFilter } = listSlice.actions;
export default listSlice.reducer
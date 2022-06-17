import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import { data } from "../fetchDataAPI/testData";

export const fetchTable = createAsyncThunk(
    "dataTable/fetchTable",
    async(_, thunkAPI) => {
        try{
            const response = await fetch('../fetchDataAPI/testData.txt');
            const data = await response.json();
            console.log(data);
            return data;
        }
        catch(e) {
            return thunkAPI.rejectWithValue("Failed Data")
        }
    }
)

export const tableSlice = createSlice({
    name: "dataTable",
    initialState: {
        data: []
    },
    reducers: {},
    extraReducers: {
        [fetchTable.fulfilled]: (state, action) => {
            state.data.push(action.payload)
        }
    }
})

export const tableData = tableSlice.reducer;
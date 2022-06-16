import { configureStore, combineReducers } from "@reduxjs/toolkit";
import { tableData } from "../slice/dataSlice";

const reducer = combineReducers({tableData})

export const store = configureStore({
    reducer: reducer,
})

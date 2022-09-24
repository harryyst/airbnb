import { configureStore } from "@reduxjs/toolkit";
import homeSlice from "./feature/home";
import entryReducer from './feature//entry'
const store = configureStore({
    reducer:{
        home:homeSlice,
        entry:entryReducer
    }
})

export default store
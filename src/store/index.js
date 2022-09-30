import { configureStore } from "@reduxjs/toolkit";
import homeSlice from "./feature/home";
import entryReducer from './feature//entry'
import detailSlice from "./feature/detail";
import mainSlice from './main'
const store = configureStore({
    reducer:{
        home:homeSlice,
        entry:entryReducer,
        detail:detailSlice,
        main:mainSlice
    }
})

export default store
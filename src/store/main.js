import { createSlice } from "@reduxjs/toolkit";

const mainSlice = createSlice({
    name:"name",
    initialState:{
        headerConfig:{
            isFix:true,
            isAlpha:true,
        }
        
    },
    reducers:{
        changeHeaderConfigAction(state, { payload }) {
            state.headerConfig = payload
          }
    }
})

export const {changeHeaderConfigAction}=mainSlice.actions

export default mainSlice.reducer
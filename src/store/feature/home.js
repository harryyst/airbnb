import { getHomeGoodPriceData ,getHomeHighScoreData,getHomeDiscountData,getHomeHotRecommendData} from "@/services/modules/home";
import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";

export const fetchHomeGoodPriceData = createAsyncThunk('fetch/home/goodPrice', async()=>{
    const res = await getHomeGoodPriceData()
    console.log(res);
    return res
})

export const fetchHomeData = createAsyncThunk('fetch/homeData',(payload,{dispatch})=>{
    getHomeGoodPriceData().then(res=>{
        dispatch(changeGoodPriceInfoAction(res))
    })
    getHomeHighScoreData().then(res1=>{
        dispatch(changeHighScoreInfoAction(res1))
    })
    getHomeDiscountData().then(res2=>{
        dispatch(changeDiscountInfoAction(res2))
    })
    getHomeHotRecommendData().then(res3=>{
        dispatch(changeHotRecommendInfoAction(res3))

    })
})

const homeSlice = createSlice({
    name:'home',
    initialState:{
        goodPriceData:{},
        highScoreData:{},
        discountData:{},
        hotRecommendData:{}
    },
    reducers:{
        changeGoodPriceInfoAction(state,{payload}){
            state.goodPriceData=payload
        },
        changeHighScoreInfoAction(state,{payload}){
            state.highScoreData=payload
        },
        changeDiscountInfoAction(state,{payload}){
            state.discountData=payload
        },
        changeHotRecommendInfoAction(state,{payload}){
            state.hotRecommendData=payload
        }
    },
    extraReducers:{
        [fetchHomeGoodPriceData.fulfilled](state,{payload}){
            state.goodPriceData=payload
        }
    }
})

export const {changeGoodPriceInfoAction,changeHighScoreInfoAction,changeDiscountInfoAction,changeHotRecommendInfoAction} = homeSlice.actions
export default homeSlice.reducer
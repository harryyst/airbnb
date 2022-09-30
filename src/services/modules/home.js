import stRequest from ".."

export const getHomeGoodPriceData = ()=>{
    return stRequest.get({url:'/home/goodprice'})
}

export const getHomeHighScoreData = ()=>{
    return stRequest.get({url:"/home/highscore"})
}

export const getHomeDiscountData = ()=>{
    return stRequest.get({url:"/home/discount"})
}

export const getHomeHotRecommendData = ()=>{
    return stRequest.get({url:"/home/hotrecommenddest"})
}
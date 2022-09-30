// import stRequest from '@/services'
import { fetchHomeData } from '@/store/feature/home'
import React, { memo } from 'react'
import { useDispatch } from 'react-redux'
import { HomeWrapper } from './style'
import { useEffect } from 'react'
import { useSelector } from 'react-redux'
import HomeSectionV1 from './c-cpns/home-section-v1'
import HomeSectionV2 from './c-cpns/home-section-v2'
import { IsEmptyO } from '@/utils'
import HomeBanner from './c-cpns/home-banner'
import { changeHeaderConfigAction } from '@/store/main'

const Home = memo(() => {
    // const [goodPriceData,setGoodPriceData] = useState([])
    const dispatch = useDispatch()
    useEffect(()=>{
        dispatch(fetchHomeData())
        dispatch(changeHeaderConfigAction({ isFix: true, isAlpha: true }))
    },[dispatch])
    const {goodPriceInfo,highScoreInfo,discountInfo,hotRecommendInfo} = useSelector((state)=>({
        goodPriceInfo:state.home.goodPriceData,
        highScoreInfo:state.home.highScoreData,
        discountInfo:state.home.discountData,
        hotRecommendInfo:state.home.hotRecommendData
    }))
  return (
    <HomeWrapper>
        <HomeBanner/>
        <div className="content">
          {IsEmptyO(discountInfo)&&<HomeSectionV2 info={discountInfo}/>}
          {IsEmptyO(hotRecommendInfo)&&<HomeSectionV2 info={hotRecommendInfo}/>}
          <HomeSectionV1 info={goodPriceInfo}/>
          <HomeSectionV1 info={highScoreInfo}/>
        </div>
        
    </HomeWrapper>
  )
})

export default Home
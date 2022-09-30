import PictureBrowser from '@/base-ui/picture-browser'
import React, { memo, useState } from 'react'
import { shallowEqual, useSelector } from 'react-redux'
import { PictureWrapper } from './style'

const DetailPicture = memo(() => {

    const { detailInfo } = useSelector((state) => ({
        detailInfo: state.detail.detailInfo
      }), shallowEqual)
    const [showShadow,setShadow] = useState(false)
    console.log(detailInfo)
    function handleCloseClick(){
        setShadow(false)
    }
  return (
    <PictureWrapper>
        <div className="pictures">
            <div className="left">
                <div className="item" onClick={e=>setShadow(true)}>
                        <img src={detailInfo.picture_url} alt="" />
                        <div className='cover'></div>
                </div>
            </div>
            <div className='right'>
                {
                    detailInfo.picture_urls.slice(1,5).map(item=>{
                        return (
                            <div className="item" key={item} onClick={e=>setShadow(true)}>
                                <img src={item} alt="" />
                                <div className='cover'></div>
                            </div>
                        )
                    })
                }
            </div>
        </div>
        <div className='show-btn' onClick={e=>setShadow(true)}>查看照片</div>
        {showShadow&&<PictureBrowser imgList={detailInfo.picture_urls} closeClick={handleCloseClick}/>}
    </PictureWrapper>
  )
})


export default DetailPicture
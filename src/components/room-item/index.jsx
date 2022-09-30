import React, { memo, useRef, useState } from 'react'
import { RoomWrapper } from './style'
import Rating from '@mui/material/Rating';
import { Carousel } from 'antd';
import IconArrowLeft from '@/assests/svg/icon-arrow-left';
import IconArrowRight from '@/assests/svg/icon-arrow-right';
import Indicator from '@/base-ui/indicator';
import classNames from 'classnames';

const RoomItem = memo((props) => {
  const {itemWidth="25%"}=props
  const [curIndex,setIndex]=useState(0)
  const SliceRef=useRef()
  const pic_element=(<div className='room-img'><img src={props.itemData.picture_url} alt="" /> </div>)


  function controlClickHandle(isNext,event){
    isNext? SliceRef.current.next():SliceRef.current.prev()
    // let newIndex = isNext ? curIndex + 1: curIndex - 1
    // const length = props.itemData.picture_urls.length
    // if(newIndex>length-1)newIndex=0
    // if(newIndex<0)newIndex=length-1
    // // console.log(newIndex)
    // setIndex(newIndex)
  }

  function changeNum(num){
    setIndex(num)
  }

  function clickRoom(){
    // console.log(112233);
    // console.log(props.itemData);
    props.itemClick&&props.itemClick(props.itemData)
  }

  const slice_element=(
    <div className="slider">
      <div className='control'>
        <div className='btn left' onClick={e => controlClickHandle(false, e)}>
          <IconArrowLeft width="30" height="30"/>
        </div>
        <div className='btn right' onClick={e => controlClickHandle(true, e)}>
          <IconArrowRight width="30" height="30"/>
        </div>
      </div>
      <div className='indicator'>
        <Indicator selectIndex={curIndex}>
          {
            props.itemData?.picture_urls?.map((item, index) => {
              return (
                <div className="item" key={item}>
                  <span className={classNames("dot", { active: curIndex === index })}></span>
                </div>
              )
            })
          }
        </Indicator>
      </div>
      <Carousel dots={false} ref={SliceRef} afterChange={changeNum}>
      {
        props.itemData.picture_urls?.map(item=>{
          return <div className="room-img" key={item} ><img src={item} alt="" /> </div>
        })
      }
    </Carousel>
    </div>
    )

  return (
    <RoomWrapper itemWidth={itemWidth} onClick={clickRoom}>
           {props.itemData.picture_urls?slice_element:pic_element}
        <div className='room-text'>
            <div className='room-feature'>{props.itemData.verify_info.messages.join("·")}</div>
            <div className="room-name">{props.itemData.name}</div>
            <div className="room-price">￥{props.itemData.price}/晚</div>
            <div className="review">
            <Rating name="read-only" value={props.itemData.star_rating} readOnly sx={{fontSize:'14px'}} />
            <div className="review-num">
                {props.itemData.reviews_count}
            </div>
            </div>
            
        </div>
    </RoomWrapper>
  )
})

export default RoomItem

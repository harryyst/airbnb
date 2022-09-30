import RoomItem from '@/components/room-item'
import { changeDetailInfoAction } from '@/store/feature/detail'
import React, { memo } from 'react'
import { shallowEqual, useDispatch } from 'react-redux'
import { useSelector } from 'react-redux'
import { useNavigate } from 'react-router-dom'
import { RoomsWrapper } from './style'

const EntireRooms = memo(() => {
  const {totalCount,roomList}=useSelector((state)=>({
    totalCount:state.entry.totalCount,
    roomList:state.entry.roomList
  }),shallowEqual)
  console.log(totalCount);

  const navigator = useNavigate()
  const dispatch = useDispatch()
  function handleItemClick(item){
    dispatch(changeDetailInfoAction(item))
    navigator('/detail')
  }
  return (
    <RoomsWrapper>
        {!!totalCount&&<div className='title'>{totalCount}多处住宿</div>}
        <div className="roomList">
          {
            roomList?.map((item,index)=>{
              return <RoomItem itemData={item} itemWidth="20%" key={item.id} itemClick={handleItemClick}/>
            })
          }
        </div>
    </RoomsWrapper>
  )
})

export default EntireRooms
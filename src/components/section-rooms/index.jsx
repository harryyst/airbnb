import React, { memo } from 'react'
import { RoomsWrapper } from './style'
import RoomItem from '../room-item'
const SectionRooms = memo((props) => {
  return (
    <RoomsWrapper>
      {
            props.infoList?.slice(0,8).map(item=>{
                return <RoomItem  itemData={item} key={item.id}/>
            })
        }
    </RoomsWrapper>
  )
})

export default SectionRooms
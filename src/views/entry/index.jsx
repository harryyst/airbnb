import { fetchRoomListAction } from '@/store/feature/entry/createActions'
import React, { memo, useEffect } from 'react'
import { useDispatch } from 'react-redux'
import EntireHeader from './c-cpns/entire-header'
import EntireRooms from './c-cpns/entire-rooms'
import { EntryWrapper } from './style'

const Entry = memo(() => {
  const dispatch=useDispatch()

  useEffect(()=>{
    dispatch(fetchRoomListAction())

  },[dispatch])
  return (
    <EntryWrapper>
      <EntireHeader/>
      <EntireRooms/>
    </EntryWrapper>
  )
})

export default Entry
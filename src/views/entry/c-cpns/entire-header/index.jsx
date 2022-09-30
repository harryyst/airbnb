import React, { memo } from 'react'
import { HeaderWrapper } from './style'
import filterData from '@/assests/data/filter_data.json'
import { useState } from 'react'
import classNames from 'classnames'
const EntireHeader = memo(() => {
    const [selItems,setSelItems]=useState([123])
    function handleItemClick(item,index){
        const newItems = [...selItems]
        if(newItems.includes(item)){
            const itemIndex = newItems.findIndex(iten=>iten===item)
            newItems.splice(itemIndex,1)
            setSelItems(newItems)
        }else{
            newItems.push(item)
            setSelItems(newItems)
        }
    }
  return (
    <HeaderWrapper>
        {filterData.map((item,index)=>{
            return <div className={classNames('item',{'active':selItems.includes(item)})} onClick={e=>handleItemClick(item,index)} key={item}>{item}</div>
        })}
    </HeaderWrapper>
  )
})

export default EntireHeader
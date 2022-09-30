import classNames from 'classnames';
import React, { memo } from 'react'
import { useState } from 'react';
import { SectionTabsWrapper } from './style'

const SectionTabs = memo((props) => {
  const [curIndex,setIndex]=useState(0)
  function tabClick(item,index){
      setIndex(index)
      props.tabClick(item)
  }
  return (
    <SectionTabsWrapper>
        {
            props.tablist?.map((item,index)=>{
                return <div className={classNames('item',{'active':index===curIndex})} key={item} onClick={()=>tabClick(item,index)}>{item}</div>
            })
        }
    </SectionTabsWrapper>
  )
})

export default SectionTabs
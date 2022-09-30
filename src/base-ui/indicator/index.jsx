import React, { memo, useEffect, useRef } from 'react'
import { IndicatorWrapper } from './style'

const Indicator = memo((props) => {
    const {selectIndex} = props
    const contentRef=useRef()
    useEffect(()=>{
      // console.log(props.children);
        const selEl= contentRef.current?.children?.[selectIndex];
        const itemLeft = selEl.offsetLeft
        const itemWidth = selEl.clientWidth
        const totalWidth=contentRef.current.clientWidth
        const scrollWidth=contentRef.current.scrollWidth
        let distance = itemLeft-0.5*totalWidth+itemWidth*0.5
        if (distance < 0) distance = 0 // 左边的特殊情况处理
        const totalDistance = scrollWidth - totalWidth
        if(distance>totalDistance)distance=totalDistance
        contentRef.current.style.transform=`translate(${-distance}px)`
    },[selectIndex])
    
  return (
    <IndicatorWrapper>
        <div className='i-content' ref={contentRef}>
        {props.children}
        </div>
    </IndicatorWrapper>
  )
})

export default Indicator
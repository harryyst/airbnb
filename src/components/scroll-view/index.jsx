import React, { memo } from 'react'
import { ScrollViewWrapper } from './style'
import { useState,useRef,useEffect } from 'react'
import IconArrowLeft from '@/assests/svg/icon-arrow-left'
import IconArrowRight from '@/assests/svg/icon-arrow-right'
const ScrollView = memo((props) => {
    const [showLeft, setShowLeft] = useState(false)
    const [showRight, setShowRight] = useState(false)
    const [posIndex, setPosIndex] = useState(0)
    const totalDistanceRef = useRef()
    const scrollContentRef = useRef()
  useEffect(() => {
    const scrollWidth = scrollContentRef.current.scrollWidth // 一共可以滚动的宽度
    const clientWidth = scrollContentRef.current.clientWidth // 本身占据的宽度
    const totalDistance = scrollWidth - clientWidth
    console.log(clientWidth)
    totalDistanceRef.current = totalDistance 
    setShowRight(totalDistance > 0)
  }, [props.children])

  /** 事件处理的逻辑 */
  function controlClickHandle(isRight) {
    const newIndex = isRight ? posIndex + 1: posIndex - 1
    console.log(scrollContentRef.current.children);
    const newEl = scrollContentRef.current.children[0].children[newIndex]
    const newOffsetLeft = newEl.offsetLeft
    scrollContentRef.current.style.transform = `translate(-${newOffsetLeft}px)`
    setPosIndex(newIndex)
    // 是否继续显示右侧的按钮
    setShowRight(totalDistanceRef.current > newOffsetLeft)
    setShowLeft(newOffsetLeft > 0)
  }
  return (
    <ScrollViewWrapper>
        <div className='scroll'>
        <div className='scroll-content' ref={scrollContentRef}>
            {props.children}
        </div>
        </div>
        
        { showLeft && (
        <div className='control left' onClick={e => controlClickHandle(false)}>
          <IconArrowLeft/>
        </div>
      ) }
      { showRight && (
        <div className='control right' onClick={e => controlClickHandle(true)}>
          <IconArrowRight/>
        </div>
      ) }
    </ScrollViewWrapper>
  )
})

export default ScrollView
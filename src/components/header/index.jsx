import useScroll from '@/hooks/useScroll'
import classNames from 'classnames'
import React, { memo, useRef, useState } from 'react'
import { shallowEqual, useSelector } from 'react-redux'
import { ThemeProvider } from 'styled-components'
import HeaderCenter from './c-cpns/header-center'
import HeaderLeft from './c-cpns/header-left'
import HeaderRight from './c-cpns/header-right'
import { HeaderWrapper } from './style'
const Header = memo((props) => {
  const [isSearch,setIsSearch]=useState(false)
  const {ScrollY} = useScroll()
  const { headerConfig } = useSelector((state) => ({
    headerConfig: state.main.headerConfig
  }), shallowEqual)
  let { isFix, isAlpha } = headerConfig

  isAlpha = isAlpha && ScrollY === 0
  const prevY = useRef(0)
  // 在正常情况的情况下(搜索框没有弹出来), 不断记录值
  if (!isSearch) prevY.current = ScrollY
  // 在弹出搜索功能的情况, 滚动的距离大于之前记录的距离的30
  if (isSearch && Math.abs(ScrollY - prevY.current) > 30) setIsSearch(false)
  return (
    <ThemeProvider theme={{isAlpha}}>
      <HeaderWrapper className={classNames({ fixed: isFix })}>
          <HeaderLeft />
          <HeaderCenter isSearch={ isAlpha || isSearch} searchClick={e=>setIsSearch(true)}/>
          <HeaderRight />
      </HeaderWrapper>
    </ThemeProvider>
  )
})


export default Header
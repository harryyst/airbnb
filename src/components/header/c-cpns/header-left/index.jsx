import IconLogo from '@/assests/svg/icon_logo'
import React, { memo } from 'react'
import { HeaderLeftWrapper } from './style'
import theme from '@/assests/theme'
import { useNavigate } from 'react-router-dom'
const HeaderLeft = memo((props) => {
  const navigator = useNavigate()
  function goHome(){
    navigator('/')
  }
  return (
    <HeaderLeftWrapper logoColor={theme.color.primaryColor}>
        <div className="logo" onClick={goHome}>
            <IconLogo />
        </div>
    </HeaderLeftWrapper>
  )
})


export default HeaderLeft
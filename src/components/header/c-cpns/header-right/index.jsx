import IconAvatar from '@/assests/svg/icon_avatar'
import IconGlobal from '@/assests/svg/icon_global'
import IconMenu from '@/assests/svg/icon_menu'
import theme from '@/assests/theme'
import React, { memo } from 'react'
import { useEffect } from 'react'
import { useState } from 'react'
import { HeaderRightWrapper } from './style'

const HeaderRight = memo(() => {
    const [profileState,setProfileState]=useState(false)
    useEffect(()=>{
        const hideProfile=()=>{
            setProfileState(false)
        }
        window.addEventListener("click",hideProfile,true)
        return () => {
            window.removeEventListener("click", hideProfile, true)
          }
    },[])
    function handleProfileClick(){
        setProfileState(!profileState)
    }
  return (
    <HeaderRightWrapper textColor={theme.text.primaryColor}>
        <div className='left-part'>
            <div className='item'>登陆</div>
            <div className='item'>注册</div>
            <div className='item logo'>
                <IconGlobal />
            </div>
        </div>
        <div className="right-part" onClick={handleProfileClick}>
            <IconMenu />
            <div className="right-icon">
                <IconAvatar />
            </div>
            { profileState && (
          <div className='panel'>
            <div className='top'>
              <div className='item register'>注册</div>
              <div className='item login'>登录</div>
            </div>
            <div className='bottom'>
              <div className='item'>出租房源</div>
              <div className='item'>开展体验</div>
              <div className='item'>帮助</div>
            </div>
          </div>
        ) }
        </div>
    </HeaderRightWrapper>
  )
})

export default HeaderRight
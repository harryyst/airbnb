import IconMoreArrow from '@/assests/svg/icon-more-arrow'
import React, { memo } from 'react'
import { useNavigate } from 'react-router-dom'
import { FooterWrapper } from './style'

const SectionFooter = memo((props) => {
    let showMessage = "显示全部"
    if(props.name){
        showMessage = `显示更多${props.name}房源`
    }
    const navigator = useNavigate()
    function moreClickHandle(){
        navigator('/entry')
    }
  return (
    <FooterWrapper color={props.name ? "#00848A": "#000"}>
        <div className='info' onClick={moreClickHandle}>
        <span className='text'>{showMessage}</span>
        <IconMoreArrow/>
      </div>    
    </FooterWrapper>
  )
})

export default SectionFooter
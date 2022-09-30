import React, { memo } from 'react'
import { SectionHeaderWrapper } from './style'

const SectionHeader = memo((props) => {
  return (
    <SectionHeaderWrapper>
        <div className="title">
        {props.title}
        </div>
        <div className='subtitle'>{props.subtitle}</div>
    </SectionHeaderWrapper>
    
  )
})

export default SectionHeader
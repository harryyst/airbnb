import SectionFooter from '@/components/section-footer'
import SectionHeader from '@/components/section-header'
import SectionRooms from '@/components/section-rooms'
import React, { memo } from 'react'
import { SectionV1Wrapper } from './style'

const HomeSectionV1 = memo((props) => {
  return (
    <SectionV1Wrapper>
        <SectionHeader title={props.info.title} subtitle={props.info.subtitle}/>
        <SectionRooms infoList={props.info.list}/>
        <SectionFooter/>
    </SectionV1Wrapper>
  )
})

export default HomeSectionV1
import ScrollView from '@/components/scroll-view'
import SectionFooter from '@/components/section-footer'
import SectionHeader from '@/components/section-header'
import SectionRooms from '@/components/section-rooms'
import SectionTabs from '@/components/section-tabs'
import React, { memo } from 'react'
import { useCallback } from 'react'
import { useState } from 'react'
import { SectionV2Wrapper } from './style'

const HomeSectionV2 = memo((props) => {
    const initItem = Object.keys(props.info.dest_list)[0]
    const [itemName,setName]=useState(initItem)
    const tablist = props.info.dest_address?.map(item=>item.name)
    tablist.push('abc')
    const getTabClick = useCallback((itemName,index)=>{
        setName(itemName)
    },[])
  return (
    <SectionV2Wrapper>
        <SectionHeader title={props.info.title} subtitle={props.info.subtitle}/>
        <ScrollView>
            <SectionTabs tablist={tablist} tabClick={getTabClick}/>
        </ScrollView>
        <SectionRooms infoList={props.info.dest_list?.[itemName]}/>
        <SectionFooter name={itemName}/>
    </SectionV2Wrapper>
  )
})

export default HomeSectionV2
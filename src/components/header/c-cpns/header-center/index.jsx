import IconSearchBar from '@/assests/svg/icon-search-bar'
import React, { memo, useState } from 'react'
import { HeaderCenterWrapper } from './style'
import { CSSTransition }  from "react-transition-group"
import SearchTabs from './c-cpns/search-tabs'
import SearchSections from './c-cpns/search-sections'
import SearchTitles from "@/assests/data/search_titles"

const HeaderCenter = memo((props) => {
  const { isSearch } = props
  const [tabIndex, setTabIndex] = useState(0)
  const titles = SearchTitles.map(item => item.title)
  function searchBarClickHandle(){
    props.searchClick()
  }
  return (
    <HeaderCenterWrapper>
      <CSSTransition
        in={!isSearch}
        classNames="bar"
        timeout={250}
        unmountOnExit={true}
      >
      <div className='search-bar' onClick={searchBarClickHandle}>
          <div className='text'>
            搜索房源和体验
          </div>
          <div className='icon'>
            <IconSearchBar/>
          </div>
        </div>
      </CSSTransition>
     <CSSTransition
        in={isSearch}
        classNames="detail"
        timeout={250}
        unmountOnExit={true}
     >
      <div className='search-detail'>
          <SearchTabs titles={titles} tabClick={setTabIndex}/>
          <div className='infos'>
            <SearchSections searchInfos={SearchTitles[tabIndex].searchInfos}/>
          </div>
        </div>
     </CSSTransition>
    </HeaderCenterWrapper>
  )
})

export default HeaderCenter
import IconArrowLeft from '@/assests/svg/icon-arrow-left'
import IconArrowRight from '@/assests/svg/icon-arrow-right'
import IconClose from '@/assests/svg/icon-close'
import classNames from 'classnames'
import React, { memo, useEffect, useState } from 'react'
import Indicator from '../indicator'
import { BrowserWrapper } from './style'
import { CSSTransition, SwitchTransition } from "react-transition-group"

const PictureBrowser = memo((props) => {
const {imgList} = props
const [curIndex,setIndex]=useState(0)
const [showList,setShowList]=useState(true)
const [isNext,setIsNext] = useState(true)

  useEffect(()=>{
    document.body.style.overflow="hidden"
    return ()=>{
        document.body.style.overflow="auto"
    }
  })

  function closeBtnClickHandle(){
    props.closeClick&&props.closeClick()
  }
  function handleImgChange(isNext){
    let newIndex = isNext ? curIndex + 1: curIndex - 1
    if(newIndex===imgList.length)newIndex=0
    if(newIndex<0)newIndex=imgList.length-1
    setIndex(newIndex)
    setIsNext(isNext)
  }
  function handleImgSel(index){
    setIndex(index)
    setIsNext(index > curIndex)
  }
  return (
    <BrowserWrapper showList={showList} isNext={isNext}>
        <div className='top'>
            <div className='close-btn' onClick={closeBtnClickHandle}>
            <IconClose/>
            </div>
        </div>

        <div className='slider'>
            <div className="picture">
                <SwitchTransition mode='in-out'>
                    <CSSTransition
                        key={imgList[curIndex]}
                        classNames="pic"
                        timeout={200}
                    >
                    <img src={imgList[curIndex]} alt="" />

                    </CSSTransition>
                </SwitchTransition>
            </div>
            <div className='control'>
                <div className="btn" onClick={e=>handleImgChange(false)}><IconArrowLeft width="77" height="77"/></div>
                <div className="btn" onClick={e=>handleImgChange(true)}><IconArrowRight width="77" height="77"/></div>
            </div>
        </div>

        <div className="preview">
            <div className="info">
                <div className="desc">
                    <div>{curIndex}/{imgList.length-1}</div>
                    <div className='toggle' onClick={e=>setShowList(!showList)}>{showList?'隐藏':'显示'}照片列表</div>
                </div>
                <div className="list">
                    <Indicator selectIndex={curIndex}>
                        {
                            imgList.map((item,index)=>{
                                return (
                                    <div className={classNames('item',{active:curIndex===index})} key={item} onClick={e=>handleImgSel(index)}>
                                        <img src={item} alt="" />
                                    </div>
                                )
                            })
                        }
                    </Indicator>
                </div>
            </div>
            
        </div>
    </BrowserWrapper>
  )
})

export default PictureBrowser
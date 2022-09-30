import React, { memo } from 'react'
import DetailPicture from './c-cpns/detail-pictures'
import { DetailWrapper } from './style'

const Detail = memo(() => {
  return (
    <DetailWrapper>
      <DetailPicture/>
    </DetailWrapper>
  )
})

export default Detail
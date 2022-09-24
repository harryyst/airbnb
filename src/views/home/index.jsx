import stRequest from '@/services'
import React, { memo } from 'react'
import { useEffect } from 'react'

const Home = memo(() => {
    useEffect(()=>{
        stRequest.get({url:'/home/highscore'}).then(res=>{
            console.log(res);
        })
    },[])
  return (
    <div>Home</div>
  )
})

export default Home
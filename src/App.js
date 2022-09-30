import React, { memo } from 'react'
import {  useRoutes } from 'react-router-dom'
import AppFooter from './components/app-footer'
import Header from './components/header'
import routes from './router'

const App = memo(() => {
  
  return (
    <div className='app'>
      <Header />
      <div className="page">
        {useRoutes(routes)}
      </div>
      <AppFooter/>
    </div>
  )
})

export default App
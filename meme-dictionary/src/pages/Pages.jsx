import React from 'react'
import  HomePage  from './HomePage'
import { Routes, Route } from 'react-router-dom'

function Pages() {
  return (
    <Routes>
        <Route path='/' element={<HomePage />} />
    </Routes>
  )
}

export default Pages
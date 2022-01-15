import React from 'react'

import { BrowserRouter, Route, Routes } from 'react-router-dom'
import Cart from '../pages/Cart'
import Home from '../pages/Home'

export function CustomRoutes () {
  return (
    <>
    <BrowserRouter>
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path='/cart' element={<Cart />} />
    </Routes>
    </BrowserRouter>
    </>
  )
}
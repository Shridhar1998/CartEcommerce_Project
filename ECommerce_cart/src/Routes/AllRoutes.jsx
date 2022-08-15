import React from 'react'
import { Route, Routes } from 'react-router-dom'
import Home from '../components/Home'
import { Products } from '../components/Products'
import SingleProduct from '../components/SingleProduct'

function AllRoutes() {
  return (
    <Routes>
        <Route path="/" element={<Home/>} />
        <Route path="/products" element={<Products/>} />
        <Route path="/products/:prod_id" element={<SingleProduct/>} />
    </Routes>
  )
}

export default AllRoutes
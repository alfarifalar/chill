import React from 'react'
import { Routes, Route } from 'react-router-dom'
import LoginPage from '../pages/LoginPage'
import RegisterPage from '../pages/RegisterPage'
import HomePage from '../pages/HomePage'
import AuthLayout from '../layouts/AuthLayout'
import HomeLayout from '../layouts/HomeLayout'


function AppRoutes() {
  return (
    <Routes>
      <Route element={<AuthLayout/>}>
        <Route path='/login' element={<LoginPage />} />
        <Route path='/register' element={<RegisterPage />} />
      </Route>
      <Route element={<HomeLayout/>}>
        <Route path='/' element={<HomePage />} />
      </Route>
    </Routes>
  )
}

export default AppRoutes
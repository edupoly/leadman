import React from 'react'
import { Outlet } from 'react-router-dom'
import Navbar from './Navbar'

function Dashboard() {
  return (
    <div className='border border-5 border-danger'>
        <Navbar></Navbar>
        <Outlet></Outlet>
    </div>
  )
}

export default Dashboard
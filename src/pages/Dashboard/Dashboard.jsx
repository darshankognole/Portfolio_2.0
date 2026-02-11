import React from 'react'
import Navbar from '../../components/Navbar'
import Home from '../Home/Home'
import { Outlet } from 'react-router-dom'

const Dashboard = () => {
  return (
    <section>
        <header>
            <Navbar></Navbar>
            <Outlet/>
        </header>
    </section>
  )
}

export default Dashboard
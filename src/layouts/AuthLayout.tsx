import React from 'react'
import { Outlet } from 'react-router-dom'


const AuthLayout: React.FC = () => {
  return (
    <div className='max-w-6xl mx-auto'>
      <div className='flex items-center justify-center h-screen '>
        <Outlet />
      </div>
    </div>
  )
}

export default AuthLayout
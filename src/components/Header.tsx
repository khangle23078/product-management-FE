import { Button } from 'antd'
import React from 'react'
import { Link } from 'react-router-dom'
import { useAppDispatch, useAppSelector } from '../hooks'
import { logout } from '../features/authSlice'

const Header: React.FC = () => {
  const { isAuthentication, user_name } = useAppSelector((state) => state.auth)
  const dispatch = useAppDispatch()
  return (
    <header className='shadow-md'>
      <div className='max-w-6xl mx-auto'>
        <div className='flex items-center justify-between h-[60px] '>
          <p>Trang chủ</p>
          {
            isAuthentication ? <div className='flex items-center gap-2'>
              <p>xin chào {user_name}</p>
              <Button type='primary' onClick={() => dispatch(logout())}>Đăng xuất</Button>
            </div>
              :
              <Link to={'/auth/login'}>
                <Button type='primary'>Đăng nhập</Button>
              </Link>
          }
        </div>
      </div>
    </header>
  )
}

export default Header
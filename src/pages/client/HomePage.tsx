import React from 'react'
import Header from '../../components/Header'
import { Card, Typography } from 'antd'

const { Title } = Typography
const HomePage: React.FC = () => {
  return (
    <>
      <Header />
      <div className='bg-gray-200 '>
        <div className='h-screen max-w-6xl py-2 mx-auto'>
          <Card>
            <Title level={4}>Danh sách sản phẩm</Title>
          </Card>
        </div>
      </div>
    </>
  )
}

export default HomePage
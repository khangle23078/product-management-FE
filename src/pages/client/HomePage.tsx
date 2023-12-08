import React from 'react'
import Header from '../../components/Header'
import { Card, Typography } from 'antd'
import { useGetProductsQuery } from '../../services/product'
import { Product } from '../../interfaces/product'
import ProductCard from '../../components/ProductCard'

const { Title } = Typography
const HomePage: React.FC = () => {
  const { data: response } = useGetProductsQuery()
  const products = response?.data

  return (
    <>
      <Header />
      <div className='bg-gray-200 '>
        <div className='h-screen max-w-6xl py-2 mx-auto'>
          <Card>
            <Title level={4}>Danh sách sản phẩm</Title>
            <div className='grid grid-cols-4 gap-4'>
              {products?.map((product: Product) => {
                return <ProductCard product={product} />
              })}
            </div>
          </Card>
        </div>
      </div>
    </>
  )
}

export default HomePage
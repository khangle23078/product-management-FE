import React from 'react'
import { Product } from '../interfaces/product'
import { Card } from 'antd'
import { useAppSelector } from '../hooks'

type ProductCardProps = {
  product: Product
}

const ProductCard: React.FC<ProductCardProps> = ({ product }) => {
  const { isAuthentication } = useAppSelector((state) => state.auth)
  return (
    <Card className='w-[200px]'>
      <img src={product.image.url} width={150} />
      <p>{product.name}</p>
      <p>{isAuthentication ? product.price : "Liên hệ"}</p>
    </Card>
  )
}

export default ProductCard
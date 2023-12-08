import React from 'react'
import { Product } from '../interfaces/product'
import { Card } from 'antd'

type ProductCardProps = {
  product: Product
}

const ProductCard: React.FC<ProductCardProps> = ({ product }) => {
  return (
    <Card>
      <img src={product.image.url} />
      <p>{product.name}</p>
      <p>{product.price}</p>
    </Card>
  )
}

export default ProductCard
import { Button, Card, Image, Popconfirm, Space, Table, Typography, message } from 'antd'
import React from 'react'
import { useDeleteProductMutation, useGetProductsQuery } from '../../../services/product'
import { Product } from '../../../interfaces/product'
import { Link } from 'react-router-dom'

const { Title } = Typography

const ProductList: React.FC = () => {
  const { data: products, isLoading } = useGetProductsQuery()
  const [deleteProduct] = useDeleteProductMutation()

  const handleDeleteProduct = async (_id: string | undefined) => {
    try {
      const response = await deleteProduct(_id).unwrap()
      message.success(response.message)
    } catch (error: unknown) {
      message.error(error as string)
    }
  }

  const columns = [
    {
      title: 'Id',
      dataIndex: 'id',
      key: 'id'
    },
    {
      title: 'Tên sản phẩm',
      dataIndex: 'name',
      key: 'name'
    },
    {
      title: 'Hình ảnh',
      dataIndex: 'image',
      key: 'image',
      render: (image: string) => {
        return <Image src={image} width={100} />
      }
    },
    {
      title: 'Giá sp',
      dataIndex: 'price',
      key: 'price'
    },
    {
      title: 'Mô tả',
      dataIndex: 'desc',
      key: 'desc'
    },
    {
      title: 'Thao tác',
      dataIndex: '_id',
      key: 'action',
      render: (_id: string) => {
        return (
          <Space>
            <Link to={`/admin/product/edit/${_id}`}>
              <Button type='dashed'>Sửa</Button>
            </Link>
            <Popconfirm
              title='Xóa sản phẩm'
              description="Bạn có chắc muốn xóa không?"
              okText="Xóa"
              cancelText="Không"
              onConfirm={() => handleDeleteProduct(_id)}
            >
              <Button type='primary' danger>Xóa</Button>
            </Popconfirm>
          </Space>
        )
      }
    }
  ]

  const dataSource = products?.data?.map((product: Product, index: number) => {
    return {
      id: index + 1,
      _id: product._id,
      name: product.name,
      image: product.image.url,
      price: product.price,
      desc: product.desc
    }
  })

  return (
    <Card className='my-4'>
      <Title level={4}>Danh sách sản phẩm</Title>
      <Table columns={columns} dataSource={dataSource} rowKey={'_id'} loading={isLoading} />
    </Card>
  )
}

export default ProductList
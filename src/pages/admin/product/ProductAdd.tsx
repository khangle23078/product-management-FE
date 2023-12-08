import { Button, Card, Form, Image, Input, InputNumber, Typography, Upload, message } from 'antd'
import React, { useState } from 'react'
import { Product } from '../../../interfaces/product'
import { IImage } from '../../../interfaces/image'
import { useCreateProductMutation } from '../../../services/product'
import { useDeleteFileMutation } from '../../../services/upload'
import { useNavigate } from 'react-router-dom'

const { Title } = Typography

const ProductAdd: React.FC = () => {
  const [imageUrl, setImageUrl] = useState<IImage | null>(null)
  const [createProdut, { isLoading }] = useCreateProductMutation()
  const [deleteFile] = useDeleteFileMutation()
  const navigate = useNavigate()

  const handleDeleteFile = async (public_id: string | undefined) => {
    try {
      console.log(public_id);

      const response = await deleteFile({ public_id }).unwrap()
      message.success(response.message)
    } catch (error: unknown) {
      message.error(error as string)
    }
  }

  const handleAddProduct = async (data: Omit<Product, 'id'>) => {
    try {
      const response = await createProdut(data).unwrap()
      message.success(response.message)
      navigate('/admin/product/list')
    } catch (error: unknown) {
      message.error(error as string)
    }
  }

  return (
    <Card className='my-4'>
      <Title level={4}>Thêm mới sản phẩm</Title>
      <Form name='productAdd' layout='vertical' onFinish={handleAddProduct}>
        <Form.Item label="Tên sản phẩm" name='name' rules={[{
          required: true,
          message: 'Vui lòng nhập tên sp'
        }]}>
          <Input />
        </Form.Item>
        <Form.Item label="Giá sản phẩm" name='price' rules={[{
          required: true,
          message: 'Vui lòng nhập giá sp'
        }]}>
          <InputNumber />
        </Form.Item>
        <Form.Item name='desc' rules={[{
          required: true,
          message: 'Vui lòng nhập mô tả'
        }]}>
          <Input.TextArea placeholder='Nhập mô tả sản phẩm' />
        </Form.Item>
        <Form.Item
          name='image'
          getValueFromEvent={(event) => {
            const image = event.fileList[0]?.response?.data
            setImageUrl(image)
            return image
          }}
        >
          <Upload
            action={'http://localhost:8001/api/v1/file/upload'}
            name='file'
            onRemove={() => handleDeleteFile(imageUrl?.public_id)}
          >
            <Button type="dashed">Chọn ảnh để upload</Button>
          </Upload>
        </Form.Item>
        <div>
          {imageUrl ? <Image src={imageUrl.url} width={200} height={200} className='object-cover' /> : null}
        </div>
        <Button type='primary' htmlType='submit' loading={isLoading}>Thêm mới sản phẩm</Button>
      </Form>
    </Card>
  )
}

export default ProductAdd
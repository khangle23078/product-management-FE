import { Button, Card, Form, Image, Input, InputNumber, Typography, Upload, message } from 'antd';
import { useForm } from 'antd/es/form/Form';
import React, { useEffect, useState } from 'react'
import { useNavigate, useParams } from 'react-router-dom'
import { IImage } from '../../../interfaces/image';
import { useDeleteFileMutation } from '../../../services/upload';
import { useEditProductMutation, useGetProductQuery } from '../../../services/product';
import { Product } from '../../../interfaces/product';

const { Title } = Typography

const ProductEdit: React.FC = () => {
  const { id } = useParams();
  const { data: response } = useGetProductQuery(id)
  const [deleteFile] = useDeleteFileMutation()
  const [imageUrl, setImageUrl] = useState<IImage | undefined>(undefined)
  const [form] = useForm()
  const [editProduct, { isLoading }] = useEditProductMutation()
  const navigate = useNavigate()

  useEffect(() => {
    if (response) {
      const product = response.data;
      form.setFieldsValue({
        name: product?.name,
        price: product?.price,
        desc: product?.desc,
        image: product?.image
      })
      setImageUrl(product?.image)
    }
  }, [response, form])

  const handleDeleteFile = async (public_id: string | undefined) => {
    try {
      const response = await deleteFile({ public_id }).unwrap()
      message.success(response.message)
    } catch (error: unknown) {
      message.error(error as string)
    }
  }

  const handleEditProduct = async (data: Omit<Product, 'id'>) => {
    try {
      const response = await editProduct({ id, data }).unwrap()
      message.success(response.message)
      navigate('/admin/product/list')
    } catch (error: unknown) {
      message.error(error as string)
    }
  }

  return (
    <Card className='my-4'>
      <Title level={4}>Sửa sản phẩm</Title>
      <Form form={form} name='productEdit' layout='vertical' onFinish={handleEditProduct}>
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
        <Button type='primary' htmlType='submit' loading={isLoading}>Sửa sản phẩm</Button>
      </Form>
    </Card>
  )
}

export default ProductEdit
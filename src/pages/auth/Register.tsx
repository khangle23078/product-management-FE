import { Button, Card, Form, Input, Typography, message } from 'antd'
import React from 'react'
import { Link, useNavigate } from 'react-router-dom'
import { useRegisterMutation } from '../../services/auth'
import { User } from '../../interfaces/user'

const { Title } = Typography

const Register: React.FC = () => {
  const [register, { isLoading }] = useRegisterMutation()
  const navigate = useNavigate()

  const handleRegister = async (data: User) => {
    try {
      const response = await register(data).unwrap()
      message.success(response.message)
      navigate('/auth/login')
    } catch (error) {
      message.error('Có lỗi xảy ra khi đăng ký')
    }
  }

  return (
    <Card className='w-[400px] shadow-md'>
      <Title level={4}>Đăng ký</Title>
      <Form name='registerForm' layout='vertical' onFinish={handleRegister}>
        <Form.Item label="Tên đăng nhập" name='user_name' rules={[{
          required: true,
          message: 'Vui lòng nhập tên đăng nhập'
        }]}>
          <Input />
        </Form.Item>
        <Form.Item label="Email" name='email' rules={[{
          required: true,
          message: 'Vui lòng nhập email'
        }]}>
          <Input />
        </Form.Item>
        <Form.Item label="Mật khẩu" name='password' rules={[{
          required: true,
          message: 'Vui lòng nhập mật khẩu'
        }]}>
          <Input.Password />
        </Form.Item>
        <Button
          type='primary'
          className='w-full'
          htmlType='submit'
          loading={isLoading}
        >
          Đăng ký
        </Button>
      </Form>
      <div className='text-center'>
        <p>or</p>
        <Link to={'/auth/login'}>Đăng nhập</Link>
      </div>
    </Card>
  )
}

export default Register
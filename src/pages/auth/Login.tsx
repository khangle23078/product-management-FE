import { Card, Typography, Form, Button, message, Input } from 'antd'
import React from 'react'
import { Link, useNavigate } from 'react-router-dom'
import { useLoginMutation } from '../../services/auth'
import { User } from '../../interfaces/user'

const { Title } = Typography

const Login: React.FC = () => {
  const navigate = useNavigate()
  const [login, { isLoading }] = useLoginMutation()

  const handleRegister = async (data: Partial<User>) => {
    try {
      const response = await login(data).unwrap()
      message.success(response.message)
      navigate('/')
    } catch (error) {
      message.error('Có lỗi xảy ra khi đăng ký')
    }
  }

  return (
    <Card className='w-[400px] shadow-md'>
      <Title level={4}>Đăng nhập</Title>
      <Form name='registerForm' layout='vertical' onFinish={handleRegister}>
        <Form.Item label="Tên đăng nhập" name='user_name' rules={[{
          required: true,
          message: 'Vui lòng nhập tên đăng nhập'
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
        <Link to={'/auth/register'}>Đăng ký</Link>
      </div>
    </Card>
  )
}

export default Login
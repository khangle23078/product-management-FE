import { Card, Typography, Form, Button } from 'antd'
import React from 'react'

const { Title } = Typography

const Login: React.FC = () => {
  return (
    <Card>
      <Title level={4}>Đăng nhập</Title>
      <Form>
        <Button type='primary'>Đăng nhập</Button>
      </Form>
    </Card>
  )
}

export default Login
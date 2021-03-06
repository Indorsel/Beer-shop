import React from 'react'
import { Form, Input, Button, DatePicker } from 'antd'
import './index.css'


const config = {
  rules: [
    {
      type: 'object',
      required: true,
      message: 'Please select birth date!',
    },
  ],
}

const formItemLayout = {
  labelCol: {
    xs: {
      span: 24,
    },
    sm: {
      span: 8,
    },
  },
  wrapperCol: {
    xs: {
      span: 24,
    },
    sm: {
      span: 16,
    },
  },
}
const tailFormItemLayout = {
  wrapperCol: {
    xs: {
      span: 24,
      offset: 0,
    },
    sm: {
      span: 16,
      offset: 8,
    },
  },
}

export default function RegistrationForm({ isVisible }) {

  const [form] = Form.useForm()

  const onFinish = (values) => {
    console.log('Received values of form: ', values)
    form.resetFields()
    isVisible()
  }

  return (
    <Form
      {...formItemLayout}
      form={form}
      name='register'
      onFinish={onFinish}
      scrollToFirstError
    >

      <Form.Item
        name='firstname'
        label='First name'
        rules={[
          {
            required: true,
            message: 'Please input your first name!',
            whitespace: true,
          },
          {
            pattern: '^[a-zA-Z]{1,20}$',
            message: 'Please use only latin letters!',
          }
        ]}
      >
        <Input />
      </Form.Item>

      <Form.Item
        name='secondname'
        label='Second name'
        rules={[
          {
            required: true,
            message: 'Please input your second name!',
            whitespace: true,
          },
          {
            pattern: '^[a-zA-Z]{1,20}$',
            message: 'Please use only latin letters!',
          }
        ]}
      >
        <Input />
      </Form.Item>

      <Form.Item name='date-picker' label='Birth Date' {...config}>
        <DatePicker />
      </Form.Item>

      <Form.Item
        name='password'
        label='Password'
        rules={[
          {
            required: true,
            message: 'Please input your password!',
          },
          () => ({
            validator(_, value) {
              if (!value || value.length >= 6) {
                return Promise.resolve()
              }
              return Promise.reject(new Error('Please input 6 or more symbols in your password'))
            },
          }),
        ]}
        hasFeedback
      >
        <Input.Password />
      </Form.Item>

      <Form.Item
        name='confirm'
        label='Confirm Password'
        dependencies={['password']}
        hasFeedback
        rules={[
          {
            required: true,
            message: 'Please confirm your password!',
          },
          ({ getFieldValue }) => ({
            validator(_, value) {
              if (!value || getFieldValue('password') === value) {
                return Promise.resolve()
              }
              return Promise.reject(new Error('The two passwords that you entered do not match!'))
            },
          }),
        ]}
      >
        <Input.Password />
      </Form.Item>

      <Form.Item
        name='email'
        label='E-mail'
        rules={[
          {
            type: 'email',
            message: 'The input is not valid E-mail!',
          },
          {
            required: true,
            message: 'Please input your E-mail!',
          },
        ]}
      >
        <Input />
      </Form.Item>

      <Form.Item {...tailFormItemLayout}>
        <Button type='primary' htmlType='submit'>
          Register
        </Button>
      </Form.Item>
    </Form>
  )
}

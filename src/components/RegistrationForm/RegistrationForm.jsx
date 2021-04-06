import React from 'react';
import { Form, Input, Button, DatePicker } from 'antd';


const config = {
  rules: [
    {
      type: 'object',
      required: true,
      message: 'Please select time!',
    },
  ],
};

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
};
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
};

export default function RegistrationForm() {

  const [form] = Form.useForm();

  const onFinish = (values) => {
    console.log('Received values of form: ', values);
  };

  return (
    <Form
      {...formItemLayout}
      form={form}
      name="register"
      onFinish={onFinish}
      scrollToFirstError
    >

      <Form.Item
        name="firstname"
        label="First name"
        rules={[{ required: true, message: 'Please input your first name!', whitespace: true }]}
      >
        <Input />
      </Form.Item>

      <Form.Item
        name="secondname"
        label="Second name"
        rules={[{ required: true, message: 'Please input your second name!', whitespace: true }]}
      >
        <Input />
      </Form.Item>

      <Form.Item name="date-picker" label="Birth Date" {...config}>
        <DatePicker />
      </Form.Item>

      <Form.Item
        name="password"
        label="Password"
        rules={[
          {
            required: true,
            message: 'Please input your password!',
          },
        ]}
        hasFeedback
      >
        <Input.Password />
      </Form.Item>

      <Form.Item
        name="confirm"
        label="Confirm Password"
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
                return Promise.resolve();
              }
              return Promise.reject(new Error('The two passwords that you entered do not match!'));
            },
          }),
        ]}
      >
        <Input.Password />
      </Form.Item>

      <Form.Item
        name="email"
        label="E-mail"
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
        <Button type="primary" htmlType="submit">
          Register
        </Button>
      </Form.Item>
    </Form>
  );
};


  // return (
    // <div className="wrapper_registration">
    //   <div className='sign_up'>
    //     <p>Registration</p>
    //     <p>Create your account</p>
    //     <form onSubmit={openForm} >
    //       <input type="text" name="First Name" required id="first_name" pattern="[A-Za-z]{1,}"
    //           title="Please use only Latin letters" placeholder='First Name' />
    //       <input type="text" name="Last Name" required id="last_name" pattern="[A-Za-z]{1,}"
    //           title="Please use only Latin letters" placeholder='Last Name' />
    //       <br/>
    //       <input type="text" name="Otchestvo" id="otchestvo" placeholder='Otchestvo' />
    //       <br/>
    //       <label>Date of Birth</label>
    //       <input type="date" name="Birth Date" required min="1900-01-01" max="2021-04-09" id="date" />
    //       <br/>
    //       <input type="email" name="Email" required pattern="[a-z0-9._%+-]+@[a-z0-9.-]+\.[a-z]{2,}$"
    //           title="Invalid email!" id="email" placeholder='Email' />
    //       <br/>
    //       <input type="password" name="Password" required id="password" pattern=".{6,}"
    //             title="6 or more characters" placeholder='Password' />
    //       <br/>
    //       <input type="password" name="Check password" required id="check_password" placeholder='Repeat password' />
    //       <br/>
    //       <input type="submit" value="Register now" />
    //     </form>
    //   </div>
//     // </div>


//   )
// }

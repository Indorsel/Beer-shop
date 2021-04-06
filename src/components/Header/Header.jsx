import React, { useState } from 'react'
import { NavLink } from 'react-router-dom';
import { Button, Input, Space, Modal } from 'antd';
import './index.css'
import RegistrationForm from '../RegistrationForm/RegistrationForm';
import { useDispatch } from 'react-redux';
import { setBeerName } from '../../actions/setBeerName';

export default function Header() {

  const dispatch = useDispatch()

  const [visible, setIsModalVisible] = useState(false);

  const showModal = () => {
    setIsModalVisible(true);
  };

  const handleOk = () => {
    setTimeout(() => {
      setIsModalVisible(false);
    }, 1000);
  };

  const handleCancel = () => {
    setIsModalVisible(false);
  };

  const changeHandler = ({target}) => {
    dispatch(setBeerName(target.value))
  }

  return (
    <div id='header'>
      <Space direction="vertical">
        <Input placeholder="Type name of beer" onChange={changeHandler} />
      </Space>
      <div className='buttons_wrapper'>
        <NavLink to='/cart'>
          <Button id='cart_btn'>Cart</Button>
        </NavLink>

        <Button id='sign_up_btn' type="primary" onClick={showModal}>Sign up</Button>
      </div>
      
      <Modal
        visible={visible}
        title="Registration"
        onOk={handleOk}
        onCancel={handleCancel}
        footer={[
          <Button key="submit" type="primary" htmlType="submit" onClick={handleOk}>
            Register
          </Button>,
        ]}
      >
        <RegistrationForm />
      </Modal>
    </div>
  )
}

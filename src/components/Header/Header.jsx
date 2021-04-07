import React, { useState } from 'react'
import { NavLink } from 'react-router-dom';
import { Button, Input, Space, Modal } from 'antd';
import './index.css'
import RegistrationForm from '../RegistrationForm/RegistrationForm';
import { useDispatch, useSelector } from 'react-redux';
import { setBeerName } from '../../actions/setBeerName';
import { setCurrentPage } from '../../actions/setCurrentPage';

export default function Header() {

  const dispatch = useDispatch()
  const state = useSelector(state => state.pagination.currentPage)

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
    if(target.value.trim() !== '' || target.value === '') dispatch(setBeerName(target.value))
    if (state !== 1 || target.value === '') dispatch(setCurrentPage(1))
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
        footer={null}
      >
        <RegistrationForm isVisible={() => setIsModalVisible(false)} />
      </Modal>
    </div>
  )
}

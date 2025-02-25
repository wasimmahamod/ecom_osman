import React, { useState } from 'react';
import { Button, Input, Modal } from 'antd';
import axios from 'axios';


const Resentverifation = () => {

const [email, setEmail] = useState("")
const [isModalOpen, setIsModalOpen] = useState(false);

  const showModal = () => {
    setIsModalOpen(true);
  };
  const handleCancel = () => {
    setIsModalOpen(false);
  };

  const handleSend = async () => {
    setIsModalOpen(false);
    let data = await axios.post('http://localhost:8000/api/v1/auth/resentverifation',
    {
        email:email,
    },
    )
    console.log(data);
  };

  const [modal, contextHolder] = Modal.useModal();

  return (
    <>
    <Button type="primary" onClick={showModal}>Open Modal</Button>

    <Modal title="Reset Your Verifaction Link" open={isModalOpen} onCancel={handleCancel} onOk={handleSend} okText="Submit" >
      <Input type="email" placeholder='Enter Your Email' className='border-[2px] w-full' onChange={e => setEmail(e.target.value)}/>
    </Modal>
    
  </>
  )
}

export default Resentverifation
import React, { useState } from 'react';
import { Button, Checkbox, Form, Input } from 'antd';
import axios from 'axios';
import { useNavigate } from 'react-router-dom'
import { ToastContainer, toast } from 'react-toastify';

const Forgotpass = () => {

    let [loading,setLoading] = useState(false)
    let [msg,setMsg] = useState("")
    let [error, setError] = useState("")
    const [success, setSuccess] = useState('');
    let navigate = useNavigate()
    
    const onFinish = async (values) => {

      try {
        setLoading(true);
        let data = await axios.post('http://localhost:8000/api/v1/auth/forgotpass',
        {
            email:values.email,
        },
        )
        setLoading(false);
        toast.success( "Please Check Your Email", {
          position: "top-right",
          autoClose: 5000,
          hideProgressBar: false,
          closeOnClick: true,
          pauseOnHover: true,
          draggable: true,
          progress: undefined,
          theme: "light",
          });
          setTimeout(() => {
            navigate("/login")
          }, 5000);
        setError('')
        console.log(data);
          } catch (error) { 
            setLoading(false);
            setSuccess('')
            toast.error(error.response.data.message, {
              position: "top-right",
              autoClose: 5000,
              hideProgressBar: false,
              closeOnClick: true,
              pauseOnHover: true,
              draggable: true,
              progress: undefined,
              theme: "colored",
              });
          }
      }
    
    const onFinishFailed = (errorInfo) => {
    console.log('Failed:', errorInfo);
    };

  return (
   <>

<ToastContainer/>

   <Form
    name="basic"
    labelCol={{
      span: 8,
    }}
    wrapperCol={{
      span: 16,
    }}
    style={{
      maxWidth: 600,
    }}
    initialValues={{
      remember: true,
    }}
    onFinish={onFinish}
    onFinishFailed={onFinishFailed}
    autoComplete="off"
  >
    <Form.Item
      label="Email"
      name="email"
      rules={[
        {
          required: true,
          message: 'Please input your email!',
        },
      ]}
    >
      <Input />
    </Form.Item>

    <Form.Item
      wrapperCol={{
        offset: 8,
        span: 16,
      }}
    >
      <Button type="primary" htmlType="submit" loading={loading} disabled={loading}>
        Submit
      </Button>
    </Form.Item>
  </Form>
   </>
  )
}

export default Forgotpass
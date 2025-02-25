import React, { useState } from 'react';
import { Button, Checkbox, Form, Input, Alert, Space } from 'antd';
import axios from 'axios';
import { ToastContainer, toast } from 'react-toastify';
import { useNavigate } from 'react-router-dom';
import { useDispatch } from 'react-redux';
import { activeUser } from '../slices/userSlices';
import 'react-toastify/dist/ReactToastify.css';

const Login = () => {

    let [loading,setLoading] = useState(false)
    let [msg,setMsg] = useState("")
    let [error, setError] = useState("")
    const [success, setSuccess] = useState('');
    let navigate = useNavigate()

    const dispatch = useDispatch();
  
    const onFinish = async (values) => {

      try {

        setLoading(true);
        let data = await axios.post('http://localhost:8000/api/v1/auth/login',
        {
            email:values.email,
            password:values.password
        },
        {
          headers:{
            "authorization": "000000"
          },
        },
        ) 
        
        dispatch(activeUser(data.data))
        localStorage.setItem("user", JSON.stringify(data.data))
        
        setLoading(false);
        
        toast.success( "Login Successful", {
          position: "top-right",
          autoClose: 5000,
          hideProgressBar: false,
          closeOnClick: true,
          pauseOnHover: true,
          draggable: true,
          progress: undefined,
          theme: "light",
          });
          // setTimeout(() => {
          //   navigate("/login")
          // }, 5000);
        setError('')
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
      console.log(errorInfo, "login failed");
    };

  return (
    <>
    <ToastContainer/>
    
    { 
       msg && <Alert message={msg} type="success" showIcon />
    }

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
      label="Password"
      name="password"
      rules={[
        {
          required: true,
          message: 'Please input your password!',
        },
      ]}
    >
      <Input.Password />
    </Form.Item> 

    {/* <Form.Item
      name="remember"
      valuePropName="checked"
      wrapperCol={{
        offset: 8,
        span: 16,
      }}
    >
      <Checkbox>Remember me</Checkbox>
    </Form.Item>  */}

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

export default Login
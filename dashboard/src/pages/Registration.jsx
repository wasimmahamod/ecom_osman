import React, { useState } from 'react';
import { Button, Checkbox, Form, Input, Alert, Space } from 'antd';
import axios from 'axios';
import { useNavigate } from 'react-router-dom';
import { Link } from 'react-router-dom';
import Resentverifation from './Resentverifation';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';


const Registration = () => {

  let [loading,setLoading] = useState(false)
  const [success, setSuccess] = useState('');
  let [msg,setMsg] = useState("")
  let [error, setError] = useState("")
  let navigate = useNavigate()

  const onFinish = async (values) => {
    
    try {
      
   setLoading(true);
   let data = await axios.post('http://localhost:8000/api/v1/auth/registration',
    {
        name:values.username,
        email:values.email,
        password:values.password
    },
    {
      headers:{
        "authorization": "000000"
      },
    }
    )

      setLoading(false);
      toast.success( "Registration Success", {
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
  };

  const onFinishFailed = (errorInfo) => {
    console.log(errorInfo, "reg failed");
  };


  return (
    
    <>
    <ToastContainer/>
    
    { 
       msg && <Alert message={msg} type="success" showIcon />
    }

       <div>
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
      label="Username"
      name="username"
      rules={[
        {
          required: true,
          message: 'Please input your username!',
        },
      ]}
    >
      <Input />
    </Form.Item>

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
     
     <div>
     <Button type="primary" htmlType="submit" loading={loading} disabled={loading}>
        Submit
      </Button>

      <Button type="primary" onClick={()=>navigate('/login')} className='mx-5' htmlType="submit">
        Login
      </Button>

      {/* <Button type="primary" onClick={()=>navigate('/resentverifation')} className='ml-5' htmlType="submit" loading={loading} disabled={loading}>
        Resent Verifation
      </Button> */}

      <Resentverifation />
  
     </div>
     
      <Link to="/forgotpass">Forgot Passsword</Link>

    </Form.Item>
       </Form> 
       </div>

    </>
  )
}

export default Registration
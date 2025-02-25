import React, { useState } from 'react'
import { Button, Checkbox, Form, Input } from 'antd';
import axios from 'axios';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import { useSelector } from 'react-redux';

const AddCategory = () => {

  let userInfo = useSelector((state) => state.user.value)

  console.log(userInfo)

  let [loading, setLoading] = useState(false)
  const [success, setSuccess] = useState('');
  let [error, setError] = useState("")
  let [image, setImage] = useState({});

  const onFinish = async (values) => {

    try {

      setLoading(true);
      let data = await axios.post("http://localhost:8000/api/v1/product/creatcategory",
        {
          name: values.name,
          avatar: image,
        },
        {
          headers: {
            'Content-Type': 'multipart/form-data',
            authorization: "000000",
            token: userInfo.token
          }
        }
      )

      setLoading(false);
      toast.success("category created successfully", {
        position: "top-right",
        autoClose: 5000,
        hideProgressBar: false,
        closeOnClick: true,
        pauseOnHover: true,
        draggable: true,
        progress: undefined,
        theme: "light",
      });
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
    console.log('Failed:', errorInfo);
  };

  let handleChange = (e) => {
    setImage(e.target.files[0]);
  }

  return (

    userInfo.role !== "user" &&

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
      <ToastContainer />

      <Form.Item
        label="category Name"
        name="name"
        rules={[
          {
            required: true,
            message: 'Please input your category name!',
          },
        ]}
      >
        <Input />
      </Form.Item>

      <Form.Item>
        <input onChange={handleChange} type="file" />
      </Form.Item>

      <Form.Item
        wrapperCol={{
          offset: 8,
          span: 16,
        }}
      >
        <Button type="primary" htmlType="submit">
          Submit
        </Button>
      </Form.Item>
    </Form>

  )
}

export default AddCategory
import React, { useEffect, useState } from 'react'
import { Button, Checkbox, Form, Input, Select, Space } from 'antd';
import axios from 'axios';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

const AddSubCategory = () => {
 
  let [loading,setLoading] = useState(false);
  const [success, setSuccess] = useState('');
  let [error, setError] = useState("");
  let [catlist, setcatlist] = useState([]);
  let [catid, setCatId] = useState('');

    const onFinish = async (values) => {
      try{
        setLoading(true);
        console.log('Success:', values);
        let data = await axios.post("http://localhost:8000/api/v1/product/creatsubcategory",
         {
           name:values.name,
           categoryId: catid,
           
         })
         
       console.log(data);

      setLoading(false);
      toast.success( "Subcategory add Successfully", {
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

      useEffect(()=>{
       async function allcat(){
        
        let data = await axios.get("http://localhost:8000/api/v1/product/allcat");

        let catedata= []

        data.data.map((item)=>{
          catedata.push({
            value: item._id,
            label: item.name,
          });
        });
         setcatlist(catedata);
       }
       allcat();
      },[])

      const handleChange = (value) => {
       setCatId(value)
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
      label="Subcategory Name"
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
    <Select
      defaultValue="Category"
      style={{
        width: 120,
      }}
      onChange={handleChange}
      options={catlist}
    />
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
    </>
  )
}

export default AddSubCategory
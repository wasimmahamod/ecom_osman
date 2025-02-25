import React, { useEffect, useState } from 'react'
import { Button, Checkbox, Form, Input, Select } from 'antd';
import axios from 'axios';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import { useSelector } from 'react-redux';
import { CKEditor } from '@ckeditor/ckeditor5-react';
import ClassicEditor from '@ckeditor/ckeditor5-build-classic';

const AddProduct = () => {

  let [image, setImage] = useState([]);
  let [discription,setDiscription] = useState("");
  let [showslug, setShowSlug ] = useState ("");


  let [type, setType] = useState("");
  let [proType, setProType] = useState([
    {
      value: 'normal',
      label: 'normal',
    },
    {
      value: 'top',
      label: 'top',
    },
    {
      value: 'new',
      label: 'new',
    },
    {
      value: 'feature',
      label: 'feature',
    },
    {
      value: 'flash',
      label: 'flash',
    },

  ]);
  let [catlist, setcatlist] = useState([]);
  

  let [subCatlist, setSubCatList] = useState([]);
  let [catid, setCatId] = useState('');

  // let [subCatid, setSubCatId] = useState('');

  let userInfo = useSelector((state) => state.user.value);

  let [loading,setLoading] = useState(false);
  const [success, setSuccess] = useState('');
  let [error, setError] = useState("");

    const onFinish = async (values) => {

      let formData = new FormData ()

      formData.append("name", values.name)
      formData.append("discription", discription)
      formData.append("regularprice", values.regularprice)
      formData.append("discount", values.discount)
      formData.append("slug", values.name.split(" ").join("-").toLowerCase())
      formData.append("catId", catid)
      formData.append("proType", type)

      image.forEach(file=>{
        formData.append("photos", file)
      })

      try{
        setLoading(true);
        let data = await axios.post("http://localhost:8000/api/v1/product/creatproduct",
         
        formData,

         {
          headers: {
            'Content-Type': 'multipart/form-data'
          }
         },
        )
        
       console.log(data);
       console.log('Success:', values);

      setLoading(false);
      toast.success( "Product created successfully", {
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

        let arr = Array.from(e.target.files)

        setImage(arr);
      }


      let handleSlug = (e) => {
        setShowSlug(e.target.value.split(" ").join("-").toLowerCase())
      }

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


       let handleChangeCatId = async (e) => {        
        let data = await axios.get(`http://localhost:8000/api/v1/product/singlesubcat/${e}`);
 
        let catedata= [];

        data.data.map((item)=>{
          catedata.push({
            value: item._id,
            label: item.name,
          });
        });
        setSubCatList(catedata);
        setCatId(e);
       }

       let handleChangeProType = (e) => {
        setType(e);
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
        <ToastContainer/>

        <Form.Item
          label="Product Name"
          name="name"
          rules={[
            {
              required: true,
              message: 'Please input your product name!',
            },
          ]}
        >
          <Input onChange={handleSlug} />
          
        </Form.Item>

        <Form.Item
          label="Slug"
          name="slug"
          rules={[
            {
              message: 'Slug',
            },
          ]}
        >
          <Input placeholder={showslug} disabled/>
        </Form.Item>

        <Form.Item
          label="Product Price"
          name="regularprice"
          rules={[
            {
              required: true,
              message: 'Please input your product price!',
            },
          ]}
        >
          <Input type='number'/>
        </Form.Item>

        <Form.Item
          label="Product Discount in taka"
          name="discount"
          rules={[
            {
              required: true,
              message: 'Please input your product discount!',
            },
          ]}
        >
          <Input type='number'/>
        </Form.Item>
         
         <label>select for section</label>

         <Form.Item>
          
            <Select
              style={{
                width: 120,
              }}
              onChange={handleChangeProType}
              options={proType}
            />
         </Form.Item>

        <Form.Item>
    <Select
      defaultValue="Category"
      style={{
        width: 120,
      }}
      onChange={handleChangeCatId}
      options={catlist}
    />
        </Form.Item>

    {

     subCatlist.length > 0 && 
        
        <Form.Item>
    <Select
      defaultValue="SubCategory"
      style={{
        width: 120,
      }}
      onChange={handleChangeCatId}
      options={subCatlist}
    />
        </Form.Item>
    
    }
        
        
        <CKEditor
                    editor={ ClassicEditor }
                    data="<p>Osman</p>"
                    onReady={ editor => {
                        // You can store the "editor" and use when it is needed.
                        console.log( 'Editor is ready to use!', editor );
                    } }
                    onChange={ ( event, editor ) => {
                      setDiscription(editor.getData());
                    } }
                    onBlur={ ( event, editor ) => {
                        console.log( 'Blur.', editor );
                    } }
                    onFocus={ ( event, editor ) => {
                        console.log( 'Focus.', editor );
                    } }
        />

        <Form.Item>
        <input onChange={handleChange} type="file" multiple/>
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



export default AddProduct
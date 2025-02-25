import { Table } from 'antd';
import axios from 'axios';
import React, { useEffect, useState } from 'react'


const ViewProduct = () => {

  let [catlist, setcatlist] = useState([]);

    useEffect(()=>{
      
        async function allcat(){
          
         let data = await axios.get("http://localhost:8000/api/v1/product/allpro");
 
         let catedata= []
 
         data.data.map((item)=>{

          let details = item.discription;
          const oembedRegex = /<oembed[^>]*>/g;
          const oembedMatch = details?.match(oembedRegex);
          
         if (oembedMatch) {
          const oembedUrl = oembedMatch[0].match(/url="([^"]*)"/)[1];
          oembedUrl.replace("watch", "embed");
          
          const iframeElement = `<iframe width="260" height="115" 
          src="https://www.youtube.com/embed/${oembedUrl.split("v=")[1].split("&")[0]}"
          title="YouTube video player" frameborder="0" 
          allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" 
          referrerpolicy="strict-origin-when-cross-origin" allowfullscreen>
          </iframe>`
          
            details = details?.replace(oembedRegex, iframeElement);
         }

           catedata.push({
            key: item._id,
            name: item.name,
            discription: details,
            image: item.image,
           });
         });
         
          setcatlist(catedata);
        }

        allcat();
       },[])


      const columns = [
        {
          title: 'Name',
          dataIndex: 'name',
          key: 'name',
        },
        {
          title: 'Discription',
          dataIndex: 'discription',
          key: 'discription',
          render: (_, record) => 
          <div dangerouslySetInnerHTML={{__html: record.discription}}></div>
        },
        {
          title: 'Image',
          dataIndex: 'image',
          key: 'image',
          render: (_, record) =>  <img width={50} src={`http://localhost:8000${record.image}`}/>,
        },
      ];
 

  return (
    <div>
        <Table dataSource={catlist} columns={columns} />
    </div>
  )
}

export default ViewProduct;
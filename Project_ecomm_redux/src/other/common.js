import axios from 'axios';

import axiosInstance from '../AxiosInterceptor/axiosInterceptor';

const getData = async () => {
    try {
      const response = await axios.get(`https://onlinetestapi.gerasim.in/api/Ecomm/GetAllCategory`);
      console.log(response.data.data);
      return response.data.data;
    } catch (error) {
    }
  }
  
  const getMobileData = async () => {
    try {
      const response = await axiosInstance.get(`https://onlinetestapi.gerasim.in/api/Ecomm/GetAllProductsByCategoryId?id=1`);
      console.log(response.data.data);
      return response.data.data;
    } catch (error) {
    }
  }

  const getTabletData = async () => {
    try {
      const response = await axiosInstance.get(`https://onlinetestapi.gerasim.in/api/Ecomm/GetAllProductsByCategoryId?id=3`);
      console.log(response.data.data);
      return response.data.data;
    } catch (error) {
    }
  }

  const getCameraData = async () => {
    try {
      const response = await axiosInstance.get(`https://onlinetestapi.gerasim.in/api/Ecomm/GetAllProductsByCategoryId?id=2`);
      console.log(response.data.data);
      return response.data.data;
    } catch (error) {
    }
  }

  const commonAPi = async (id) => {
    try {
      const response = await axiosInstance.get(`https://onlinetestapi.gerasim.in/api/Ecomm/GetAllProductsByCategoryId?id=${id}`);
      console.log(response.data.data);
      return response.data.data;
    } catch (error) {
    }
  }


  const incrementQtyLogic = (data,index)=>{
    const product = data;  //product ka array ata hai
    product[index].quantity = product[index].quantity ?  product[index].quantity +1 : 1;
    return product;
  }

  const getParamspair=()=>{
    const urlString = window.location.href;
    const url = new URL(urlString);
    const params1 = new URLSearchParams(url.search);
    const pramspair ={};
    params1.forEach((value, key) => {
        console.log(value, key);
        pramspair[key]= value
    });
    return pramspair;
  }
  export {getData,getMobileData,getCameraData,getTabletData,incrementQtyLogic,commonAPi,getParamspair};





  // {
  //   "ProductId": 0,
  //   "ProductSku": "string",   text
  //   "ProductName": "string",  text
  //   "ProductPrice": 0,    number
  //   "ProductShortName": "string",  text
  //   "ProductDescription": "string",  textarea
  //   "CreatedDate": "2023-11-23T15:24:48.112Z",  send it while submit
  //   "DeliveryTimeSpan": "string",   dropdown 
  //   "CategoryId": 0,   dropdown
  //   "ProductImageUrl": "https://m.media-amazon.com/images/I/51abfjjJj7L._SX569_.jpg"  text field
  // }





  
// query prams for delte api
  //   axios.get("url",{params:{id:productid}})
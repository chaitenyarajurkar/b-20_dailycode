import axios from 'axios';



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
      const response = await axios.get(`https://onlinetestapi.gerasim.in/api/Ecomm/GetAllProductsByCategoryId?id=1`);
      console.log(response.data.data);
      return response.data.data;
    } catch (error) {
    }
  }
  export {getData,getMobileData};





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
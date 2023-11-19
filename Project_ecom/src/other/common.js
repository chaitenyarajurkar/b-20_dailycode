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
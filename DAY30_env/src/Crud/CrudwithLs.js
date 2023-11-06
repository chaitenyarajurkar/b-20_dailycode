import axios from 'axios';
import React, { useEffect, useState } from 'react';

const CrudwithLs = () => {
    const [formData, setFromData] = useState({ "name": "", "address": "" });
    const [allDataStore,setAllDataStore] = useState([]);

    const onchangeHandler = (e, fieldname) => {
        setFromData(prev => ({ ...prev, [fieldname]: e.target.value }));
    }

    const current = new Date();
    console.log(current);
  
    useEffect(()=>{

        const allData = localStorage.getItem("allData");
        if(allData !== null){
            const d= JSON.parse(allData);
            setAllDataStore(d)
        }

        const getEmplyees =async()=>{


            try {
                
                const result = await axios.get("https://onlinetestapi.gerasim.in/api/TeamSync/GetAllEmployee");
                console.log(result)
            } catch (error) {
                
            }
        }
        getEmplyees();
    },[])

    const submitHandler = async(e) => {
        e.preventDefault();
          
        const allData = localStorage.getItem("allData");
        debugger
        if(allData === null){
            const data = [];
            data.push(formData)
            //  localStorage.setItem("allData",JSON.stringify(data));
            setItemtoLS("allData",data);
        }else{
            const oldValue = localStorage.getItem("allData");
            debugger
            const data = JSON.parse(oldValue);
            data.push(formData);
            setAllDataStore(data);
            //  localStorage.setItem("allData",JSON.stringify(data));
            setItemtoLS("allData",data)

        }


        // try {
        //       const response  = await axios.post("https://onlinetestapi.gerasim.in/api/Blog/CreateUser",formData);

        //       console.log(response.data.message)
        // } catch (error) {
            
        // }

    }

    const deleteCall=(index)=>{

        const ls = localStorage.getItem("allData");
        const d= JSON.parse(ls);

       const result = d.filter((item,ind)=>{
                if(index !==ind){
              return item;
                }
                
        })

        setItemtoLS("allData",result);
        setAllDataStore(result);

        console.log(result);




    }

    const setItemtoLS =(key,result)=>{
        localStorage.setItem(key,JSON.stringify(result))
    }
    return (
        <div className='container'>
            <div className='col-6 offset-3'>

           
            <form onSubmit={(e) => submitHandler(e)}>
                <div class="form-group">
                    <label for="exampleInputEmail1">Name</label>
                    <input type="text" value={formData.name} onChange={(e) => onchangeHandler(e, "name")} class="form-control" id="exampleInputEmail1" aria-describedby="emailHelp" placeholder="Enter name" />
                    <small id="emailHelp" class="form-text text-muted">We'll never share your email with anyone else.</small>
                </div>
                <div class="form-group">
                    <label for="exampleInputPassword1">Address</label>
                    <input type="text" value={formData.address} onChange={(e) => onchangeHandler(e, "address")} class="form-control" id="exampleInputPassword1" placeholder="address" />
                </div>

                <button type="submit" class="btn btn-primary">Submit</button>
            </form>
        </div>

        <table>
            <tr>
                <th>Name</th>
                <th>Address</th>
            </tr>

          {allDataStore.map((item,index)=>{
            return (
                <tr>

                <td>{item.name} </td>
                <td>{item.address}</td>
                <td><button  type= "button" className='btn btn-primary' onClick={()=>deleteCall(index)}>Delete</button></td>
            </tr>
            )
          })}
        </table>
        </div>

    );
};

export default CrudwithLs;
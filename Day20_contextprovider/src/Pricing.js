import React, { useEffect, useState } from 'react';
import data from './assets/data.json';
const Pricing = () => {
    // console.log(data);

    const [filteredData, setFiltereddata] = useState([]);
    const [searchVal,setSearchVal] = useState("");
    const [searchbyvalue,setSearchByvalue] = useState("All");
    const dropdwonvalue = ["All","userId","id","title","title","body"];
    
    useEffect(() => {
        setFiltereddata(data);
    }, [])
 
    const searchHandler=(e)=>{
        const value = e.target.value;
        setSearchVal(value);

        const result = data.filter((item)=>{
            let obj;

                    for(let x in item){
                        if(item[x].toString().includes(value)){
                            obj = item;
                            break;

                        }
                    }
                   
                    return obj ? obj : null;
                //   return item[searchbyvalue].toString().includes(value) ? item :null;
        })
         
        console.log(result);
        setFiltereddata(result);

    }

    
    return (
        <div className='container'>
            <div className='row mt-3'>
                   <div className='col-4'>
                      <input type='text' value={searchVal} className='form-control mt-3' onChange={(e)=> searchHandler(e)} placeholder='search'></input>

                   </div>
                   <div className='col-4'>
                    <select className="form-control mt-3" aria-label="Default select example" value={searchbyvalue} onChange={(e) => setSearchByvalue(e.target.value)}>
                        {dropdwonvalue.map((item) => {
                            return (
                                <option value={item}>{item}</option>

                            )
                        })}
            </select>
                   </div>
            </div>
           
            <table class="table mt-3">
                <thead>
                    <tr>
                        <th scope="col">userId</th>
                        <th scope="col">id</th>
                        <th scope="col">title</th>
                        <th scope="col">body</th>
                    </tr>
                </thead>
                <tbody>
                    {filteredData.map((item, index) => {
                        return (
                            <tr>
                                <th scope="row">{item.userId}</th>
                                <td>{item.id}</td>
                                <td>{item.title}</td>
                                <td>{item.body}</td>
                            </tr>
                        )
                    })}


                </tbody>
            </table>
        </div>
    );
};

export default Pricing;
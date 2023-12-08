import axios from 'axios';
import React, { useState } from 'react';
import Label from '../UI/Label/Label';
import Text from '../UI/Text/Text';

const Login = () => {


    const [formData, setFormData] = useState({
        username: "", paasword: "",email:""
    })
   const [eror,setError] = useState([]);
    const onChangeHandler = (fieldname, value) => {
        debugger
        setFormData(prev => ({ ...prev, [fieldname]: value }));
    }
    const submitHandler = async(e) => {
        e.preventDefault();
        let errorArray = [];
        const { username, paasword } = formData;


        // if (username === "") {
        //     errorArray.push("username")

        // }
        // if (paasword === "") {
        //     errorArray.push("paasword")

        // }

        for(let x in formData){
            if(formData[x] === ""){
                errorArray.push(x)  
            }
        }
        setError(errorArray);

        if (errorArray.length <= 0) {

            if(username === "admin" && paasword==="1234"){
                //   adminlogic

                localStorage.setItem("isAdmin",true);
                alert("Login Succesfull");
                window.location.href = "/";
            }

            else{

           
            //api hit 
           let reqBdy ={
            "UserName":username,
            "UserPassword": paasword
           }

           const result  = await axios.post(`https://onlinetestapi.gerasim.in/api/Ecomm/Login`,reqBdy);

           console.log(result.data);
           const response = result.data
           if(response.data !== null  && response.result ){
               localStorage.setItem("userInfo",JSON.stringify(response.data));
               alert("Login Succesfull");
               window.location.href = "/";
              
           }else{
            alert(response.message)
           }
            // {
            //     "UserName": "3874834783478347",
            //     "UserPassword": "prava@1234"
            //   }

        }
         }
    }

    const handleError = (value) => {

      return  eror.indexOf(value) > -1 ? true : false;
   }
     

    return (
        <div className='container offset-3 col-6 pt-3'>

            <form onSubmit={(e) => submitHandler(e)}>
                <div className="form-group mt-2">
                    <Label labelName="User Name"></Label>
                    <input type="text" value={formData.username} onChange={(e) => onChangeHandler("username", e.target.value)}
                        class={ handleError("username") ? "form-control is-invalid" : "form-control"} id="exampleInputEmail1" placeholder="Enter UserName" />
                   { handleError("username") && <div className="invalid-feedback">
                        Please provide a valid city.
                    </div>}
                </div>
                <div className="form-group mt-2">
                <Label labelName="User Paasword"></Label>
                    <input type="password" value={formData.paasword} onChange={(e) => onChangeHandler("paasword", e.target.value)}
                       class={ handleError("paasword") ? "form-control is-invalid" : "form-control"} id="exampleInputPassword1" placeholder="Password" />
                   {handleError("paasword") &&  <div className="invalid-feedback">
                        Please provide a valid city.
                    </div>}
                </div>

                <button type="submit" className="btn btn-primary mt-2">Submit</button>

                <div className="form-group mt-2">
                    <Label labelName="Email"></Label>
                    <Text type="email"  value={formData.email}  placeholder="please enter email "
                       onChange={onChangeHandler} fieldname="email"
                    ></Text>
                    
                </div>
            </form>
        </div>
    );
};

export default Login;
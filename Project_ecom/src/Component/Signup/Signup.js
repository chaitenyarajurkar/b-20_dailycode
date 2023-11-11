import React, { Component } from 'react';

class Signup extends Component {
        constructor(props) {
            super(props);
            this.state={
                username:"shubham",
                paasword:"",
                errror:[],
                formData:{}
            }
        }
        
// ravina

 functionname=()=>{
     this.setState(prev=>({
         ...prev,
        username:"raviana"   
     }))
}



    render() {
        return (
            <div>

                <p>{this.state.username}</p>
                <button onClick={()=>this.functionname()}>Click here</button>
            </div>
        );
    }
}

export default Signup;
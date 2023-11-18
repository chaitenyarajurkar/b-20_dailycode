import React, { Component } from 'react';

class Signup extends Component {

    constructor(props) {
        super(props);

        this.state={
            name:"",
            address:"",
            mobileNo:["94893893893"]
        }
        //api will not call here
    }

    componentDidMount(){
        console.log("componentDidMount")
        this.setState({
            name:"code first",
            address:"pune",
            mobileNo:[...this.state.mobileNo,"43849348394839"]
        })
        //api call kr skte
    }

    onChangeHandler(){
        //form logic
    
    }

    render() {

        const {name,address,mobileNo} = this.state;

        return (
            <div>
                <h1>{name}</h1>
                <h1>{address}</h1>
                {/* <h1>{mobileNo}</h1> */}
                {mobileNo.map((item)=>{
                    return(
                        <p>{item}</p>
                    )
                })}
           
            </div>
        );
    }
}

export default Signup;
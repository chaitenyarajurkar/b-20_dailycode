import React, { Component } from 'react';
import ClassCompTwo from './ClassCompTwo';

class ClassComp extends Component {
     constructor(props) {
        console.log("constructor",props)
        super(props);
        this.state={
            color:"red"
        }
     }

     static getDerivedStateFromProps(props,state){
        console.log("getDerivedStateFromProps",props,state);
        return {
            color:props.color
        }
     }

     
     componentDidMount(){
        console.log("componentDidMount",this.props);

        // this.setState
     }

  
    render() {
        console.log("render call",this.props)
        return (
            <div>
                <h1>Hello world</h1>
                <ClassCompTwo name="code first academy pune"></ClassCompTwo>
            </div>
        );
    }
}

export default ClassComp;



// class lifecycle

// Mounting 

// Updating

// unMounting
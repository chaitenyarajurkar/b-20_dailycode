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

    //  static getDerivedStateFromProps(props,state){
    //     console.log("getDerivedStateFromProps",props,state);
    //     return {
    //         color:props.color
    //     }
    //  }

     
     componentDidMount(){
        console.log("componentDidMount",this.props);

        // this.setState
     }

     
     componentDidUpdate(){
        console.log("comcomponentDidUpdate parent")
     }


     getSnapshotBeforeUpdate(prevProps,prevState){
        console.log(prevProps,prevState)
        return true
     }
  
     componentWillUnmount(){
        console.log("component is unmount")
     }
    render() {
        console.log("render call",this.props)
        return (
            <div>
                <h1>Hello world</h1>
                <button onClick={()=>this.setState(prev=>({...prev,color:"yellow"}))}>change color</button>
                <ClassCompTwo color={ this.state.color} ></ClassCompTwo>
            </div>
        );
    }
}

export default ClassComp;



// class lifecycle

// Mounting 

// Updating

// unMounting
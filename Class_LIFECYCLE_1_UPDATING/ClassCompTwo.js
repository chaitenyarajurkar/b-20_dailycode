import React, { Component } from 'react';

class ClassCompTwo extends Component {

    constructor(props) {
        console.log("constructor child")
        super(props);
        this.state={
            color:"code first"
        }
    }

    static getDerivedStateFromProps(props,state){
        console.log("getDerivedStateFromProps child",props,state);
        return {
            color:props.color
        }
     }

    shouldComponentUpdate(){
        console.log("shouldComponentUpdate")
        return true
    }

    componentDidMount(){
        console.log("componentDidMount child",this.props);

        // this.setState
     }

     componentDidUpdate(){
        console.log("comcomponentDidUpdate child")
     }
     getSnapshotBeforeUpdate(prevProps,prevState){
        console.log(prevProps,prevState)

        return true;
     }
    

     
    render() {

        console.log("render  child")
        return (
            <div>
              child ==  {this.state.color}
            </div>
        );
    }
}

export default ClassCompTwo;
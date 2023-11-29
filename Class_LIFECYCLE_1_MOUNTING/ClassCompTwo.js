import React, { Component } from 'react';

class ClassCompTwo extends Component {

    constructor(props) {
        console.log("constructor child")
        super(props);
        this.state={
            name:"code first"
        }
    }

    static getDerivedStateFromProps(props,state){
        console.log("getDerivedStateFromProps child",props,state);
        return {
            name:props.name
        }
     }

    componentDidMount(){
        console.log("componentDidMount child",this.props);

        // this.setState
     }


    
    render() {

        console.log("render  child")
        return (
            <div>
                
            </div>
        );
    }
}

export default ClassCompTwo;
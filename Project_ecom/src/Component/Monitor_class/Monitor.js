import React, { Component } from 'react';

class Monitor extends Component {
    constructor(props) {
        super(props);
        this.state = {favoritecolor: "red"};
      }
      componentDidMount(){
        console.log("componentDidMount")
      }
      static getDerivedStateFromProps(props, state) {
        console.log("getDerivedStateFromProps")
        return {favoritecolor: props.favcol };
      }
      changeColor = () => {
        this.setState({favoritecolor: "blue"});
      }
      render() {
        console.log("render")
        return (
          <div>
          <h1>My Favorite Color is {this.state.favoritecolor}</h1>
          <button type="button" onClick={this.changeColor}>Change color</button>
          </div>
        );
      }
}

export default Monitor;
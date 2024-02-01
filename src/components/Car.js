import React, { Component } from "react";

class Car extends Component
{
      constructor(props){
            super(props);
            this.state= {
                  color:"blue" ,
                  brand:"Maruti"
            };
      }
       changeColor=() => {
             this.setState({color:"red"});
             this.setState({brand:"AUDI"});
      }
      render()
      {
            return(
                  <div>
                   <p>This is a Class Component </p>
                   <p>{this.props.brand} </p>
                   <p>{this.state.brand} </p>
                   <p>{this.state.color}</p>
                   <button onClick={this.changeColor}>ChangeTheColor</button>
                   </div>
                  );
      }
}
//Named Export with class Component
export class Bike extends Component{
      render(){
            return(
                  <p>This is Bike Component</p>
            );
      }
}
export default Car;
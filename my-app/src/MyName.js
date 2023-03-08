import React from 'react';

class Name extends React.Component{
    constructor(props){
        super(props)
        
        this.state = {
            clicks : 0 /*declaring an object inside a variable.*/
        } 
    }
    Clickme(){
        this.setState({
            clicks : this.state.clicks + 1
        })
        console.log("You have clicked", this.props.name, this.state.clicks + 1, "times")/*display in the console.*/
    }
    render(){
        return(
            <div>
                <h1 onClick={() => this.Clickme()}>I am here for {this.props.name}.js</h1>
              
                <span>U have clicked {this.state.clicks} times</span>
            </div>/*onClick is a method used to execute a particular method on click.*/
            
        )
    }
}
export default Name;
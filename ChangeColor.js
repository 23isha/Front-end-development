import React,{Component} from 'react'
class ChangeColor extends Component{
    constructor(props){
       super(props);
       this.state={
        color:'#FF0FF'
       };
    }
    redHandler=()=>{
        this.setState({color:"#FF0000"});
    };
    blueHandler=()=>{
        this.setState({color:"#00FF00"});
    };
    greenHandler=()=>{
        this.setState({color:"#0000FF"});
    };
    render(){
        return(
            <div>
             <h1 style={{ color: this.state.color }}>Hello</h1>
            <button onClick={this.redHandler}>red</button>
            <button onClick={this.greenHandler}>green</button>
            <button onClick={this.blueHandler}>blue</button>
            </div>
            
        );
    }
}
export default ChangeColor;
//mainapp.js
import React, { Component } from 'react';
import { Redirect, Route, BrowserRouter , Link} from 'react-router-dom';

import logo from './logo.svg';
import './App.css';
import './w3.css';
import App from "./App.js";
import {mqttTopics} from "./App.js";


class MyRouter extends React.Component {
    render () {
      return (
        <BrowserRouter>
          <Route path='/'  component={() => <App mqttTopics={this.props.page} />} />
          <Link to="/insert/your/path/here" >hello</Link>
        </BrowserRouter>


      )
    }
  }
class Button extends React.Component {
    constructor(props) {
      super(props);
      this.state = {btn: "0"};
      
      // This binding is necessary to make `this` work in the callback
      this.handleClick = this.handleClick.bind(this);
    }
  
    handleClick() {
      this.setState(state => ({
        isToggleOn: !state.isToggleOn
      }));

      console.log(this.props.name);
      if(this.props.name==="EMS1"){
        
      this.setState({btn:"ems1"});
    }
    else if(this.props.name==="EMS2"){
        this.setState({btn:"ems2"});
    }
      /*if (this.state.isToggleOn){
        console.log("toggle on");
        
      }
      else{
        console.log("toggle off");
        
      }
    */
    }

    
    render() {
        if(this.state.btn=="ems1"){
            console.log("mqqq");
        return (<MyRouter page={"EMS1"}/>);
        }
        else if(this.state.btn=="ems2"){
            return (<MyRouter page={"EMS2"}/>);
            }
        return (
    
    <div>
        
        
      
          <button className= "w3-btn w3-block w3-teal w3-round-large"   onClick={this.handleClick}>
            {this.props.name
            
            }
            
          </button>
          </div>
        );
      }
    }
    class SideBar extends React.Component{
  
  
        state={b1:0,
        b2:0,
      b3:0
    
        }
    
      
        btnList=[
          "Device 1",
          "Device 2",
          "Device 3"
          
        ];
        btnCounter=3;
      handleClick(n,bList){
        
        if(n===1){
          this.setState({
            b1: 1
          });
          console.log("button 1 =",this.state.b1);
        }
        else if(n===2){
          this.setState({
            b2: 1
          });
          console.log("button 2 =",this.state.b2);
          
            console.log("mqqq");
        
        
        }
    
        else if(n===3){
          this.setState({
            b3: 1
          });
          console.log("button 3 =",this.state.b3);
        }
    
        else if(n===99){
          this.setState({
            b3: 1
          });
          console.log("button 4-add =",this.state.b3);
          this.btnCounter++;
          this.btnList.push("Device "+this.btnCounter)
          
        }
        console.log("button pressed===",n);
        
      }
     
    
      render(){
    
       
        
       
        var m=(
          <div>
      
       <div className="w3-sidebar w3-light-grey w3-bar-block w3-animate-opacity" style={{width:'20%'}}>
        <h3 className="w3-bar-item">Devices</h3>
    
        
        {/* <button onClick={(e)=>this.handleClick(1,e)} className="w3-bar-item w3-button w3-ripple w3-teal">Device 1
        
        </button>
        <button onClick={(e)=>this.handleClick(2,e)} className="w3-bar-item w3-button w3-ripple w3-teal">Device 2</button>
        <button onClick={(e)=>this.handleClick(3,this.btnList,e)}  className="w3-bar-item w3-button w3-ripple w3-teal">Device 3</button >
         */}
    
        <div>
      {this.btnList.map((ml,i)=>
      <div key={i}>
        <button onClick={(e)=>this.handleClick(i,e)}  className="w3-bar-item w3-button w3-ripple w3-teal">{this.btnList[i]}</button > 
      </div>
    
    
      )}
    </div>
        
        
          <div style={{position:"absolute", bottom:0, left:"40%"}}>
        
          <button className="w3-button w3-teal" onClick={(e)=>this.handleClick(99,e)}>+</button>
          </div>
        
      </div>
            </div>
        );
        return(m);
      }
    }
    
class MainApp extends Component {
    constructor(props){
      super(props);
      this.state={dropDown:'', TextBox:'', humid:0,alarmSentFlag:0}
      
      //setInterval(this.CheckTheValues, 1000);
   
      
    }
    
    
       
    
    render() {
  
      return (
       /* <Connector mqttProps="ws://test.mosquitto.org:8000/mqtt" >*/
        <div className="App">
        <SideBar />
        <div style={{marginLeft:'18', marginRight:-130.5}}>
        <div className="w3-container w3-teal">
    <h3>
      <img src={logo} className="App-logo" alt="logo"  style={{height:40}}/>
    Industrial Environment Monitor
    
    </h3>
  </div>
        
        <header className="App-header">
  
  
        <Button name="EMS1" />
        <br/>
        <Button name="EMS2" />
  
  
        <br/>
        <br/>
        <br/>
        <br/>
          </header>
          </div>
          </div>
        
  
  //        </Connector>  
        
      );
    }
  }
  
  export default MainApp;
  
  
  
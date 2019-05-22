//mainapp.js
import React, { Component } from 'react';


import logo from './logo.svg';
import './App.css';
import './w3.css';
import SideBar from './SideBar.js'



    
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
  
  
       
        <h4>Select a Device from SideBar</h4>
  
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
  
  
  
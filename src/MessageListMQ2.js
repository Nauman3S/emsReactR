import React from 'react';

import  "./lengthOf.js";
import MQChart from './MQChart.js';
//import { ReactComponent } from '*.svg';


var MQGraph=[{name:0,LPG:0,CO:0,Smoke:0}];
export default ({data,type}) => {
 // const dataList = data.map((d) => <li>{d}</li>)


  console.log("dataa",data);
  try{

    //remove first 10 entries if total length is greater than 20
var size = Object.size(data);
if(size>=20){
  console.log("size increased removing");
  for(var i=0;i<10;i++){
    data.shift();
  }
}
console.log("length of data", size);
    console.log("type of data", typeof data);
   }
   catch(err){
     console.log("error occurred while calculating length");
   }
  console.log("d0",data[0]);
  var k=data[0]
  //var valuesArray=[];
  
 
  
  //console.log("props",props);
  console.log("props",type);

  if(type==="MQChart"){
 /* var valArr=[{name:0, LPG:0, CO:102.3, Smoke:23.43}];
valArr.push({name:1, LPG:10, CO:22.3, Smoke:0.43});
valArr.push({name:2, LPG:50, CO:1.3, Smoke:98.43});
*/

var dt = new Date();
  var utcDate = dt.toUTCString();
  console.log(utcDate);
  
  if(data[0]!=null){
    try{
      var arr4=data[0].split(";");
      console.log(arr4);
      if (arr4[0]==="Sensor"){
        if (arr4[1]==="MQ2"){
     
  var k={name:utcDate,LPG: parseInt(arr4[2]),CO: parseInt(arr4[3]),Smoke: parseInt(arr4[4])};
  try{

    //remove first 10 entries if total length is greater than 20
var size = Object.size(MQGraph);
if(size>=20){
  console.log("size increased removing");
  for(var i=0;i<10;i++){
    MQGraph.shift();
  }
}
console.log("length of dht22", size);
    console.log("type of dht22", typeof MQGraph);
   }
   catch(err){
     console.log("error occurred while calculating length");
   }
  MQGraph.push(k);
  console.log("MQGraphGraph", MQGraph);
  return (<MQChart val={MQGraph} def="MQ2 Sensor"/> );

        }
      }
    }
    catch(err){
    console.log("error while splitting data array");
  }
  }
  else{
    var MQGraphDef=[{name:0, LPG:0, CO:0, Smoke:0}];
    return (<MQChart val={MQGraphDef} def="Temperature Sensor"/> );
  }


//return(<MQChart val={valArr} def="Gas Sensor"/>);
}


else{
    return(<div>No Data</div>)
}
  return (
    <div>
       
    
     {/* <h3>Messages</h3>
      <ul>
        {dataList}
        
      </ul>

     */}
    </div>
  )

}

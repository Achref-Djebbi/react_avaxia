import React, {Component} from 'react';
import { render } from 'react-dom';


// @material-ui/core components
import { makeStyles } from "@material-ui/core/styles";
import axios from "axios";
// core components
import Typography from '@material-ui/core/Typography';
import GridItem from "components/Grid/GridItem.js";
import GridContainer from "components/Grid/GridContainer.js";
import CustomInput from "components/CustomInput/CustomInput.js";
import Button from "components/CustomButtons/Button.js";
import Card from "components/Card/Card.js";
import CardHeader from "components/Card/CardHeader.js";
import TextField from '@material-ui/core/TextField';
import CardBody from "components/Card/CardBody.js";
import CardFooter from "components/Card/CardFooter.js";
import MaterialUIForm from 'react-material-ui-form'
//import Button from '@material-ui/core/Button';
import Dialog from '@material-ui/core/Dialog';
import DialogActions from '@material-ui/core/DialogActions';
import DialogContent from '@material-ui/core/DialogContent';
import DialogTitle from '@material-ui/core/DialogTitle';
import InputLabel from '@material-ui/core/InputLabel';
import Input from '@material-ui/core/Input';
import MenuItem from '@material-ui/core/MenuItem';
import FormControl from '@material-ui/core/FormControl';
import Select from '@material-ui/core/Select';
import  { useState } from 'react';
import { useHistory } from "react-router-dom";
import Selectsys from './selectsys';
import Chip from '@material-ui/core/Chip';
import MonitoringForms from './monitoringforms';

//import { Landscape } from "@material-ui/icons";

class Monitoring extends Component{
  constructor(props){
    super(props);
   this.state = {
      ccbjisy:[],
      quadiant:[],
      ccelm:[],
      qaelm:[],
      slectedcl:"",
      slectedsys:"",
  };
  };

componentDidMount =() => {
  let  tcc=this.jibsys("ccbji")
  let  tq=this.jibsys("quadiant")

  this.setState({
  ccbjisy:tcc,
  quadiant:tq,
  
  });
  

};



 jibsys = (sys) => {
    let cci=1;
    let qi=1;
    let ccbji=[];
    let quadiant=[];
    axios.get("/system").then(function(response){
     response.data.forEach(element => {
          if (element.clientname ==="CCBJI"){
            ccbji[cci]={value: cci , label: element.name}
            cci=cci+1;
          }
            if (element.clientname ==="QUADIANT"){
              quadiant[qi]={value: qi , label: element.name}
              qi=qi+1;
          }
          
         
     });
    });
    if (sys === "ccbji"){ return ccbji}
    if (sys === "quadiant"){ return quadiant}
 
    };


    loadccelm= () => {
      let i=0;
      let e=[];
      this.state.ccbjisy.forEach(element => {
        
        e[i] =<option value={element.value}>{element.label}</option>
        i=i+1
        this.setState({
          ccelm:e,
          
          });
      });
    }
          loadqaelm= () => {
            let i=0;
            let e=[];
            this.state.quadiant.forEach(element => {
              
              e[i] =<option value={element.value}>{element.label}</option>
              i=i+1
              this.setState({
                qaelm:e,
                
                });
             
             });
            }
      
      
      
  

    check  = (client) => {
      
      this.setState({
        slectedcl:client,
        
        });
      
    }
    checksys  = (sys) => {


      if (sys=== "off"){ 
        this.setState({
          slectedsys:"",
});
       }else{

if (this.state.slectedcl === "quadient"){
      this.state.quadiant.forEach(element => {
         if (element.value == sys){
            this.setState({
              slectedsys:element.label,
});

}
      })
    }  
     
    
    if (this.state.slectedcl === "ccbji"){
      this.state.ccbjisy.forEach(element => {
         if (element.value == sys){
            this.setState({
              slectedsys:element.label,
});

}
      })
    }  
      
  }


    }
sendlist = () => {
let cl= this.state.slectedcl;

    if (cl === "ccbji"){
      return  this.state.ccelm
    }
    if (cl === "quadient"){
      return  this.state.qaelm
    }
    if (cl === ""){
      return  [<option value=''></option>]
    }
  
}


render(){
   
  
    
  
  
return(
<div>
  {console.log(this.state.ccbjisy)}
<GridContainer>




        
  <GridItem xs={12} sm={12} md={12}>
    <Card variant="outlined">
    <GridContainer >
       <GridItem xs={4} direction='row'>
           <Selectsys  o = {this.sendlist()} check={this.check} checksys={this.checksys} loadccelm={this.loadccelm} loadqaelm={this.loadqaelm} />
       </GridItem>
       <GridItem xs={2} direction='row'><Chip color="primary" label="Client:"></Chip></GridItem>
       <GridItem xs={2} direction='row'><Typography variant="subtitle2" gutterBottom>{this.state.slectedcl}</Typography></GridItem>
       <GridItem xs={2} direction='row' > <Chip color="primary" label="System:"></Chip></GridItem>
       <GridItem xs={2} direction='row' > <Typography variant="subtitle2" gutterBottom>{this.state.slectedsys}</Typography></GridItem>
    </GridContainer>
      
     
    </Card>
  </GridItem>

  <GridItem xs={12} sm={12} md={12}>
<MonitoringForms />
</GridItem>
</GridContainer>


</div> 
)




}


}
export default Monitoring;
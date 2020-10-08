/*eslint-disable*/
import React from "react";
// @material-ui/core components
import { makeStyles } from "@material-ui/core/styles";
import Hidden from "@material-ui/core/Hidden";
// core components
import GridItem from "components/Grid/GridItem.js";
import GridContainer from "components/Grid/GridContainer.js";
import Card from "components/Card/Card.js";
import CardHeader from "components/Card/CardHeader.js";
import CardBody from "components/Card/CardBody.js";
import TextField from '@material-ui/core/TextField';
import styles from "assets/jss/material-dashboard-react/views/iconsStyle.js";
import Paper from '@material-ui/core/Paper';
import Button from '@material-ui/core/Button';
import Typography from '@material-ui/core/Typography';
import Link from '@material-ui/core/Link';
import { useHistory } from "react-router-dom";



const useStyles = makeStyles((theme) => ({
  root: {
    marginTop:100,
    marginLeft:400,
   
    '& > *': {
      margin: theme.spacing(1),
      width: theme.spacing(70),
      height: theme.spacing(50),
    },
  },
}));



export default function LoginPage() {
    
    
    let history = useHistory();
  
    function handleClick() {
      history.push("/admin");
    }

  const classes = useStyles();
  const preventDefault = (event) => event.preventDefault();
  return (
    <GridContainer align="center" gutterBottom variant="h3" component="h2" >
     
     <GridItem xs={12} sm={6} md={12} >
      <div className={classes.root}>
      <Paper elevation={3}  >

      <Typography variant="h3" component="h2" gutterBottom>Login</Typography>
    <GridContainer direction="row" >
          <GridItem xs={12} sm={12} md={12} ><TextField id="standard-basic" label="UserName" /></GridItem>
          <GridItem  xs={12} sm={12} md={12} ><TextField id="standard-basic" label="PassWord" /></GridItem>
          <GridItem  xs={12} sm={12} md={12} >
          

              <Button variant="contained" color="primary"  onClick={handleClick}>OK</Button>
          
          </GridItem>
    </GridContainer>
      </Paper>
      </div>
      </GridItem>
      
    </GridContainer>
  );
}

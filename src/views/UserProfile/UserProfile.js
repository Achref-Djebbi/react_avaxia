import React from "react";
// @material-ui/core components
import { makeStyles } from "@material-ui/core/styles";

// core components
import GridItem from "components/Grid/GridItem.js";
import GridContainer from "components/Grid/GridContainer.js";
import CustomInput from "components/CustomInput/CustomInput.js";
import Button from "components/CustomButtons/Button.js";
import Card from "components/Card/Card.js";
import CardHeader from "components/Card/CardHeader.js";
import TextField from '@material-ui/core/TextField';
import CardBody from "components/Card/CardBody.js";
import CardFooter from "components/Card/CardFooter.js";

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
//import { Landscape } from "@material-ui/icons";



const styles = {
  cardCategoryWhite: {
    color: "rgba(255,255,255,.62)",
    margin: "0",
    fontSize: "14px",
    marginTop: "0",
    marginBottom: "0"
  },
  cardTitleWhite: {
    color: "#FFFFFF",
    marginTop: "0px",
    minHeight: "auto",
    fontWeight: "300",
    fontFamily: "'Roboto', 'Helvetica', 'Arial', sans-serif",
    marginBottom: "3px",
    textDecoration: "none"
  },

  formControl: {
    color: "#FFFFFF",
    marginTop: "0px",
    minHeight: "auto",
    fontWeight: "300",
    fontFamily: "'Roboto', 'Helvetica', 'Arial', sans-serif",
    marginBottom: "3px",
    textDecoration: "none",
    minWidth: 120,
  },

};

const useStyles = makeStyles(styles);

export default function UserProfile() {
  const classes = useStyles();
  
  const [open, setOpen] = React.useState(false);
  const [ccbji, setc] = React.useState('');
  const [quadient, setq] = React.useState('');
  const [system, setl] = React.useState('');
  const [landscape, sets] = React.useState('');

  const handleChange = (event) => {
    setc(Number(event.target.value) || '');
    setq(Number(event.target.value) || '');
    setl(Number(event.target.value) || '');
    sets(Number(event.target.value) || '');
  };

  
  const handleClickOpen = () => {
    setOpen(true);
  };

  const handleClose = () => {
    setOpen(false);
  };
  return (
    <div>
      <GridContainer>




        
      <GridItem xs={12} sm={12} md={12}>
          <Card>
                <CardBody>
                <Button onClick={handleClickOpen}>Select The LandScape and the Systems</Button>
      <Dialog disableBackdropClick disableEscapeKeyDown open={open} onClose={handleClose}>
        <DialogTitle>Fill the form</DialogTitle>
        <DialogContent>
          <form className={classes.container}>
            <FormControl className={classes.formControl}>
              <InputLabel htmlFor="demo-dialog-native">LandScape</InputLabel>
              <Select
                native
                value={landscape}
                onChange={handleChange}
                input={<Input id="demo-dialog-native" />}
              >
                <option aria-label="None" value="" />
                <option>CCBJI</option>
                <option>Quadient</option>
                
              </Select>
            </FormControl>
            <FormControl className={classes.formControl}>
              <InputLabel id="demo-dialog-select-label">System</InputLabel>
              <Select
                labelId="demo-dialog-select-label"
                id="demo-dialog-select"
                value={system}
                onChange={handleChange}
                input={<Input />}
              >
                <MenuItem value="">
                  <em>None</em>
                </MenuItem>
                <MenuItem >PJR</MenuItem>
                <MenuItem >PJE</MenuItem>
                <MenuItem >PJA</MenuItem>
              </Select>
            </FormControl>
          </form>
        </DialogContent>
        <DialogActions>
          <Button onClick={handleClose} color="primary">
            Cancel
          </Button>
          <Button onClick={handleClose} color="primary">
            Ok
          </Button>
        </DialogActions>
      </Dialog>
                </CardBody>
          </Card>
      </GridItem>




        <GridItem xs={12} sm={12} md={12}>
          <Card>
            <CardHeader color="primary">
              <h4 className={classes.cardTitleWhite}>SM12 : Lock entry List</h4>
              
            </CardHeader>
            <CardBody>
              
              <GridContainer>

                
                <GridItem xs={12} sm={12} md={4}>
                  <CustomInput
                    labelText="User"
                    id="city"
                    formControlProps={{
                      fullWidth: true
                    }}
                  />
                </GridItem>


                <GridItem xs={12} sm={12} md={4}>
                  <CustomInput
                    labelText="Table"
                    id="country"
                    formControlProps={{
                      fullWidth: true
                    }}
                  />
                </GridItem>


                <GridItem xs={12} sm={12} md={4}>
                  <TextField    
                    id="date"    
                    label="Date"    
                    type="date"        
                    className={classes.textField}    
                    InputLabelProps={{shrink: true,fullWidth: true}}
                  />
                </GridItem>



              </GridContainer>
              
            </CardBody>
            <CardFooter>
              <Button color="primary">Submit</Button>
            </CardFooter>
          </Card>
        </GridItem>
        
      </GridContainer>
    
      <GridContainer>
        <GridItem xs={12} sm={12} md={12}>
          <Card>
            <CardHeader color="primary">
              <h4 className={classes.cardTitleWhite}>ST22 : ABAP dumps</h4>
              
            </CardHeader>
            <CardBody>
              
              <GridContainer>

                
              <GridItem xs={12} sm={12} md={6}>
                  <CustomInput
                    labelText="Dumps"
                    formControlProps={{
                      fullWidth: true
                    }}
                    inputProps={{
                      multiline: true,
                      rows: 10
                    }}
                  />
                </GridItem>


                <GridItem xs={12} sm={12} md={6}>
                  <CustomInput
                    labelText="Number"
                    id="country"
                    formControlProps={{
                      fullWidth: true
                    }}
                  />
                </GridItem>

                
                


              </GridContainer>
              
            </CardBody>
            <CardFooter>
              <Button color="primary">Submit</Button>
            </CardFooter>
          </Card>
        </GridItem>
        <Button color="success">System Done</Button>
      </GridContainer>
    </div>
  );
}

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
  }
};

const useStyles = makeStyles(styles);

export default function UserProfile() {
  const classes = useStyles();
  return (
    <div>
      <GridContainer>
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

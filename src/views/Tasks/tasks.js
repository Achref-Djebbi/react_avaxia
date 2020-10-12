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

export default function Tasks() {
  const classes = useStyles();
  return (
    <div>
      <GridContainer>
      <h1>CCBJI SYSTEMS</h1>
      </GridContainer>
      <GridContainer>
         
        <GridItem xs={4} sm={4} md={4}>
          <Card>
            <CardHeader color="primary">
              <h4 className={classes.cardTitleWhite}>PJR</h4>
              
            </CardHeader>
            <CardBody>
              
              <GridContainer> 
                <GridItem xs={6} sm={6} md={6}>
                  <CustomInput
                    labelText="User"
                    id="city"
                    formControlProps={{
                      fullWidth: true
                    }}
                  />
                </GridItem>
                <GridItem xs={4} sm={4} md={4}>
                  <CustomInput
                    labelText="Done or not"
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
        <GridItem xs={4} sm={4} md={4}>
          <Card>
            <CardHeader color="primary">
              <h4 className={classes.cardTitleWhite}>PJE</h4>
              
            </CardHeader>
            <CardBody>
              
              <GridContainer> 
                <GridItem xs={4} sm={4} md={4}>
                  <CustomInput
                    labelText="User"
                    id="city"
                    formControlProps={{
                      fullWidth: true
                    }}
                  />
                </GridItem>
                <GridItem xs={4} sm={4} md={4}>
                  <CustomInput
                    labelText="Done or not"
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
        <GridItem xs={4} sm={4} md={4}>
          <Card>
            <CardHeader color="primary">
              <h4 className={classes.cardTitleWhite}>PJA</h4>
              
            </CardHeader>
            <CardBody>
              
              <GridContainer> 
                <GridItem xs={4} sm={4} md={4}>
                  <CustomInput
                    labelText="User"
                    id="city"
                    formControlProps={{
                      fullWidth: true
                    }}
                  />
                </GridItem>
                <GridItem xs={4} sm={4} md={4}>
                  <CustomInput
                    labelText="Done or not"
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


      </GridContainer>







      <GridContainer>
         
         <GridItem xs={4} sm={4} md={4}>
           <Card>
             <CardHeader color="primary">
               <h4 className={classes.cardTitleWhite}>PJB</h4>
               
             </CardHeader>
             <CardBody>
               
               <GridContainer> 
                 <GridItem xs={4} sm={4} md={4}>
                   <CustomInput
                     labelText="User"
                     id="city"
                     formControlProps={{
                       fullWidth: true
                     }}
                   />
                 </GridItem>
                 <GridItem xs={4} sm={4} md={4}>
                   <CustomInput
                     labelText="Done or not"
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
         <GridItem xs={4} sm={4} md={4}>
           <Card>
             <CardHeader color="primary">
               <h4 className={classes.cardTitleWhite}>PJF</h4>
               
             </CardHeader>
             <CardBody>
               
               <GridContainer> 
                 <GridItem xs={4} sm={4} md={4}>
                   <CustomInput
                     labelText="User"
                     id="city"
                     formControlProps={{
                       fullWidth: true
                     }}
                   />
                 </GridItem>
                 <GridItem xs={4} sm={4} md={4}>
                   <CustomInput
                     labelText="Done or not"
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
         <GridItem xs={4} sm={4} md={4}>
           <Card>
             <CardHeader color="primary">
               <h4 className={classes.cardTitleWhite}>PJG</h4>
               
             </CardHeader>
             <CardBody>
               
               <GridContainer> 
                 <GridItem xs={4} sm={4} md={4}>
                   <CustomInput
                     labelText="User"
                     id="city"
                     formControlProps={{
                       fullWidth: true
                     }}
                   />
                 </GridItem>
                 <GridItem xs={4} sm={4} md={4}>
                   <CustomInput
                     labelText="Done or not"
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
 
 
       </GridContainer>






       <GridContainer>
         
         <GridItem xs={4} sm={4} md={4}>
           <Card>
             <CardHeader color="primary">
               <h4 className={classes.cardTitleWhite}>PJX</h4>
               
             </CardHeader>
             <CardBody>
               
               <GridContainer> 
                 <GridItem xs={4} sm={4} md={4}>
                   <CustomInput
                     labelText="User"
                     id="city"
                     formControlProps={{
                       fullWidth: true
                     }}
                   />
                 </GridItem>
                 <GridItem xs={4} sm={4} md={4}>
                   <CustomInput
                     labelText="Done or not"
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
         
 
 
       </GridContainer>

       <GridContainer>
      <h1>QUADIENT SYSTEMS</h1>
      </GridContainer>
      <GridContainer>
         
         <GridItem xs={4} sm={4} md={4}>
           <Card>
             <CardHeader color="primary">
               <h4 className={classes.cardTitleWhite}>PI1</h4>
               
             </CardHeader>
             <CardBody>
               
               <GridContainer> 
                 <GridItem xs={4} sm={4} md={4}>
                   <CustomInput
                     labelText="User"
                     id="city"
                     formControlProps={{
                       fullWidth: true
                     }}
                   />
                 </GridItem>
                 <GridItem xs={4} sm={4} md={4}>
                   <CustomInput
                     labelText="Done or not"
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
         <GridItem xs={4} sm={4} md={4}>
           <Card>
             <CardHeader color="primary">
               <h4 className={classes.cardTitleWhite}>PW1</h4>
               
             </CardHeader>
             <CardBody>
               
               <GridContainer> 
                 <GridItem xs={4} sm={4} md={4}>
                   <CustomInput
                     labelText="User"
                     id="city"
                     formControlProps={{
                       fullWidth: true
                     }}
                   />
                 </GridItem>
                 <GridItem xs={4} sm={4} md={4}>
                   <CustomInput
                     labelText="Done or not"
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
         <GridItem xs={4} sm={4} md={4}>
           <Card>
             <CardHeader color="primary">
               <h4 className={classes.cardTitleWhite}>PRD</h4>
               
             </CardHeader>
             <CardBody>
               
               <GridContainer> 
                 <GridItem xs={4} sm={4} md={4}>
                   <CustomInput
                     labelText="User"
                     id="city"
                     formControlProps={{
                       fullWidth: true
                     }}
                   />
                 </GridItem>
                 <GridItem xs={4} sm={4} md={4}>
                   <CustomInput
                     labelText="Done or not"
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
 
 
       </GridContainer>

       <GridContainer>
         
         <GridItem xs={4} sm={4} md={4}>
           <Card>
             <CardHeader color="primary">
               <h4 className={classes.cardTitleWhite}>BIP</h4>
               
             </CardHeader>
             <CardBody>
               
               <GridContainer> 
                 <GridItem xs={4} sm={4} md={4}>
                   <CustomInput
                     labelText="User"
                     id="city"
                     formControlProps={{
                       fullWidth: true
                     }}
                   />
                 </GridItem>
                 <GridItem xs={4} sm={4} md={4}>
                   <CustomInput
                     labelText="Done or not"
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
         <GridItem xs={4} sm={4} md={4}>
           <Card>
             <CardHeader color="primary">
               <h4 className={classes.cardTitleWhite}>PXI</h4>
               
             </CardHeader>
             <CardBody>
               
               <GridContainer> 
                 <GridItem xs={4} sm={4} md={4}>
                   <CustomInput
                     labelText="User"
                     id="city"
                     formControlProps={{
                       fullWidth: true
                     }}
                   />
                 </GridItem>
                 <GridItem xs={4} sm={4} md={4}>
                   <CustomInput
                     labelText="Done or not"
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
         
 
 
       </GridContainer>
 
 
    
      
    </div>
  );
}

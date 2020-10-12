import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Button from '@material-ui/core/Button';
import Dialog from '@material-ui/core/Dialog';
import DialogActions from '@material-ui/core/DialogActions';
import DialogContent from '@material-ui/core/DialogContent';
import DialogTitle from '@material-ui/core/DialogTitle';
import InputLabel from '@material-ui/core/InputLabel';
import Input from '@material-ui/core/Input';
import MenuItem from '@material-ui/core/MenuItem';
import FormControl from '@material-ui/core/FormControl';
import Select from '@material-ui/core/Select';


const useStyles = makeStyles((theme) => ({
  container: {
    display: 'flex',
    flexWrap: 'wrap',
  },
  formControl: {
    margin: theme.spacing(1),
    minWidth: 120,
  },
}));

export default function Selectsys(props) {
  const classes = useStyles();
  const [open, setOpen] = React.useState(false);
  const [age, setAge] = React.useState('');
  const [client, setc] = React.useState('');
  
  const handleChange1 = (event) => {
    setc(Number(event.target.value) || '');
    props.checksys("off")

    if (event.target.value == 1){
    props.check("ccbji");
     props.loadccelm();
    }
    
    if (event.target.value == 2){
        props.check("quadient");
        props.loadqaelm();
        }
    
  };

  const handleChange = (event) => {
    setAge(Number(event.target.value) || '');
  
            props.checksys(event.target.value);
   
  
  };

  const handleClickOpen = () => {
    setOpen(true);
    
  };

  const handleClose = () => {
    setOpen(false);
  };
  const sel = () => {
   props.o.forEach(element => {
        return element;
        console.log(element);
       })
  }
  return (
      
    <div>
         
      <Button onClick={handleClickOpen}>Choose system</Button>
      <Dialog disableBackdropClick disableEscapeKeyDown open={open} onClose={handleClose}>
        <DialogTitle>Choose system</DialogTitle>
        <DialogContent>
          <form className={classes.container}>

          <FormControl className={classes.formControl}>
              <InputLabel htmlFor="Client">Client</InputLabel>
              <Select
                native
                value={client}
                onChange={handleChange1}
                input={<Input id="Client" />}
              >
                <option aria-label="None" value="" />
                <option value={1}>CCBJI</option>
                <option value={2}>Quadient</option>
                
              </Select>
            </FormControl>


            <FormControl className={classes.formControl}>
              <InputLabel htmlFor="demo-dialog-native">System</InputLabel>
              <Select
                native
                value={age}
                onChange={handleChange}
                input={<Input id="demo-dialog-native" />}
              >
                <option aria-label="None" value="" />
                {props.o[0]}
                {props.o[1]}
                {props.o[2]}
                {props.o[3]}
                {props.o[4]}
                {props.o[5]}
                {props.o[6]}
                {props.o[7]}
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
    </div>
  );
}
import React from 'react';
import { makeStyles } from '@mui/material/styles';
import InputLabel from '@mui/material/InputLabel';
import MenuItem from '@mui/material/MenuItem';
import FormHelperText from '@mui/material/FormHelperText';
import FormControl from '@mui/material/FormControl';
import Select from '@mui/material/Select';
import { isFunction } from 'lodash';

const useStyles = makeStyles((theme) => ({
  formControl: {
    margin: theme.spacing(1),
    minWidth: 120,
  },
  selectEmpty: {
    marginTop: theme.spacing(2),
  },
}));

export default function SimpleSelect({choices=[], label="", onChange}) {


  const classes = useStyles();
  const [value, setValue] = React.useState('');

  const handleChange = (event) => {
    setValue(event.target.value);
    if(isFunction(onChange)){
      onChange(event.target.value)
    }
  };

  return (
    <div>
      <FormControl className={classes.formControl}>
        <InputLabel id="demo-simple-select-label">{label}</InputLabel>
        <Select
          labelId="demo-simple-select-label"
          id="demo-simple-select"
          value={value}
          onChange={handleChange}
        >
          {choices.map(choice =>  <MenuItem value={10}>Ten</MenuItem> )}
         
          <MenuItem value={20}>Twenty</MenuItem>

        </Select>
        <FormHelperText>Some important helper text</FormHelperText>
      </FormControl>

    </div>
  );
}
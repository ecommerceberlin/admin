import * as React from 'react';
import InputLabel from '@mui/material/InputLabel';
import MenuItem from '@mui/material/MenuItem';
import FormHelperText from '@mui/material/FormHelperText';
import FormControl from '@mui/material/FormControl';
import Select from '@mui/material/Select';

 

export default function SelectLabels({label, value, onChange, options}) {


    return (
   
    <FormControl sx={{ m: 1, minWidth: 120 }}>
    <InputLabel id="demo-simple-select-helper-label">{label}</InputLabel>
    <Select
    labelId="demo-simple-select-helper-label"
    id="demo-simple-select-helper"
    value={value}
    onChange={(e) => onChange(e.target.value)}
    label={label}
    >
    <MenuItem value="">
    <em>None</em>
    </MenuItem>
    {(options || []).map(({id, name}) =>  <MenuItem key={id} value={id}>{name}</MenuItem>)}
    </Select>
    <FormHelperText>{label}</FormHelperText>
    </FormControl>

    );
}



/**
 * 
 * 
 




    const handleChangeEvent = (e) => {
         (changeEvent(find(data, {id: e.target.value})))
         (hideDialog());
    }

    const filteredData = (data || []).filter(event => event.group_id == group_id)

    return (
        <FormControl className={classes.formControl}>
        <InputLabel id="change-event-label">Event</InputLabel>
        <Select
            id="select-event"
            labelId="change-event-label"
            value={event_id}
            onChange={ handleChangeEvent }
            autoWidth={true}
            variant="outlined"
            className={classes.select}
        >
        {filteredData.map(({id, name, is_active}) => <MenuItem key={id} value={id}>{is_active && <ActiveIcon className={classes.icon}/>}{name}</MenuItem> )}
        </Select>
        </FormControl>)


 */
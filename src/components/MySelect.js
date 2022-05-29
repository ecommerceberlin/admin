import * as React from 'react';
import InputLabel from '@mui/material/InputLabel';
import MenuItem from '@mui/material/MenuItem';
import FormHelperText from '@mui/material/FormHelperText';
import FormControl from '@mui/material/FormControl';
import Select from '@mui/material/Select';
import Box from '@mui/material/Box';
import { isFunction } from 'lodash';
 

export default function SelectLabels({label, descriptionLabel, value, onChange, options, decorate, valueSource="id", labelSource="name"}) {

    return (<FormControl sx={{ m: 1, width: 250 }}>
    <InputLabel id="demo-simple-select-helper-label">{label}</InputLabel>
    <Select
    labelId="demo-simple-select-helper-label"
    id="demo-simple-select-helper"
    value={value}
    onChange={(e) => onChange(e.target.value)}
    label={label}
    fullWidth
    >
    <MenuItem value="">
    <em>None</em>
    </MenuItem>
    {(options || []).map((option) => (<MenuItem key={option[valueSource]} value={option[valueSource]}>
        <Box sx={{display: "flex", alignItems: "center"}}>
        {isFunction(decorate)? decorate(option): null}
        {option[labelSource]}
        </Box>
        </MenuItem>))}
    </Select>
    {descriptionLabel? <FormHelperText>{descriptionLabel}</FormHelperText>: null}
    </FormControl>);
}



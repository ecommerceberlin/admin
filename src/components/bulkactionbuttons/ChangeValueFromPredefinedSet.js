
import React, {useState, useCallback, useEffect} from "react";
import {
    Button,
    useUpdateMany,
    useRefresh,
    useNotify,
    useUnselectAll,
} from 'react-admin';

import { VisibilityOff } from '@mui/icons-material';
import InputLabel from '@mui/material/InputLabel';
import MenuItem from '@mui/material/MenuItem';
import FormControl from '@mui/material/FormControl';
import Select from '@mui/material/Select';
import { useSetModal } from "../../contexts";
 
const CategorySelect = ({category, choices, onChange}) => {

    return  (
        <FormControl variant="outlined" sx={{
            margin: theme=> theme.spacing(1),
            minWidth: 120,
        }}>
            <InputLabel id="demo-simple-select-outlined-label">Category</InputLabel>
            <Select
                labelId="demo-simple-select-outlined-label"
                id="demo-simple-select-outlined"
                value={category}
                onChange={onChange}
                label="Category"
            >
                {/* <MenuItem value="">
                <em>None</em>
                </MenuItem> */}
                {(choices || []).map(({id, name}) => <MenuItem key={id} value={id}>{name}</MenuItem>)}
            </Select>
        </FormControl>
    )
    
}

const ChangeValueFromPredefinedSet = ({ selectedIds, label, choices, basePath, filterValues, Icon, resource }) => {
    
    const [category, setCategory] = useState("");
    const modal = useSetModal()
    const refresh = useRefresh();
    const notify = useNotify();
    const unselectAll = useUnselectAll();

    const setCategoryCallback = useCallback((e) => setCategory(e.target.value) )

    const [updateMany, { loading }] = useUpdateMany(
        resource,
        selectedIds,
        {category},
        {
            onSuccess: () => {
                refresh();
                notify(`${resource} updated`);
                unselectAll(resource);
            },
            onFailure: error => notify('Error: items not updated', 'warning'),
        }
    );


    const handleDialog = () =>  modal("Select target category", <CategorySelect category={category} choices={choices} onChange={setCategoryCallback} />) 
    
    // dispatch(showDialog({
    //         title: ,
    //         content: 
    //         onConfirm: category ? updateMany : undefined
    // }))
    
    
    useEffect(()=>{
        if(category){
            handleDialog();
        }
    },[category])

    return (
        <Button
            label={label}
            disabled={loading}
            onClick={handleDialog}
        >
            {/* <Icon /> */}
        </Button>
    );
};

ChangeValueFromPredefinedSet.defaultProps = {
    label: "Publish",
    data: {
        is_published : 1
    },
    Icon: <VisibilityOff />
}

export default ChangeValueFromPredefinedSet;
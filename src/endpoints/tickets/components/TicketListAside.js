
import React from 'react'
import {useListContext, Button} from 'react-admin'
import Box from '@mui/material/Box'
import Table from '@mui/material/Table';
import TableBody from '@mui/material/TableBody';
import TableCell from '@mui/material/TableCell';
import TableContainer from '@mui/material/TableContainer';
import TableHead from '@mui/material/TableHead';
import TableRow from '@mui/material/TableRow';
import Typography from '@mui/material/Typography'

 


const Aside = () => {
    const { data, ids } = useListContext();

    return (
    <Box ml={2}>

    <Typography variant="h6">Ticket stats</Typography>


    {/* <Typography variant="body2">
    Total views: {ids.map(id => data[id]).reduce((sum, post) => sum + post.id, 0)}
    </Typography> */}

    <TableContainer >
    <Table sx={{ maxWidth: 250}} aria-label="simple table">
    <TableBody>

    <TableRow>
    <TableCell component="th" scope="row">something</TableCell>
    <TableCell align="right">one day</TableCell>
    </TableRow>


    </TableBody>
    </Table>
    </TableContainer>

    </Box>
    );
  };


  export default Aside;



/**
 * 
 * 
 * 
 * 

 useListContext();

basePath,
currentSort,
data,
defaultTitle,
filterValues,
ids,
page,
perPage,
resource,
selectedIds,
total,
version,

 * 
 */



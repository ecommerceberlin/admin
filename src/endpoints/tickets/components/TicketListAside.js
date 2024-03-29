
import React from 'react'
import {useListContext, Button} from 'react-admin'
import { makeStyles } from '@material-ui/core/styles';
import Box from '@material-ui/core/Box'
import Table from '@material-ui/core/Table';
import TableBody from '@material-ui/core/TableBody';
import TableCell from '@material-ui/core/TableCell';
import TableContainer from '@material-ui/core/TableContainer';
import TableHead from '@material-ui/core/TableHead';
import TableRow from '@material-ui/core/TableRow';
import Typography from '@material-ui/core/Typography'

const useStyles = makeStyles({
    table: {
      maxWidth: 250,
    },
});


const Aside = () => {
    const { data, ids } = useListContext();
    const classes = useStyles();

    return (
    <Box ml={2}>

    <Typography variant="h6">Ticket stats</Typography>


    {/* <Typography variant="body2">
    Total views: {ids.map(id => data[id]).reduce((sum, post) => sum + post.id, 0)}
    </Typography> */}

    <TableContainer >
    <Table className={classes.table} aria-label="simple table">
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



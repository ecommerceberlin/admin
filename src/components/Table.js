

import React, {isValidElement} from 'react'
import { makeStyles } from '@mui/material/styles';
import Table from '@mui/material/Table';
import TableBody from '@mui/material/TableBody';
import TableCell from '@mui/material/TableCell';
import TableHead from '@mui/material/TableHead';
import TableRow from '@mui/material/TableRow';
import { useTranslate } from 'react-admin'
import {isEmpty, isFunction, get } from 'lodash';



 const useStyles = ({minWidth=650}) => makeStyles(theme => ({
    table: {
      minWidth,
    },
    active: {
      color: "black",
      cursor: "pointer"
    },
    disabled: {
      color: "#ccc",
      cursor: "pointer"
    },
    grayed: {
      color: "#ccc"
    }
  }));


 

const CustomTable = ({rows=[], columns=[], showHeader=false, baseLabel="", minWidth=650}) => {

    const classes = useStyles({minWidth})()
    const translate = useTranslate()

    if(isEmpty(rows) || isEmpty(columns)){

        return null
    }
    return (

        <Table className={classes.table} aria-label="simple table">
        {showHeader? <TableHead><TableRow>{columns.map(({name, align="left"}) =>  <TableCell key={`header${name}`} align={align}>{translate(`${baseLabel}${name}`)}</TableCell>)}</TableRow></TableHead>: null }
        <TableBody>{rows.map(
          (row, i) => (<TableRow key={row.id || i}>{columns.map(
            ({render, name, ...cellProps}) =>  (
              <TableCell key={`${row.id || i}_${name}`} {...cellProps}>{isFunction(render)? render(row): get(row, render, "")}</TableCell>
              ))}</TableRow>))}</TableBody>
        </Table>)
}


export default CustomTable





import React, {isValidElement} from 'react'
import { makeStyles } from '@material-ui/core/styles';
import Table from '@material-ui/core/Table';
import TableBody from '@material-ui/core/TableBody';
import TableCell from '@material-ui/core/TableCell';
import TableHead from '@material-ui/core/TableHead';
import TableRow from '@material-ui/core/TableRow';
import { useTranslate } from 'react-admin'
import {isEmpty, isFunction, get } from 'lodash';



 const useStyles = makeStyles(theme => ({
    table: {
      minWidth: 650,
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


 

const CustomTable = ({rows=[], columns=[], showHeader=false, baseLabel=""}) => {

    const classes = useStyles()
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



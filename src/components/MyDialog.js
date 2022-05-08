import React from 'react';
import { useTranslate } from 'react-admin';

import Dialog from '@mui/material/Dialog';
import DialogActions from '@mui/material/DialogActions';
import DialogContent from '@mui/material/DialogContent';
import DialogContentText from '@mui/material/DialogContentText';
import DialogTitle from '@mui/material/DialogTitle';
import {makeStyles} from '@mui/material/styles';

import Button from './Button';
import {useModal, useCloseModal} from '../contexts'
import isEmpty from 'lodash/isEmpty'
import {looksLikeLabel, containsNoHtml} from '../helpers'

const useStyles = makeStyles(theme => ({

  // modal: {
  //   width: '90%',
  //   maxWidth: 1000
  // },
  // imageContainer: {
  //   padding: '2em',
  //   margin: '2em'
  // },
  // image: {
  //   maxWidth: '100%'
  // }

}))

const CustomModal = () => {
  const translate = useTranslate()
  const modal = useModal()
  const handleClose = useCloseModal()
  const {title, label, body, image, buttons, fullScreen} = modal

  return (  <Dialog
    open={!isEmpty(modal)}
    onClose={handleClose}
    aria-labelledby="alert-dialog-title"
    aria-describedby="alert-dialog-description"
    maxWidth="md"
    fullWidth={true}
    fullScreen={fullScreen}
  >
    <DialogTitle id="alert-dialog-title">{looksLikeLabel(title)? translate(title): title}</DialogTitle>
    <DialogContent>
      {containsNoHtml(title) ? <DialogContentText id="alert-dialog-description">{looksLikeLabel(body)? translate(body): body}</DialogContentText>: body}
    </DialogContent>
    <DialogActions>{[
          ...(buttons? buttons: []),
          <Button key="close" label={"common.close"} onClick={handleClose} />
    ]}</DialogActions>
  </Dialog>)
};


export default CustomModal


/**
 * 
 
 return (
    <Dialog
      // title={title}
      // actions={}
      // modal={false}
      open={}
      onClose={close}
    ><div>
      {body || ''}

      {image ? (
      <div style={style.imageContainer}>
      <img style={style.image} src={image} alt="" />
      </div>
      ) : null}
    </div>
   
    </Dialog>


 */
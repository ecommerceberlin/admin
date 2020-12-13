import React from 'react';
import Button from '@material-ui/core/Button';

import Dialog from '@material-ui/core/Dialog';
import DialogActions from '@material-ui/core/DialogActions';
import DialogContent from '@material-ui/core/DialogContent';
import DialogContentText from '@material-ui/core/DialogContentText';
import DialogTitle from '@material-ui/core/DialogTitle';
import Slide from '@material-ui/core/Slide';

//custom
import PropTypes from 'prop-types';
import { useTranslate } from 'react-admin';
import { useSelector, useDispatch } from 'react-redux';
import { hideDialog } from '../redux';
import isFunction from 'lodash/isFunction'

const Transition = React.forwardRef(function Transition(props, ref) {
  return <Slide direction="down" ref={ref} {...props} />;
});

function MyDialog({confirm, cancel, confirmColor}) {

  const translate = useTranslate();
  const dispatch = useDispatch();
  const state = useSelector(state => state.ui.dialog)

  const hasConfirmAction = 'onConfirm' in state && isFunction(state.onConfirm)

  const handleConfirm = () => {
    state.onConfirm();
    dispatch(hideDialog())
  }

  const handleClose = () => {
    if('onClose' in state && isFunction(state.onClose)){
      state.onClose();
    }
    dispatch(hideDialog())
  };

  return (
    
      <Dialog
        open={"title" in state}
         TransitionComponent={Transition}
        // keepMounted
        onClose={handleClose}
        aria-labelledby="alert-dialog-slide-title"
        aria-describedby="alert-dialog-slide-description"
        maxWidth="md"
      >
        <DialogTitle id="alert-dialog-slide-title"> {'title' in state ? state.title : ''} </DialogTitle>
        <DialogContent>

           {'content' in state ? state.content: ''}

          {/* <DialogContentText id="alert-dialog-slide-description">
         
          </DialogContentText> */}
        </DialogContent>

        <DialogActions>
        {hasConfirmAction && <Button color="secondary" onClick={handleConfirm} >{confirm}</Button>}
        <Button onClick={handleClose} color="default">{cancel}</Button>
        </DialogActions>
</Dialog>
   
  );
}



MyDialog.propTypes = {

  cancel: PropTypes.string.isRequired,
  confirm: PropTypes.string.isRequired,
  confirmColor: PropTypes.string.isRequired,

  dialog: PropTypes.shape({
    title: PropTypes.string,
    content: PropTypes.node,
    onConfirm: PropTypes.func,
    onClose: PropTypes.func
  })
};

MyDialog.defaultProps = {
  cancel: 'Cancel',
  confirm: 'Confirm',
  confirmColor: 'primary'
};


export default MyDialog

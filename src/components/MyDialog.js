import React from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import { translate } from 'react-admin';
import classnames from 'classnames';
import compose from 'recompose/compose';
import { showDialog, hideDialog } from '../redux';

import Dialog from '@material-ui/core/Dialog';
import DialogActions from '@material-ui/core/DialogActions';
import DialogContent from '@material-ui/core/DialogContent';
import DialogContentText from '@material-ui/core/DialogContentText';
import DialogTitle from '@material-ui/core/DialogTitle';
import Button from '@material-ui/core/Button';
import { withStyles } from '@material-ui/core/styles';
import { fade } from '@material-ui/core/styles/colorManipulator';
import ActionCheck from '@material-ui/icons/CheckCircle';
import AlertError from '@material-ui/icons/ErrorOutline';

const styles = theme => ({
  confirmPrimary: {
    color: theme.palette.primary.main
  },
  confirmWarning: {
    color: theme.palette.error.main,
    '&:hover': {
      backgroundColor: fade(theme.palette.error.main, 0.12),
      // Reset on mouse devices
      '@media (hover: none)': {
        backgroundColor: 'transparent'
      }
    }
  },
  iconPaddingStyle: {
    paddingRight: '0.5em'
  }
});

/**
 * Confirmation dialog
 *
 * @example
 * <Confirm
 *     isOpen={true}
 *     title="Delete Item"
 *     content="Are you sure you want to delete this item?"
 *     confirm="Yes"
 *     confirmColor="primary"
 *     cancel="Cancel"
 *     onConfirm={() => { // do something }}
 *     onClose={() => { // do something }}
 * />
 */
const Confirm = ({
  isOpen,
  title,
  confirm,
  cancel,
  confirmColor,
  onConfirm,
  onClose,
  classes,
  fullWidth,
  content,
  dialog,
  hideDialog
}) => (
  <Dialog
    open={'title' in dialog}
    onClose={() => {
      'onClose' in dialog ? dialog.onClose() : hideDialog();
    }}
    fullWidth={true}
    aria-labelledby="alert-dialog-title"
  >
    <DialogTitle id="alert-dialog-title">
      {'title' in dialog ? dialog.title : ''}
    </DialogTitle>
    <DialogContent>{'content' in dialog ? dialog.content : ''}</DialogContent>
    <DialogActions>
      <Button
        onClick={'onConfirm' in dialog ? dialog.onConfirm : function() {}}
        className={classnames('ra-confirm', {
          [classes.confirmWarning]: confirmColor === 'warning',
          [classes.confirmPrimary]: confirmColor === 'primary'
        })}
        autoFocus
      >
        <ActionCheck className={classes.iconPaddingStyle} />
        {confirm}
      </Button>
      <Button
        onClick={() => {
          'onClose' in dialog ? dialog.onClose() : hideDialog();
        }}
      >
        <AlertError className={classes.iconPaddingStyle} />
        {cancel}
      </Button>
    </DialogActions>
  </Dialog>
);

Confirm.propTypes = {
  cancel: PropTypes.string.isRequired,
  classes: PropTypes.object.isRequired,
  confirm: PropTypes.string.isRequired,
  confirmColor: PropTypes.string.isRequired,

  dialog: PropTypes.shape({
    title: PropTypes.string,
    content: PropTypes.node,
    onConfirm: PropTypes.func,
    onClose: PropTypes.func
  })
};

Confirm.defaultProps = {
  cancel: 'Cancel',
  classes: {},
  confirm: 'Confirm',
  confirmColor: 'primary'
};

const enhance = compose(
  withStyles(styles),
  translate,
  connect(
    state => ({ dialog: state.ui.dialog }),
    { hideDialog }
  )
);

export default enhance(Confirm);

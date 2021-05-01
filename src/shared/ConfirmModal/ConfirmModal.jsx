import React from 'react';
import PropTypes from 'prop-types';
import {
  Button, Dialog, DialogActions, DialogContent,
  DialogTitle, makeStyles, useMediaQuery, useTheme,
} from '@material-ui/core';
import { typesConfirmModal } from './ConfirmModal.types';

const useStyles = makeStyles((theme) => ({
  root: {
    '& > *': {
      margin: theme.spacing(1),
    },
  },
  description: {},
}));

const ConfirmModal = ({
  open,
  confirmModalData,
  confirmModalEvent,
}) => {
  const classes = useStyles();
  const theme = useTheme();
  const fullScreen = useMediaQuery(theme.breakpoints.down('sm'));

  const handleClose = () => {
    confirmModalEvent({
      type    : typesConfirmModal.close,
      payload : {},
    });
  };

  const handleConfirm = () => {
    confirmModalEvent({
      type    : typesConfirmModal.confirm,
      payload : confirmModalData.idData,
    });
  };

  console.log('opened', { confirmModalData, open, confirmModalEvent });
  return (
    <>
      <Dialog
        fullScreen={fullScreen}
        open={open}
        onClose={handleClose}
        aria-labelledby="responsive-dialog-title"
      >
        <DialogTitle id="responsive-dialog-title">
          { confirmModalData.title }
        </DialogTitle>

        <DialogContent>
          <span className={classes.description}>
            { confirmModalData.description }
          </span>
        </DialogContent>

        <DialogActions>
          <Button autoFocus onClick={handleClose} color="primary">
            Cancelar
          </Button>
          <Button autoFocus onClick={handleConfirm} color="primary">
            Confirmar
          </Button>
        </DialogActions>
      </Dialog>
    </>
  );
};

ConfirmModal.propTypes = {
  open              : PropTypes.bool.isRequired,
  confirmModalEvent : PropTypes.func.isRequired,
  confirmModalData  : PropTypes.shape({
    title       : PropTypes.string.isRequired,
    description : PropTypes.string.isRequired,
    idData      : PropTypes.string,
  }).isRequired,
};

export default ConfirmModal;

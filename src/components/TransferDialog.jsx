import {
  Button, Dialog, DialogActions, DialogContent,
  DialogTitle, makeStyles, useMediaQuery, useTheme,
} from '@material-ui/core';
import React from 'react';
import PropTypes from 'prop-types';
import { actionsTransfer, eventsTransfer } from '../constant/transfer';

const useStyles = makeStyles((theme) => ({
  root: {
    '& > *': {
      margin: theme.spacing(1),
    },
  },
  createBtn : {},
  updateBtn : {},
}));

const TransferDialog = ({
  open,
  actionTransfer,
  transferDialogEvent,
}) => {
  console.log('open', open);
  const classes = useStyles();

  const theme = useTheme();
  const fullScreen = useMediaQuery(theme.breakpoints.down('sm'));

  const handleClose = () => {
    // setOpen(false);
    transferDialogEvent({
      type    : eventsTransfer.close,
      payload : {},
    });
  };

  const handleCreate = () => {
    transferDialogEvent({
      type    : eventsTransfer.create,
      payload : {},
    });
  };

  const handleUpdate = () => {
    transferDialogEvent({
      type    : eventsTransfer.update,
      payload : {},
    });
  };

  let actionSelected;
  switch (actionTransfer) {
    case actionsTransfer.create:
      actionSelected = (
        <Button onClick={handleCreate} color="primary" autoFocus className={classes.createBtn}>
          Crear
        </Button>
      );
      break;

    case actionsTransfer.update:
      actionSelected = (
        <Button onClick={handleUpdate} color="primary" autoFocus className={classes.updateBtn}>
          Actualizar
        </Button>
      );
      break;

    default:
      break;
  }

  return (
    <>
      <Dialog
        fullScreen={fullScreen}
        open={open}
        onClose={handleClose}
        aria-labelledby="responsive-dialog-title"
      >
        <DialogTitle id="responsive-dialog-title">
          Agregar una nueva transferencia
        </DialogTitle>
        <DialogContent>
          {/* <DialogContentText>
            Let Google help apps determine location. This means sending anonymous location data to
            Google, even when no apps are running.
          </DialogContentText> */}
        </DialogContent>
        <DialogActions>
          <Button autoFocus onClick={handleClose} color="primary">
            Cancelar
          </Button>
          {
            actionSelected
          }
        </DialogActions>
      </Dialog>
    </>
  );
};

TransferDialog.propTypes = {
  open                : PropTypes.bool.isRequired,
  actionTransfer      : PropTypes.string.isRequired,
  transferDialogEvent : PropTypes.func.isRequired,
};

export default TransferDialog;

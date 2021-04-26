import {
  Button, Dialog, DialogActions, DialogContent,
  DialogTitle, makeStyles, TextField, useMediaQuery, useTheme,
} from '@material-ui/core';
import React from 'react';
import PropTypes from 'prop-types';
import { Controller, useForm } from 'react-hook-form';
import { actionsTransfer, eventsTransferDialog } from '../constant/transfer';

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
  const classes = useStyles();

  const theme = useTheme();
  const fullScreen = useMediaQuery(theme.breakpoints.down('sm'));

  const {
    control, handleSubmit, formState: { errors },
  } = useForm();

  const handleClose = () => {
    // setOpen(false);
    transferDialogEvent({
      type    : eventsTransferDialog.close,
      payload : {},
    });
  };

  // const handleCreate = () => {
  //   transferDialogEvent({
  //     type    : eventsTransferDialog.create,
  //     payload : {},
  //   });
  // };

  // const handleUpdate = () => {
  //   transferDialogEvent({
  //     type    : eventsTransferDialog.update,
  //     payload : {},
  //   });
  // };

  const test = (data) => {
    console.log('data', data);
  };

  let actionSelected;
  switch (actionTransfer) {
    case actionsTransfer.create:
      actionSelected = (
        <Button onClick={() => handleSubmit(test)} color="primary" autoFocus className={classes.createBtn}>
          Crear
        </Button>
      );
      break;

    case actionsTransfer.update:
      actionSelected = (
        <Button onClick={() => handleSubmit(test)} color="primary" autoFocus className={classes.updateBtn}>
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
          <form
            className={classes.root}
            noValidate
            autoComplete="off"
          >
            <Controller
              name="description"
              render={({ field }) => (
                <TextField
                  {...field}
                  id="description"
                  name="description"
                  label="Correo electronico"
                  variant="outlined"
                  helperText={errors.description ? errors.description.message : null}
                  error={errors.description}
                />
              )}
              control={control}
              defaultValue=""
              rules={{
                required: 'Required',
              }}
            />
          </form>

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

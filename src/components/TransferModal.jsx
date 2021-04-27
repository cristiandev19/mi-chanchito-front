import {
  Button, Dialog, DialogActions, DialogContent,
  DialogTitle, makeStyles, Select, TextField, useMediaQuery, useTheme,
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
  form      : {
    '& > *': {
      margin : theme.spacing(1),
      width  : '300px',
    },
    display       : 'flex',
    flexDirection : 'column',
    alignItems    : 'center',
  },
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
    control, formState: { errors }, getValues,
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

  const handleSubmit = (data) => {
    console.log('data', data);
  };

  let actionSelected;
  switch (actionTransfer) {
    case actionsTransfer.create:
      actionSelected = (
        <Button
          onClick={() => handleSubmit(getValues())}
          color="primary"
          autoFocus
          className={classes.createBtn}
        >
          Crear
        </Button>
      );
      break;

    case actionsTransfer.update:
      actionSelected = (
        <Button
          onClick={() => handleSubmit(getValues())}
          color="primary"
          autoFocus
          className={classes.updateBtn}
        >
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
            className={classes.form}
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
                  label="Descripcion"
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

            <Controller
              name="details"
              render={({ field }) => (
                <TextField
                  {...field}
                  id="details"
                  name="details"
                  label="Detalles"
                  variant="outlined"
                  helperText={errors.details ? errors.details.message : null}
                  error={errors.details}
                />
              )}
              control={control}
              defaultValue=""
              rules={{
                required: 'Required',
              }}
            />

            <Controller
              name="amount"
              render={({ field }) => (
                <TextField
                  {...field}
                  id="amount"
                  type="number"
                  name="amount"
                  label="Monto"
                  variant="outlined"
                  helperText={errors.amount ? errors.amount.message : null}
                  error={errors.amount}
                />
              )}
              control={control}
              defaultValue=""
              rules={{
                required: 'Required',
              }}
            />

            <Controller
              name="dateTransfer"
              render={({ field }) => (
                <TextField
                  {...field}
                  id="dateTransfer"
                  name="dateTransfer"
                  type="date"
                  defaultValue="05-24-2017"
                  label="Fecha transferencia"
                  variant="outlined"
                  helperText={errors.dateTransfer ? errors.dateTransfer.message : null}
                  error={errors.dateTransfer}
                  InputLabelProps={{
                    shrink: true,
                  }}
                />
              )}
              control={control}
              defaultValue=""
              rules={{
                required: 'Required',
              }}
            />

            <Controller
              name="cashFlow"
              render={({ field }) => (
                <Select
                  {...field}
                  id="cashFlow"
                  name="cashFlow"
                  variant="outlined"
                  options={[
                    { value: 'chocolate', label: 'Chocolate' },
                    { value: 'strawberry', label: 'Strawbrry' },
                    { value: 'vanilla', label: 'Vanilla' },
                  ]}
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

import {
  Button, Dialog, DialogActions, DialogContent,
  DialogTitle, makeStyles, MenuItem, Select, TextField, useMediaQuery, useTheme,
} from '@material-ui/core';
import React, { useEffect } from 'react';
import PropTypes from 'prop-types';
import { Controller, useForm } from 'react-hook-form';
import { actionsTransfer, eventsTransferDialog } from '../constant/transfer';
import { formatInputDate } from '../lib/date';

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
      margin   : theme.spacing(1),
      minWidth : '300px',
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
  transferData,
}) => {
  console.log('transferData', transferData);
  const classes = useStyles();

  const theme = useTheme();
  const fullScreen = useMediaQuery(theme.breakpoints.down('sm'));

  const {
    control, formState: { errors }, getValues, setValue,
  } = useForm();

  useEffect(() => {
    console.log('initiiii', transferData);
    if (open) {
      console.log('abriendo');
      setValue('description', transferData.description);
      setValue('details', transferData.details);
      setValue('amount', transferData.amount);
      setValue('dateTransfer', formatInputDate(transferData.dateTransfer));
      setValue('cashFlow', transferData.cashFlow);
    }
    // return () => {
    //   cleanup
    // };
  }, [open]);

  const handleClose = () => {
    // setOpen(false);
    transferDialogEvent({
      type    : eventsTransferDialog.close,
      payload : {},
    });
  };

  const handleCreate = (data) => {
    transferDialogEvent({
      type    : eventsTransferDialog.create,
      payload : data,
    });
  };

  const handleUpdate = (data) => {
    transferDialogEvent({
      type    : eventsTransferDialog.update,
      // eslint-disable-next-line no-underscore-dangle
      payload : { ...data, _id: transferData._id },
    });
  };

  const handleSubmit = async (data) => {
    console.log('data', data);
    switch (actionTransfer) {
      case actionsTransfer.create:
        handleCreate(data);
        break;

      case actionsTransfer.update:
        handleUpdate(data);
        break;

      default:
        break;
    }
  };

  let actionSelected;
  switch (actionTransfer) {
    case actionsTransfer.create:
      actionSelected = (
        <>
          <Button
            onClick={() => handleSubmit(getValues())}
            color="primary"
            autoFocus
            className={classes.createBtn}
          >
            Crear
          </Button>
        </>
      );
      break;

    case actionsTransfer.update:
      actionSelected = (
        <>
          <Button
            onClick={() => handleSubmit(getValues())}
            color="primary"
            autoFocus
            className={classes.updateBtn}
          >
            Actualizar
          </Button>
        </>
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
                  multiline
                  rows={4}
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
                >
                  <MenuItem value="ingreso">Ingreso</MenuItem>
                  <MenuItem value="egreso">Egreso</MenuItem>
                </Select>
              )}
              control={control}
              defaultValue=""
              rules={{
                required: 'Required',
              }}
            />
          </form>
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
  transferData        : PropTypes.shape({
    description  : PropTypes.string,
    details      : PropTypes.string,
    amount       : PropTypes.number,
    dateTransfer : PropTypes.string,
    cashFlow     : PropTypes.string,
    userId       : PropTypes.string,
    _id          : PropTypes.string,
  }).isRequired,
};

export default TransferDialog;

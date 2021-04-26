import { Button, makeStyles } from '@material-ui/core';
import React, { useEffect, useState } from 'react';
import BalanceCard from '../components/BalanceCard';
import TransferCard from '../components/TransferCard';
import TransferModal from '../components/TransferModal';
import { actionsTransfer, eventsTransferCard, eventsTransferDialog } from '../constant/transfer';
import '../App.css';
import TransferService from '../services/transfer.service';

const useStyles = makeStyles((theme) => ({
  root: {
    '& > *': {
      margin: theme.spacing(1),
    },
  },
  addBtn: {
    width  : '100%',
    margin : '20px 0',
  },
}));

const DashboardPage = () => {
  const transferService = new TransferService();
  console.log('Router');
  const classes = useStyles();
  const [openTransferDialog, setOpenTransferDialog] = useState(false);
  const [actionTransfer, setActionTransfer] = useState(actionsTransfer.create);
  const data = [
    {
      title       : 'ingreso 1',
      description : 'descripcion ingreso 1',
      amount      : 450,
      date        : Date.now(),
      casflow     : 'ingreso',
    },
    {
      title       : 'egreso 1',
      description : 'descripcion egreso 1',
      amount      : 200,
      date        : Date.now(),
      casflow     : 'egreso',
    },
    {
      title       : 'ingreso 2',
      description : 'descripcion ingreso 1',
      amount      : 500,
      date        : Date.now(),
      casflow     : 'ingreso',
    },
    {
      title       : 'egreso 2',
      description : 'descripcion egreso 1',
      amount      : 500,
      date        : Date.now(),
      casflow     : 'egreso',
    },
  ];

  useEffect(async () => {
    const response = await transferService.getAllTransfers();
    console.log('response', response);
  }, []);

  const handleAddTransfer = () => {
    console.log('hey');
    setActionTransfer(actionsTransfer.create);
    setOpenTransferDialog(true);
  };

  const handleTransferDialogEvent = ({ type, payload }) => {
    console.log('payload', payload);
    console.log('type', type);
    switch (type) {
      case eventsTransferDialog.close:
        setOpenTransferDialog(false);
        // openTransferDialog, setOpenTransferDialog
        break;
      case eventsTransferDialog.create:
        console.log('creando');
        break;
      case eventsTransferDialog.update:
        console.log('actualizando');
        break;
      default:
        break;
    }
  };

  const handleTransferCardEvent = ({ type, payload }) => {
    console.log({ payload });
    switch (type) {
      case eventsTransferCard.update:
        console.log('actualizando');
        break;
      default:
        break;
    }
  };

  return (
    <div>
      <h1>hey dashboard</h1>

      <div className="container">
        <h1>hola</h1>

        <BalanceCard data={data} />

        <Button
          variant="contained"
          color="primary"
          className={classes.addBtn}
          onClick={handleAddTransfer}
        >
          Agregar
        </Button>
        {/* cards */}
        {
          data.map((transfer) => (
            <TransferCard
              title={transfer.title}
              amount={transfer.amount}
              casflow={transfer.casflow}
              key={transfer.title}
              transferCardEvent={handleTransferCardEvent}
            />
          ))
        }
      </div>
      <TransferModal
        open={openTransferDialog}
        actionTransfer={actionTransfer}
        transferDialogEvent={handleTransferDialogEvent}
      />
    </div>
  );
};

export default DashboardPage;

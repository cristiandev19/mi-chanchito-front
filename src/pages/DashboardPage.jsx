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
  const classes = useStyles();
  const [openTransferDialog, setOpenTransferDialog] = useState(false);
  const [actionTransfer, setActionTransfer] = useState(actionsTransfer.create);
  const [dataTransfers, setDataTransfer] = useState([]);

  useEffect(async () => {
    const { payload } = await transferService.getAllTransfers();
    console.log('response', payload);
    setDataTransfer(payload);
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
      <div className="container">
        <h1>Balance</h1>

        <BalanceCard data={dataTransfers} />

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
          dataTransfers.map((transfer) => (
            <TransferCard
              description={transfer.description}
              amount={transfer.amount}
              cashFlow={transfer.cashFlow}
              // eslint-disable-next-line no-underscore-dangle
              key={transfer._id}
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

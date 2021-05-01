import { Button, makeStyles } from '@material-ui/core';
import React, { useEffect, useState } from 'react';
import BalanceCard from '../components/BalanceCard';
import TransferCard from '../components/TransferCard/TransferCard';
import TransferModal from '../components/TransferModal';
import ConfirmModal from '../shared/ConfirmModal/ConfirmModal';
import { actionsTransfer, eventsTransferCard, eventsTransferDialog } from '../constant/transfer';
import '../App.css';
import TransferService from '../services/transfer.service';
import { typesConfirmModal } from '../shared/ConfirmModal/ConfirmModal.types';

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
  const [openConfirmModal, setOpenConfirmModal] = useState(false);
  const [actionTransfer, setActionTransfer] = useState(actionsTransfer.create);
  const [confirmModalData, setConfirmModalData] = useState({});
  const [transferDataDialog, setTransferDataDialog] = useState({});
  const [dataTransfers, setDataTransfer] = useState([]);

  useEffect(async () => {
    const { payload } = await transferService.getAllTransfers();
    console.log('payload', payload);
    setDataTransfer(payload);
  }, []);

  const handleAddTransfer = () => {
    setActionTransfer(actionsTransfer.create);
    setOpenTransferDialog(true);
    setTransferDataDialog({});
  };

  /**
   * Aqui vamos a hacer las acciones del CRUD en la vista
  */

  const handleCreateTransfer = async (data) => {
    const { payload } = await transferService.createTransfer(data);
    setOpenTransferDialog(false);
    setDataTransfer([payload.response, ...dataTransfers]);
  };

  const handleUpdateTransfer = async (data) => {
    // eslint-disable-next-line no-underscore-dangle
    const { payload } = await transferService.updateTransfer({ ...data, idTransfer: data._id });
    console.log('que me da de payload', payload);
    // eslint-disable-next-line no-underscore-dangle
    console.log('data._id', data._id);
    setOpenTransferDialog(false);
    const newDataTransfer = dataTransfers.map((transfer) => {
      // eslint-disable-next-line no-underscore-dangle
      if (transfer._id === data._id) {
        return { ...payload.response };
      }
      return { ...transfer };
    });
    console.log('newDataTransfer', newDataTransfer);
    setDataTransfer([...newDataTransfer]);
  };

  const handleDeleteTransfer = async ({ idTransfer }) => {
    const { payload } = await transferService.deleteTransfer({ idTransfer });
    console.log({ payload });
    setOpenConfirmModal(false);
    // eslint-disable-next-line no-underscore-dangle
    setDataTransfer([...dataTransfers.filter((transfer) => idTransfer !== transfer._id)]);
  };

  const handleTransferDialogEvent = ({ type, payload }) => {
    switch (type) {
      case eventsTransferDialog.close:
        setOpenTransferDialog(false);
        // openTransferDialog, setOpenTransferDialog
        break;
      case eventsTransferDialog.create:
        handleCreateTransfer(payload);
        break;
      case eventsTransferDialog.update:
        handleUpdateTransfer(payload);
        break;
      default:
        break;
    }
  };

  const handleTransferCardEvent = ({ type, payload }) => {
    switch (type) {
      case eventsTransferCard.update:
        setActionTransfer(actionsTransfer.update);
        setOpenTransferDialog(true);
        setTransferDataDialog(payload);
        break;
      case eventsTransferCard.delete:
        setOpenConfirmModal(true);
        setConfirmModalData({
          title       : 'Estas seguro de eliminar esta transferencia?',
          description : 'No vas a poder recuperarla luego',
          // eslint-disable-next-line no-underscore-dangle
          idData      : payload._id,
        });
        break;
      default:
        break;
    }
  };

  const handleConfirmModalEvents = ({ type, payload }) => {
    console.log('payload', payload);
    switch (type) {
      case typesConfirmModal.close:
        setOpenConfirmModal(false);
        break;
      case typesConfirmModal.confirm:
        handleDeleteTransfer({ idTransfer: payload });
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
              // eslint-disable-next-line no-underscore-dangle
              key={transfer._id}
              transfer={transfer}
              transferCardEvent={handleTransferCardEvent}
            />
          ))
        }
      </div>
      <TransferModal
        open={openTransferDialog}
        actionTransfer={actionTransfer}
        transferDialogEvent={handleTransferDialogEvent}
        transferData={transferDataDialog}
      />
      <ConfirmModal
        open={openConfirmModal}
        confirmModalEvent={handleConfirmModalEvents}
        confirmModalData={confirmModalData}
      />
    </div>
  );
};

export default DashboardPage;

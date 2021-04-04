import './App.css';
import Button from '@material-ui/core/Button';
import { useState } from 'react';
import { makeStyles } from '@material-ui/core';
import BalanceCard from './components/BalanceCard';
import TransferCard from './components/TransferCard';
import { actionsTransfer, eventsTransferDialog, eventsTransferCard } from './constant/transfer';
import TransferDialog from './components/TransferDialog';

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

function App() {
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
  console.log('data', data);

  const handleAddTransfer = () => {
    console.log('hey');
    setActionTransfer(actionsTransfer.create);
    setOpenTransferDialog(true);
  };

  const handleTransferDialogEvent = ({ type, payload }) => {
    console.log('payload', payload);
    switch (type) {
      case eventsTransferDialog.close:
        setOpenTransferDialog(false);
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
    <div className="App">
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
      <TransferDialog
        open={openTransferDialog}
        actionTransfer={actionTransfer}
        transferDialogEvent={handleTransferDialogEvent}
      />
    </div>
  );
}

export default App;

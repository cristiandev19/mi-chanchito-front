import './App.css';
import BalanceCard from './components/BalanceCard';
import TransferCard from './components/TransferCard';

function App() {
  const data = [
    {
      title       : 'ingreso 1',
      description : 'descripcion ingreso 1',
      amount      : 400,
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
  return (
    <div className="App">
      <div className="container">
        <h1>hola</h1>

        <BalanceCard data={data} />
        {/* cards */}
        {
          data.map((transfer) => (
            <TransferCard
              title={transfer.title}
              amount={transfer.amount}
              casflow={transfer.casflow}
              key={transfer.title}
            />
          ))
        }
      </div>
    </div>
  );
}

export default App;

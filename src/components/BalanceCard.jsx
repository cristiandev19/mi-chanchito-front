import React from 'react';
import PropTypes from 'prop-types';
import { cashFlowLabels } from '../constant/transfer';

const BalanceCard = ({
  data,
}) => {
  const formatData = (transfers) => {
    const ingresos = transfers
      .filter((transfer) => transfer.casflow === cashFlowLabels.ingreso)
      .reduce((acc, curr) => acc + curr.amount, 0);
    const egresos = transfers
      .filter((transfer) => transfer.casflow === cashFlowLabels.egreso)
      .reduce((acc, curr) => acc + curr.amount, 0);
    return [
      {
        label  : 'Ingresos',
        amount : ingresos,
      },
      {
        label  : 'Egresos',
        amount : egresos,
      },
      {
        label  : 'Balance',
        amount : ingresos - egresos,
      },
    ];
  };

  const balanceCardData = formatData(data);

  console.log('cambio');
  return (
    <div className="card balance-card">
      {
        balanceCardData.map((item) => (
          <div className="balance-card__item" key={item.label}>
            <div>{item.label}</div>
            <span className="spacer" />
            <div>{`S/. ${item.amount}`}</div>
          </div>
        ))
      }
      {/* <div className="balance-card__item">
        <div>Ingresos</div>
        <span className="spacer" />
        <div>S/. 1000</div>
      </div>
      <div className="balance-card__item">
        <div>Egresos</div>
        <span className="spacer" />
        <div>S/. 900</div>
      </div>
      <div className="balance-card__item">
        <div>Balance</div>
        <span className="spacer" />
        <div>S/. 100</div>
      </div> */}
    </div>
  );
};

BalanceCard.propTypes = {
  data: PropTypes.arrayOf(PropTypes.shape({
    casflow : PropTypes.string.isRequired,
    amount  : PropTypes.number.isRequired,
  })).isRequired,
};

export default BalanceCard;

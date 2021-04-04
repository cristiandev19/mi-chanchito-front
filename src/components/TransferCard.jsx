import React from 'react';
import PropTypes from 'prop-types';
import { cashFlowLabels } from '../constant/transfer';

const TransferCard = ({
  title,
  amount,
  casflow,
}) => {
  let labelCard;

  switch (casflow) {
    case cashFlowLabels.ingreso:
      labelCard = <div className={`transfer-card__label ${cashFlowLabels.ingreso}`}>Ingreso</div>;
      break;
    case cashFlowLabels.egreso:
      labelCard = <div className={`transfer-card__label ${cashFlowLabels.egreso}`}>Egreso</div>;
      break;

    default:
      break;
  }

  return (
    <div className="card transfer-card">
      <div>
        {title}
      </div>
      <span className="spacer" />
      <div>
        { `S/. ${amount}`}
      </div>
      {
        labelCard
      }
    </div>
  );
};

TransferCard.propTypes = {
  title   : PropTypes.string.isRequired,
  amount  : PropTypes.number.isRequired,
  casflow : PropTypes.string.isRequired,
};

export default TransferCard;

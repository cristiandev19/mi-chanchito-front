import React from 'react';
import PropTypes from 'prop-types';
import { cashFlowLabels, eventsTransferCard } from '../constant/transfer';

const TransferCard = ({
  transfer,
  transferCardEvent,
}) => {
  let labelCard;
  let amountCard;
  switch (transfer.cashFlow) {
    case cashFlowLabels.ingreso:
      labelCard = <div className={`transfer-card__label ${cashFlowLabels.ingreso}`}>Ingreso</div>;
      amountCard = <div>{`+ S/. ${transfer.amount}`}</div>;
      break;
    case cashFlowLabels.egreso:
      labelCard = <div className={`transfer-card__label ${cashFlowLabels.egreso}`}>Egreso</div>;
      amountCard = <div>{`- S/. ${transfer.amount}`}</div>;
      break;

    default:
      break;
  }

  const emitUpdate = () => {
    transferCardEvent({
      type    : eventsTransferCard.update,
      payload : transfer,
    });
  };

  const handleKeyDownUpdate = (e) => {
    if (e.code === 'KeyU') {
      console.log('e', e.code);
    }
  };

  return (
    <div
      className="card transfer-card"
      onClick={emitUpdate}
      onKeyDown={handleKeyDownUpdate}
      role="button"
      tabIndex="0"
    >
      <div>
        {transfer.description}
      </div>
      <span className="spacer" />
      {
        amountCard
      }
      {
        labelCard
      }
    </div>
  );
};
TransferCard.propTypes = {
  transfer: PropTypes.shape({
    description  : PropTypes.string.isRequired,
    details      : PropTypes.string.isRequired,
    amount       : PropTypes.number.isRequired,
    dateTransfer : PropTypes.string.isRequired,
    cashFlow     : PropTypes.string.isRequired,
  }).isRequired,
  transferCardEvent: PropTypes.func.isRequired,
};

export default TransferCard;

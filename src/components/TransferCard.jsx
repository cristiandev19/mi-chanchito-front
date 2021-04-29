import React from 'react';
import PropTypes from 'prop-types';
import { cashFlowLabels, eventsTransferCard } from '../constant/transfer';

const TransferCard = ({
  description,
  amount,
  cashFlow,
  transferCardEvent,
}) => {
  console.log({
    description, amount, cashFlow, transferCardEvent,
  });

  let labelCard;
  let amountCard;
  switch (cashFlow) {
    case cashFlowLabels.ingreso:
      labelCard = <div className={`transfer-card__label ${cashFlowLabels.ingreso}`}>Ingreso</div>;
      amountCard = <div>{`+ S/. ${amount}`}</div>;
      break;
    case cashFlowLabels.egreso:
      labelCard = <div className={`transfer-card__label ${cashFlowLabels.egreso}`}>Egreso</div>;
      amountCard = <div>{`- S/. ${amount}`}</div>;
      break;

    default:
      break;
  }

  const emitUpdate = () => {
    transferCardEvent({
      type: eventsTransferCard.update,
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
        {description}
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
  description       : PropTypes.string.isRequired,
  amount            : PropTypes.number.isRequired,
  cashFlow          : PropTypes.string.isRequired,
  transferCardEvent : PropTypes.func.isRequired,
};

export default TransferCard;

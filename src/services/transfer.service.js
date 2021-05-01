import config from '../config';

class TransferService {
  constructor() {
    this.path = 'transfer';
  }

  getAllTransfers() {
    return new Promise(async (resolve) => {
      try {
        const user = JSON.parse(localStorage.getItem('user'));
        if (!user) throw new Error('No hay un usuario');

        const { token } = user;

        const response = await fetch(`${config.backendUrl}/${this.path}/all`, {
          method  : 'GET',
          headers : {
            Authorization: token,
          },
        });
        const { response: apiResponse } = await response.json();
        console.log('data ', apiResponse);
        return resolve({ success: true, payload: apiResponse });
      } catch (error) {
        return resolve({ error });
      }
    });
  }

  createTransfer({
    details,
    description,
    amount,
    dateTransfer,
    cashFlow,
  }) {
    return new Promise(async (resolve) => {
      try {
        const user = JSON.parse(localStorage.getItem('user'));
        if (!user) throw new Error('No hay un usuario');
        const { token } = user;

        const postObj = {
          details,
          description,
          amount,
          dateTransfer,
          cashFlow,
        };

        const response = await fetch(`${config.backendUrl}/${this.path}/create`, {
          method  : 'POST',
          headers : {
            'Content-Type' : 'application/json',
            Authorization  : token,
          },
          body: JSON.stringify(postObj),
        });
        const data = await response.json();
        console.log('data ', data);
        return resolve({ success: true, payload: data });
      } catch (error) {
        return resolve({ error });
      }
    });
  }

  updateTransfer({
    details,
    description,
    amount,
    dateTransfer,
    cashFlow,
    idTransfer,
  }) {
    return new Promise(async (resolve) => {
      try {
        const user = JSON.parse(localStorage.getItem('user'));
        if (!user) throw new Error('No hay un usuario');
        const { token } = user;

        console.log('idTransfer', idTransfer);
        const postObj = {
          details,
          description,
          amount,
          dateTransfer,
          cashFlow,
          _id: idTransfer,
        };

        const response = await fetch(`${config.backendUrl}/${this.path}/update`, {
          method  : 'POST',
          headers : {
            'Content-Type' : 'application/json',
            Authorization  : token,
          },
          body: JSON.stringify(postObj),
        });
        const data = await response.json();
        console.log('data ', data);
        return resolve({ success: true, payload: data });
      } catch (error) {
        return resolve({ error });
      }
    });
  }

  deleteTransfer({
    idTransfer,
  }) {
    return new Promise(async (resolve) => {
      try {
        const user = JSON.parse(localStorage.getItem('user'));
        if (!user) throw new Error('No hay un usuario');
        const { token } = user;

        const postObj = { idTransfer };

        const response = await fetch(`${config.backendUrl}/${this.path}/delete`, {
          method  : 'POST',
          headers : {
            'Content-Type' : 'application/json',
            Authorization  : token,
          },
          body: JSON.stringify(postObj),
        });
        const data = await response.json();
        console.log('data ', data);
        return resolve({ success: true, payload: data });
      } catch (error) {
        return resolve({ error });
      }
    });
  }
}

export default TransferService;

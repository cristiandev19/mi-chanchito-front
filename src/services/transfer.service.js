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
        const data = await response.json();
        console.log('data ', data);
        return resolve({ success: true, payload: data });
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

        const response = await fetch(`${config.backendUrl}/${this.path}/all`, {
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

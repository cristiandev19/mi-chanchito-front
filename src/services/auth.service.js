const BACK_URL = 'http://localhost:8089';

exports.loginEmail = ({
  email, password,
}) => new Promise(async (resolve) => {
  try {
    const bodyObject = {
      email, password,
    };
    const response = await fetch(`${BACK_URL}/auth/login-email`, {
      method  : 'POST',
      headers : {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify(bodyObject),
    });
    const data = await response.json();
    console.log('data ', data);
    return resolve({ success: true, payload: [] });
  } catch (error) {
    return resolve({ error });
  }
});

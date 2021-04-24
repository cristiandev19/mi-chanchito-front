const BACK_URL = 'http://localhost:8089';

class AuthService {
  constructor() {
    this.path = 'auth';
  }

  loginEmail({
    email, password,
  }) {
    return new Promise(async (resolve) => {
      try {
        const bodyObject = {
          email, password,
        };
        const response = await fetch(`${BACK_URL}/${this.path}/login-email`, {
          method  : 'POST',
          headers : {
            'Content-Type': 'application/json',
          },
          body: JSON.stringify(bodyObject),
        });
        const data = await response.json();
        console.log('data ', data);
        return resolve({ success: true, payload: data.user });
      } catch (error) {
        return resolve({ error });
      }
    });
  }

  signupEmail({
    email, password,
  }) {
    return new Promise(async (resolve) => {
      try {
        const bodyObject = {
          email, password,
        };
        const response = await fetch(`${BACK_URL}/${this.path}/signup-email`, {
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
  }

  setLocalStorage({
    email, profile, token, expiresIn,
  }) {
    const userObj = {
      email, profile, token, expiresIn,
    };
    console.log('userObj', userObj);
    localStorage.setItem('user', JSON.stringify({ ...userObj }));
  }
}

export default AuthService;

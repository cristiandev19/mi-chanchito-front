import authTypes from '../types/auth.types';

// const state = {
//   email: 'cristian@dasdsa',
//   profile: {
//     lastNames: "sotomayor",
//     names: "cristian",
//     picture: ""
//   },
//   logged: true
//   token: 'dasdasdsa'
//   expiresIn: '1d'
// };

const authReducer = (state = {}, action) => {
  switch (action.type) {
    case authTypes.login:
      return {
        ...action.payload,
        logged: true,
      };
    case authTypes.logout:
      return {
        logged: false,
      };

    default:
      return state;
  }
};

export default authReducer;

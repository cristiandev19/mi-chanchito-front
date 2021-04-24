import { useReducer } from 'react';
import './App.css';
import AuthContext from './contexts/auth.context';
import authReducer from './reducers/auth.reducer';
import AppRouter from './routers/AppRouter';

const init = () => JSON.parse(localStorage.getItem('user')) || { logged: false };

function App() {
  const [user, dispatch] = useReducer(authReducer, {}, init);

  return (
    <AuthContext.Provider value={{ user, dispatch }}>
      <AppRouter />
    </AuthContext.Provider>
  );
}

export default App;

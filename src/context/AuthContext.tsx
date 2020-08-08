import * as React from 'react';
import api from '../services/api'

interface Credentials {
  email: string;
  password: string;
}

interface AuthContextState {
  name: string;
  signIn(credentials: Credentials): Promise<void>;
}

export const AuthContext = React.createContext<AuthContextState>(
  {} as AuthContextState
);

export const AuthProvider: React.FC = ({ children }) => {
  const signIn = React.useCallback(async ({ email, password }) => {
    const response = await api.post('sessions', {
      email,
      password
    })

    console.log(response.data)
  }, []);

  const singUp = React.useCallback(() => {

  }, []);

  return (
    <AuthContext.Provider value={{ name: 'Michel', signIn }}>
      {children}
    </AuthContext.Provider>
  )
}


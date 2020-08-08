import * as React from 'react';
import api from '../services/api'

interface AuthState {
  token: string;
  user: object;
}

interface Credentials {
  email: string;
  password: string;
}

interface AuthContextState {
  user: object;
  signIn(credentials: Credentials): Promise<void>;
}

export const AuthContext = React.createContext<AuthContextState>(
  {} as AuthContextState
);

export const AuthProvider: React.FC = ({ children }) => {
  const [state, setState] = React.useState<AuthState>(() => {
    const token = localStorage.getItem('@scheduler:token');
    const user = localStorage.getItem('@scheduler:user');

    if (token && user) {
      return {
        token,
        user: JSON.parse(user)
      }
    }

    return {} as AuthState;
  });

  const signIn = React.useCallback(async ({ email, password }) => {
    const response = await api.post('sessions', {
      email,
      password
    })

    const { token, user } = response.data;

    localStorage.setItem('@scheduler:token', token);
    localStorage.setItem('@scheduler:user', JSON.stringify(user));

    setState({ token, user })
  }, []);

  const singUp = React.useCallback(() => {

  }, []);

  return (
    <AuthContext.Provider value={{ user: state.user, signIn }}>
      {children}
    </AuthContext.Provider>
  )
}


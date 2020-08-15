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
  signOut(): void;
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

  const signOut = React.useCallback(() => {
    localStorage.removeItem('@scheduler:token');
    localStorage.removeItem('@scheduler:user');
    setState({} as AuthState);
  }, [])

  return (
    <AuthContext.Provider value={{ user: state.user, signIn, signOut }}>
      {children}
    </AuthContext.Provider>
  )
}

export const useAuth = (): AuthContextState => {
  const context = React.useContext(AuthContext)

  if (!context) {
    throw new Error('useAuth must be used with AuthProvider')
  }

  return context;
}

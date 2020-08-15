import React from 'react';

import GlobalStyles from './styles/global';
import { AuthProvider } from './hooks/AuthContext'
import Toast from './components/Toast'

import SignIn from './pages/SignIn';

const App: React.FC = () => (
  <>
    <AuthProvider>
      <SignIn />
    </AuthProvider>

    <Toast />
    <GlobalStyles />
  </>
);

export default App;

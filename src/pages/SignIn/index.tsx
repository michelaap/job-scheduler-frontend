import * as React from 'react';
import { FiLogIn } from 'react-icons/fi';

import * as S from './styled';

const SignIn: React.FC = () => (
  <>
    <S.Container>
      <S.Content>
        <h1>Job Scheduler</h1>
        <form>
          <h2>Faça seu login</h2>
          <input placeholder="E-mail" />
          <input type="password" placeholder="Senha" />
          <button type="submit">Entrar</button>
          <a href="forgot">Esqueci minha senha</a>
        </form>

        <a href="http://">
          <FiLogIn /> Criar conta
        </a>
      </S.Content>

      <S.Background />
    </S.Container>
  </>
);

export default SignIn;

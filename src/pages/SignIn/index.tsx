import * as React from 'react';
import { FiLogIn, FiMail, FiLock } from 'react-icons/fi';

import * as S from './styled';
import Input from '../../components/Input';
import Button from '../../components/Button';

const SignIn: React.FC = () => (
  <>
    <S.Container>
      <S.Content>
        <h1>Job Scheduler</h1>
        <form>
          <h2>Faça seu login</h2>

          <Input name="email" icon={FiMail} placeholder="E-mail" />

          <Input
            name="password"
            icon={FiLock}
            type="password"
            placeholder="Senha"
          />

          <Button type="submit">Entrar</Button>

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

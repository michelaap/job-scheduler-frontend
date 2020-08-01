import * as React from 'react';
import { FiArrowLeft, FiUser, FiMail, FiLock } from 'react-icons/fi';

import * as S from './styled';
import Input from '../../components/Input';
import Button from '../../components/Button';

const SignUp: React.FC = () => (
  <>
    <S.Container>
      <S.Background />
      <S.Content>
        <h1>Job Scheduler</h1>
        <form>
          <h2>Faça seu cadastro</h2>

          <Input name="name" icon={FiUser} placeholder="Nome" />
          <Input name="email" icon={FiMail} placeholder="E-mail" />

          <Input
            name="password"
            icon={FiLock}
            type="password"
            placeholder="Senha"
          />

          <Button type="submit">Entrar</Button>
        </form>

        <a href="http://">
          <FiArrowLeft /> Voltar para login
        </a>
      </S.Content>
    </S.Container>
  </>
);

export default SignUp;

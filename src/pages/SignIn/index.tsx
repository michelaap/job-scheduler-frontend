import * as React from 'react';
import { FiLogIn, FiMail, FiLock } from 'react-icons/fi';
import { useForm } from 'react-hook-form';

import Input from '../../components/Input';
import Button from '../../components/Button';

import * as S from './styled';

const SignIn: React.FC = () => {
  const { register, handleSubmit, watch } = useForm();

  const onSubmit = (data: any) => console.log(data);

  return (
    <S.Container>
      <S.Content>
        <h1>Job Scheduler</h1>
        <form onSubmit={handleSubmit(onSubmit)}>
          <h2>Faça seu login</h2>

          <Input
            name="email"
            icon={FiMail}
            placeholder="E-mail"
            register={register}
            watch={watch}
          />

          <Input
            name="password"
            icon={FiLock}
            type="password"
            placeholder="Senha"
            register={register}
            watch={watch}
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
  );
};

export default SignIn;

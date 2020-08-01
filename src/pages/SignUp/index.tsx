import * as React from 'react';
import { FiArrowLeft, FiUser, FiMail, FiLock } from 'react-icons/fi';
import { useForm } from 'react-hook-form';

import Input from '../../components/Input';
import Button from '../../components/Button';

import * as S from './styled';

type SignUp = {
  name: string;
  email: string;
};

const SignUp: React.FC = () => {
  const { register, handleSubmit } = useForm<SignUp>();

  const onSubmit = (data: any) => console.log(data);

  return (
    <S.Container>
      <S.Background />
      <S.Content>
        <h1>Job Scheduler</h1>
        <form onSubmit={handleSubmit(onSubmit)}>
          <h2>Faça seu cadastro</h2>

          <Input
            name="name"
            icon={FiUser}
            placeholder="Nome"
            register={register}
          />
          <Input
            name="email"
            icon={FiMail}
            placeholder="E-mail"
            register={register}
          />

          <Input
            name="password"
            icon={FiLock}
            type="password"
            placeholder="Senha"
            register={register}
          />

          <Button type="submit">Entrar</Button>
        </form>

        <a href="http://">
          <FiArrowLeft /> Voltar para login
        </a>
      </S.Content>
    </S.Container>
  );
};

export default SignUp;

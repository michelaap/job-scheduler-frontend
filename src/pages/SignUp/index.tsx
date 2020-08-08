import * as React from 'react';
import { FiArrowLeft, FiUser, FiMail, FiLock } from 'react-icons/fi';
import { useForm } from 'react-hook-form';
import * as yup from 'yup'

import Input from '../../components/Input';
import Button from '../../components/Button';
import { useYupValidationResolver } from '../../helpers'

import * as S from './styled';

type SignUp = {
  name: string;
  email: string;
  password: string;
};

const SignUp: React.FC = () => {
  const schema = React.useMemo(() => yup.object().shape({
    name: yup.string().required('Nome obrigatório'),
    email: yup.string()
      .required('E-mail obrigatório')
      .email('Digite um e-mail válido'),
    password: yup.string().min(6, 'No mínimo 6 dígitos')
  }), [])

  const { register, handleSubmit, watch, errors } = useForm<SignUp>({
    resolver: useYupValidationResolver(schema)
  });

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
            watch={watch}
            error={errors.name && errors.name.message}
          />
          <Input
            name="email"
            icon={FiMail}
            placeholder="E-mail"
            register={register}
            watch={watch}
            error={errors.email && errors.email.message}
          />

          <Input
            name="password"
            icon={FiLock}
            type="password"
            placeholder="Senha"
            register={register}
            watch={watch}
            error={errors.password && errors.password.message}
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

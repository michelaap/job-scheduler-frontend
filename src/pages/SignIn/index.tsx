import * as React from 'react';
import * as yup from 'yup'
import { FiLogIn, FiMail, FiLock } from 'react-icons/fi';
import { useForm } from 'react-hook-form';

import Input from '../../components/Input';
import Button from '../../components/Button';
import { useYupValidationResolver } from '../../helpers'
import { AuthContext } from '../../context/AuthContext'

import * as S from './styled';

interface SignInProps {
  email: string;
  password: string;
}

const SignIn: React.FC = () => {
  const { user, signIn } = React.useContext(AuthContext);

  const schema = React.useMemo(() => yup.object().shape({
    email: yup.string()
      .required('E-mail obrigatório')
      .email('Digite um e-mail válido'),
    password: yup.string().min(6, 'No mínimo 6 dígitos')
  }), [])

  const { register, handleSubmit, watch, errors } = useForm<SignInProps>({
    resolver: useYupValidationResolver(schema)
  });

  const onSubmit = React.useCallback(({ email, password }) => {
    signIn({ email, password });
  }, [signIn] )

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

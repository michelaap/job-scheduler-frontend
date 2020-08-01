import * as React from 'react';
import { IconBaseProps } from 'react-icons';

import * as S from './styled';

type RefReturn =
  | string
  | ((instance: HTMLInputElement | null) => void)
  | React.RefObject<HTMLInputElement>
  | null
  | undefined;

type InputProps = React.DetailedHTMLProps<
  React.InputHTMLAttributes<HTMLInputElement>,
  HTMLInputElement
> & {
  name: string;
  icon?: React.ComponentType<IconBaseProps>;
  register: ({ required }: { required?: boolean }) => RefReturn;
};

const Input: React.FC<InputProps> = ({
  icon: Icon,
  register,
  required,
  ...rest
}) => {
  return (
    <S.Container>
      {Icon && <Icon size={20} />}
      <input ref={register({ required })} {...rest} />
    </S.Container>
  );
};

export default Input;

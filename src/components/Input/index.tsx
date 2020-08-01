import * as React from 'react';
import { IconBaseProps } from 'react-icons';

import * as S from './styled';

interface InputProps extends React.InputHTMLAttributes<HTMLInputElement> {
  name: string;
  icon?: React.ComponentType<IconBaseProps>;
}

const Input: React.FC<InputProps> = ({ icon: Icon, ...rest }) => (
  <S.Container>
    {Icon && <Icon size={20} />}
    <input {...rest} />
  </S.Container>
);

export default Input;

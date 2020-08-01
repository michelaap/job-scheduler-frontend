import * as React from 'react';

import * as S from './styled';

type ButtonProps = React.ButtonHTMLAttributes<HTMLButtonElement>;

const Button: React.FC<ButtonProps> = ({ children, ...rest }) => (
  <S.Container {...rest}>{children}</S.Container>
);

export default Button;

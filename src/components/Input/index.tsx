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
  register?: () => RefReturn;
  watch?: (names: string | string[] | undefined) => any;
};

const Input: React.FC<InputProps> = ({
  icon: Icon,
  register,
  watch,
  ...rest
}) => {
  const [isFocused, setIsFocused] = React.useState(false);
  const [isFilled, setIsFilled] = React.useState(false);

  const handleInputFucus = React.useCallback(() => {
    setIsFocused(true)
  }, [])

  const handleInputBlur = React.useCallback(() => {
    setIsFocused(false);

    if (watch && watch(rest.name)) {
      setIsFilled(true)
    }

  }, []);

  return (
    <S.Container isFilled={isFilled} isFocused={isFocused}>
      {Icon && <Icon size={20} />}
      <input
        onFocus={handleInputFucus}
        onBlur={handleInputBlur}
        ref={register}
        {...rest}
      />
    </S.Container>
  );
};

export default Input;

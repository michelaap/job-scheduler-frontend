import * as React from 'react';
import { IconBaseProps } from 'react-icons';
import { FiAlertCircle } from 'react-icons/fi'

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
  error?: string;
  register?: () => RefReturn;
  watch?: (names: string | string[] | undefined) => any;
};

const Input: React.FC<InputProps> = ({
  icon: Icon,
  register,
  error,
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

  }, [watch, rest.name]);

  return (
    <S.Container isErrored={!!error} isFilled={isFilled} isFocused={isFocused}>
      {Icon && <Icon size={20} />}
      <input
        onFocus={handleInputFucus}
        onBlur={handleInputBlur}
        ref={register}
        {...rest}
      />
      {error && (
        <S.Error title={error}>
          <FiAlertCircle color='#c53030' size={20} />
        </S.Error>
      )}
    </S.Container>
  );
};

export default Input;

import * as React from 'react';
import { FiAlertCircle, FiXCircle } from 'react-icons/fi'

import * as S from './styled'

const Toast: React.FC = () => {
  return (
    <S.Container>
      <S.Toast hasDescription={true}>
        <FiAlertCircle size={20} />

        <div>
          <strong>Ocorreu um erro</strong>
          <p>Não foi possível fazer login na aplicação</p>
        </div>

        <button type='button'>
          <FiXCircle size={18} />
        </button>
      </S.Toast>

      <S.Toast type='success' hasDescription={true}>
        <FiAlertCircle size={20} />

        <div>
          <strong>Ocorreu um erro</strong>
          <p>Não foi possível fazer login na aplicação</p>
        </div>

        <button type='button'>
          <FiXCircle size={18} />
        </button>
      </S.Toast>

      <S.Toast type='error' hasDescription={true}>
        <FiAlertCircle size={20} />

        <div>
          <strong>Ocorreu um erro</strong>
          <p>Não foi possível fazer login na aplicação</p>
        </div>

        <button type='button'>
          <FiXCircle size={18} />
        </button>
      </S.Toast>
    </S.Container>
  )
}

export default Toast;

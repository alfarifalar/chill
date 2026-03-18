import React, { useState } from 'react';
import { FiEye, FiEyeOff } from 'react-icons/fi';
import Input from './Input';

function PasswordInput({ ...props }) {
  const [visible, setVisible] = useState(true);
  return (
    <div className='position-relative'>
      <Input
        {...props}
        type={visible ? 'password' : 'text'}
      />
      <button
        type='button'
        className='d-flex align-items-center position-absolute top-50 end-0 translate-middle-y btn me-3 '
        style={{ '--bs-btn-active-border-color': 'transparent' }}
        aria-label={visible ? 'Hide password' : 'Show password'}
        aria-pressed={visible}
        onMouseDown={(e) => e.preventDefault()}
        onClick={() => setVisible((prev) => !prev)}
      >
        {visible ? <FiEye /> : <FiEyeOff />}
      </button>
    </div>
  );
}

export default PasswordInput;

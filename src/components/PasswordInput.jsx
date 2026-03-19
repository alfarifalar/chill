import { Input } from '@heroui/react';
import React, { useState } from 'react'
import { IoMdEye, IoMdEyeOff } from 'react-icons/io';

function PasswordInput({...props}) {
  const [visible, setVisible] = useState(true);
  return (
    <Input
      {...props}
      type={visible ? "text" : "password"}
      endContent={
        <button
          type="button"
          onMouseDown={(e) => e.preventDefault()}
          onClick={() => setVisible((prev) => !prev)}
          className="focus:outline-none"
        >
          {visible ? <IoMdEyeOff className='text-light-disabled text-[12px] sm:text-[18px]'/> : <IoMdEye className='text-light-disabled text-[12px] sm:text-[18px]' />}
        </button>
      }
    />
  )
}

export default PasswordInput
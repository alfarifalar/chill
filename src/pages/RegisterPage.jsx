import { Card, CardBody, CardHeader, Form, Image, Input } from '@heroui/react'
import React, { useState } from 'react'
import { Link, useNavigate } from 'react-router-dom'
import PasswordInput from '../components/PasswordInput'
import { FcGoogle } from 'react-icons/fc'

function RegisterPage() {
  const [password, setPassword] = useState('')
  // eslint-disable-next-line no-unused-vars
  const [submitted, setSubmitted] = useState(null)
  const [errors, setErrors] = useState({})
  const navigate = useNavigate()

  // style input
  const labelClass = `
  group-data-[filled-within=true]:text-light  
  group-data-[filled-within=true]:-translate-y-[calc(100%_+_10px/2_+_14px)] 
  sm:group-data-[filled-within=true]:-translate-y-[calc(100%_+_var(--heroui-font-size-large)/2_+_20px)] 
  text-[10px] sm:text-lg font-medium
  `
  const inputWrapperClass = `
  bg-transparent 
  data-[hover=true]:bg-input group-data-[focus=true]:bg-input
  data-[invalid=true]:bg-input group-data-[invalid=true]:bg-input
  min-h-[28px] h-[28px] sm:h-[50px]
  py-2 sm:py-[14px] px-3 sm:px-5 
  border border-input-normal rounded-xl sm:rounded-3xl
  `
  const inputClass = `
  group-data-[has-value=true]:text-light
  placeholder:text-light-secondary 
  text-[9.24px] sm:text-base font-normal 
  `

  // Realtime password validation
  const getPasswordError = (value) => {
    if (value.length < 8) {
      return 'Kata sandi harus 8 karakter atau lebih'
    }
    if ((value.match(/[A-Z]/g) || []).length < 1) {
      return 'Kata sandi membutuhkan setidaknya 1 huruf kapital'
    }
    if ((value.match(/[^a-z]/gi) || []).length < 1) {
      return 'Kata sandi membutuhkan setidaknya 1 simbol'
    }
    return null
  }

  const onSubmit = (e) => {
    e.preventDefault()
    const data = Object.fromEntries(new FormData(e.currentTarget))

    // custom validation checks
    const newErrors = {}

    // password validation
    const passwordError = getPasswordError(data.password);
    if (passwordError) {
      newErrors.password = passwordError
    }

    if (Object.keys(newErrors).length > 0) {
      setErrors(newErrors);
      return;
    }

    // Clear errors and submit
    setErrors({});
    setSubmitted(data);
    navigate('/login');
  }
  return (
    <section className='flex justify-center items-center h-screen px-5 lg:px-0'>
      <Card className='w-full sm:w-132.25 rounded-lg gap-5 p-6 sm:gap-9 sm:p-10 bg-[oklch(21.545%_0.00607_236.988/0.84)]'>
        <CardHeader className='flex flex-col items-center justify-center gap-5 sm:gap-9 p-0'>
          <Image
          src="/img/logo.svg" 
          alt="Chill" 
          className='h-6 sm:h-11'
          />
          <div className='text-center text-light'>
            <h1 className='font-bold text-lg sm:text-[32px]'>Daftar</h1>
            <p className='text-[10px] sm:text-base'>Selamat datang!</p>
          </div>
        </CardHeader>
        <CardBody className='p-0'>
          <Form
            className='w-full justify-center items-center gap-5 sm:gap-9' 
            validationErrors={errors}
            onReset={()=> setSubmitted(null)}
            onSubmit={onSubmit}
          >
            <Input
              isRequired
              label='Username'
              labelPlacement='outside'
              classNames={{ 
                label: labelClass,
                inputWrapper: inputWrapperClass,
                input: inputClass
              }}
              name='username'
              placeholder='Masukkan username'
              errorMessage={({validationDetails}) => {
                if (validationDetails.valueMissing) {
                  return 'Mohon masukkan username anda'
                }
                return errors.name
              }}
            />
            <PasswordInput
              isRequired
              label='Kata Sandi'
              labelPlacement='outside'
              classNames={{ 
                label: labelClass,
                inputWrapper: inputWrapperClass,
                input: inputClass
              }}
              name='password'
              placeholder='Masukkan kata sandi'
              errorMessage={({validationDetails}) => {
                if (validationDetails.valueMissing) {
                  return 'Mohon masukkan kata sandi anda'
                }
                return errors.password
              }}
              value={password}
              onValueChange={setPassword}
            />
            <div className='flex flex-col w-full'>
              <PasswordInput
                isRequired
                label='Konfirmasi Kata Sandi'
                labelPlacement='outside'
                classNames={{ 
                  label: labelClass,
                  inputWrapper: inputWrapperClass,
                  input: inputClass
                }}
                name='confirmPassword'
                placeholder='Masukkan kata sandi'
                errorMessage={({validationDetails}) => {
                  if (validationDetails.valueMissing) {
                    return 'Mohon masukkan konfirmasi kata sandi anda'
                  }
                  return errors.confirmPassword
                }}
                value={password}
                onValueChange={setPassword}
              />
              <div className='flex justify-between mt-2 sm:mt-3'>
                <span className='text-light-secondary text-[10px] sm:text-base'>
                  Sudah punya akun? <Link to="/login" className='decoration-0 text-light text-[10px] sm:text-base'>Masuk</Link>
                </span>
              </div>
            </div>
            <div className='flex flex-col w-full gap-1 sm:gap-2'>
              <button className='bg-extra text-light text-[10px] sm:text-base font-medium py-2 sm:py-3 px-3 sm:px-5 border border-outline rounded-[14px] sm:rounded-3xl' type='submit'>Daftar</button>
              <p className='text-[10px] sm:text-small text-center text-light-disabled font-medium'>Atau</p>
              <button className='flex items-center justify-center bg-transparent text-light text-[10px] sm:text-base font-medium py-2 sm:py-3 px-3 sm:px-5 border border-outline rounded-[14px] sm:rounded-3xl'><FcGoogle className='inline text-[10px] lg:text-[18px] me-3 sm:me-5'/>Masuk dengan Google</button>
            </div>
          </Form>
        </CardBody>
      </Card>
    </section>
  )
}

export default RegisterPage
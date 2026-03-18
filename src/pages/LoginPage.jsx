import React from 'react'
import { Link, useNavigate } from 'react-router-dom';
import useInput from '../hooks/useInput'
import Input from '../components/form/Input';
import PasswordInput from '../components/form/PasswordInput';

function LoginPage() {
  const [username, onUsernameChange] = useInput('');
  const [password, onPasswordChange] = useInput('');
  const navigate = useNavigate();

  function loginHandler(event){
    event.preventDefault();
    navigate('/');
  }
  return (
    <section className='d-flex justify-content-center align-items-center vh-100'>
      <div className="card col-12 col-md-5 rounded-3 gap-5 p-5">
        <img src="/images/logo.svg" alt="Chill" height={44}/>
        <div className='text-center'>
          <h2>Masuk</h2>
          <p className='mb-0'>Selamat datang kembali!</p>
        </div>
        <form  onSubmit={loginHandler}>
            <Input
              className='mb-5'
              id='input-username'
              type='text'
              name='username'
              label='Username'
              placeholder='Masukkan username'
              value={username}
              onChange={onUsernameChange}
            />
            <label htmlFor="input-password" className='mb-2'>Kata Sandi</label>
            <PasswordInput
              id='input-password'
              type='password'
              name='password'
              placeholder='Masukkan kata sandi'
              value={password}
              onChange={onPasswordChange}
            />
            <div className='d-flex justify-content-between mb-5' style={{ marginTop: '12px' }}>
              <span style={{ color:'var(--tl-secondary)' }}>Belum punya akun? <Link to="/Register" className=' text-decoration-none text-light'> Daftar</Link></span>
              <span>Lupa kata sandi?</span>
            </div>
            <div className='d-grid mb-3'>
              <button className='btn btn-gray' type='submit'>Masuk</button>
              <p className='text-center'>Atau</p>
              <button className='btn btn-outline-gray'>Masuk dengan Google</button>
            </div>
          </form>

      </div>
    </section>
  )
}

export default LoginPage
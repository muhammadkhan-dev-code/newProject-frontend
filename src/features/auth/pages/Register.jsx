import React, { useState } from 'react'
import { useNavigate } from 'react-router'
import { useAuth } from '../hooks/useAuth.js'

const Register = () => {
  const navigate = useNavigate()
  const [username, setUsername] = useState('')
  const [email, setEmail] = useState('')
  const [password, setPassword] = useState('')

  const { loading, handleRegister } = useAuth()

  const handleSubmit = async e => {
    e.preventDefault()
    await handleRegister({ username, email, password })
    navigate('/homePage')
  }

  if (loading) {
    return <h3>Loading...</h3>
  }
  return (
    <div className='min-h-screen bg-linear-to-b from-slate-950 via-gray-950 to-zinc-950 px-4 py-10 sm:px-6 lg:px-8'>
      <div className='mx-auto my-10 w-full max-w-md rounded-2xl border border-cyan-900/40 bg-slate-900/70 p-6 shadow-[0_22px_60px_rgba(0,0,0,0.55)] backdrop-blur-md sm:p-8'>
        <h3 className='mb-1 text-center text-2xl font-bold tracking-tight text-slate-100'>
          Create your account
        </h3>
        <p className='mb-6 text-sm text-slate-400'>
          Join now. Fill in your details to get started.
        </p>

        <form action='' className='space-y-5' onSubmit={handleSubmit}>
          <div className='space-y-2'>
            <label
              htmlFor='username'
              className='block text-sm font-medium text-slate-300'
            >
              Username
            </label>
            <input
              type='text'
              id='username'
              onChange={e => setUsername(e.target.value)}
              name='username'
              placeholder='Enter your username'
              className='w-full rounded-lg border border-slate-700 bg-slate-800/90 px-4 py-2.5 text-sm text-slate-100 placeholder:text-slate-500 outline-none ring-0 transition focus:border-cyan-300 focus:shadow-[0_0_0_3px_rgba(103,232,249,0.2)]'
            />
          </div>

          <div className='space-y-2'>
            <label
              htmlFor='email'
              className='block text-sm font-medium text-slate-300'
            >
              Email
            </label>
            <input
              type='email'
              id='email'
              name='email'
              onChange={e => setEmail(e.target.value)}
              placeholder='Enter your email'
              className='w-full rounded-lg border border-slate-700 bg-slate-800/90 px-4 py-2.5 text-sm text-slate-100 placeholder:text-slate-500 outline-none ring-0 transition focus:border-cyan-300 focus:shadow-[0_0_0_3px_rgba(103,232,249,0.2)]'
            />
          </div>

          <div className='space-y-2'>
            <label
              htmlFor='password'
              className='block text-sm font-medium text-slate-300'
            >
              Password
            </label>
            <input
              type='password'
              id='password'
              onChange={e => setPassword(e.target.value)}
              name='password'
              placeholder='Create a password'
              className='w-full rounded-lg border border-slate-700 bg-slate-800/90 px-4 py-2.5 text-sm text-slate-100 placeholder:text-slate-500 outline-none ring-0 transition focus:border-cyan-300 focus:shadow-[0_0_0_3px_rgba(103,232,249,0.2)]'
            />
          </div>

          <button
            type='submit'
            className='w-full rounded-lg bg-linear-to-r from-cyan-400 to-sky-500 px-4 py-2.5 text-sm font-semibold text-slate-950 transition hover:from-cyan-300 hover:to-sky-400 focus:outline-none focus:shadow-[0_0_0_3px_rgba(125,211,252,0.35)]'
          >
            Register
          </button>
        </form>

        <div className='p-5 flex flex-col text-center'>
          <p className='text-md text-slate-400 '>
            Already have an account?{' '}
            <button
              type='button'
              className='text-cyan-500 hover:text-cyan-300 hover:cursor-pointer focus:outline-none focus:underline '
              onClick={() => navigate('/login')}
            >
              Sign In
            </button>
          </p>
        </div>
      </div>
    </div>
  )
}

export default Register

import React, { useState } from 'react'
import { Link, useNavigate } from 'react-router-dom'
import { UserAuth } from '../context/AuthContext'

const Login = () => {

  const {user,logIn}=UserAuth()
  const [email,setEmail]=useState('')
  const [password,setPassword]=useState('')
  const navigate=useNavigate()
  const [error,setError]=useState('')

  const handleSubmit=async (e) => {
    e.preventDefault()
    setError('')
    try{
      await logIn(email,password)
      navigate('/')
    }
    catch(err){
      console.log(err)
      setError(err.message)
    }
  }
  return (
    <>
      <div className='w-full h-screen'>
            <img className='hidden sm:block absolute w-full h-full object-cover' src='https://assets.nflxext.com/ffe/siteui/vlv3/51e53f54-0d9f-40ec-9e05-c030def06ac9/be5b2939-da9f-4b9f-b76b-31b32ad0515b/IN-en-20230515-popsignuptwoweeks-perspective_alpha_website_large.jpg' alt='/' />
            <div className='bg-black/60 fixed top-0 left-0 w-full h-screen'></div>
            <div className='fixed w-full px-4 py-24 z-50'>
                <div className='max-w-[450px] h-[600px] mx-auto bg-black/75 text-white'>
                <div className='max-w-[320px] mx-auto py-16'>
                    <h1 className='text-3xl font-bold'>Sign In</h1>
                    {error?<p className='p-2 my-3 bg-red-400 rounded'>{error}</p>:null}
                    <form onSubmit={handleSubmit} className='w-full flex flex-col py-4'>
                      <input onChange={(e)=>setEmail(e.target.value)} className='rounded py-3 my-2 px-2 bg-gray-700' type='email' placeholder='Email' autoComplete='email' />
                      <input onChange={(e)=>setPassword(e.target.value)} className='rounded py-3 my-2 px-2 bg-gray-700' type='password' placeholder='Password' autoComplete='current-password' />
                      <button className='bg-red-600 py-3 my-6 rounded font-bold'>Sign In</button>

                      <div className='flex justify-between text-gray-600 text-sm'>
                        <p><input type='checkbox' /> Remember me</p>
                        <p>Need help?</p>
                      </div>
                      <p className='py-6'><span className='text-gray-600'>New to netflix?</span> <Link to='/signup'> Sign up</Link></p>
                    </form>
                </div>
                </div>
            </div>
        </div>
    </>
  )
}

export default Login